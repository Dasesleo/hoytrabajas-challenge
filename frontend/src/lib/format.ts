export function formatMoney(value: number, locale = "es-EC", currency = "USD") {
  try {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
    }).format(value);
  } catch {
    return `$${value}`;
  }
}
