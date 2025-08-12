const CART_KEY = "cart_id";

export function getOrCreateCartId(): string {
  if (typeof window === "undefined") return "default";

  const existing = window.localStorage.getItem(CART_KEY);
  if (existing && existing.trim() !== "") {
    return existing;
  }

  const newId =
    globalThis.crypto && "randomUUID" in globalThis.crypto
      ? (globalThis.crypto as Crypto).randomUUID()
      : `cart_${Math.random().toString(36).slice(2, 10)}`;

  window.localStorage.setItem(CART_KEY, newId);
  return newId;
}
