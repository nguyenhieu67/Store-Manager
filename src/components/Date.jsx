export const GetDateString = (daysToAdd = 0) => {
  const date = new Date();

  date.setDate(date.getDate() + daysToAdd);

  const offset = date.getTimezoneOffset() * 60000;
  return new Date(date - offset).toISOString().split("T")[0];
};
