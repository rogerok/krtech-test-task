export enum MonthType {
  NUM = "numeric",
  STR = "long",
}

export const formatToRuDate = (date: string | Date, month: MonthType) =>
  new Date(date).toLocaleString("ru", {
    month,
    day: "numeric",
  });

export const formatHourMinutes = (date: number | string) => {
  const d = new Date(date);
  const hour = d.getHours();
  const minutes =
    d.getMinutes() < 10 ? `0${d.getMinutes()}` : `${d.getMinutes()}`;
  const formattedDate = `${hour}:${minutes}`;
  return formattedDate;
};
