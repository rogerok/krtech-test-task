enum MonthType {
  NUM = "numeric",
  STR = "long",
}

export const formatMinutes = (date: Date) =>
  date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

export const formatToRuDate = (date: string | Date, month: MonthType) =>
  new Date(date).toLocaleString("ru", {
    year: "numeric",
    month,
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

export const formatHourMinutes = (date: string) => {
  const d = new Date(date);
  const hour = d.getHours();
  const minutes = formatMinutes(d);
  const formattedDate = `${hour}:${minutes}`;
  return formattedDate;
};

export const formatFullDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.toLocaleString("en", { month: "long" });
  const day = date.getDate();
  const hour = date.getHours();
  const minutes = formatMinutes(date);
  const seconds = date.getSeconds();
  const miliseconds = date.getMilliseconds();
  const fullDate = `${month} ${day} ${year} ${hour}:${minutes}:${seconds}:${miliseconds}`;

  return fullDate;
};
