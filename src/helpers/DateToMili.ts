/* eslint-disable prettier/prettier */
export const dateToMilliseconds = (dateString: string | number | Date) => {
  const date = new Date(dateString);
  const milliseconds = date.getTime();
  return milliseconds;
};
