/* eslint-disable prettier/prettier */
export function millisecondsToDate(milliseconds: number) {
  console.log(milliseconds);
  var d = new Date(milliseconds);
  return d.toLocaleString();
}
