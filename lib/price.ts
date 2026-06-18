export type PayMode = "cash" | "card";

/** Cash prices are the source of truth; card adds a 2% surcharge. */
export function displayPrice(cash: number, mode: PayMode): string {
  const value = mode === "card" ? cash * 1.02 : cash;
  return `$${value.toFixed(2)}`;
}
