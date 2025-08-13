export type ComboProduct = { id: number; name: string; price: number };

/**
 * Devuelve la combinación de productos con mayor suma <= budget.
 * Regla: cada producto se puede usar 0 o 1 vez (como en el PDF).
 */
export function findBestCombination(
  products: ComboProduct[],
  budget: number
): ComboProduct[] {
  const b = Math.max(0, Math.floor(budget || 0));
  const dp: { value: number; pick: number[] }[] = Array.from(
    { length: b + 1 },
    () => ({ value: 0, pick: [] })
  );

  for (let i = 0; i < products.length; i++) {
    const p = products[i];
    const price = Math.floor(p.price);
    if (price <= 0) continue;
    for (let cap = b; cap >= price; cap--) {
      const candidate = dp[cap - price].value + price;
      if (candidate > dp[cap].value) {
        dp[cap] = { value: candidate, pick: [...dp[cap - price].pick, i] };
      }
    }
  }
  return dp[b].pick.map((idx) => products[idx]);
}
