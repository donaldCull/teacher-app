
export function dateTime(): (date: Date) => string {
  const formatter = new Intl.DateTimeFormat("en", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  });

  return function (date: Date) {

    return formatter.format(date);
  };
}
