export function RoundNumber(value) {
  if (typeof value !== "number" || isNaN(value)) return "--";
  return Math.round(value);
}
