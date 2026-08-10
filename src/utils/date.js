export const todayISO = () => new Date().toISOString().slice(0, 10);

export function formatDate(date) {
  return new Date(`${date}T12:00:00`).toLocaleDateString([], {
    year: "numeric", month: "short", day: "numeric"
  });
}

export function dayKey(date = new Date()) {
  return date.toLocaleDateString("en-US", { weekday: "long" }).toLowerCase();
}

export function sameDate(a, b) {
  return a === b;
}
