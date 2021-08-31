export const elapsedTime = (date) => {
  let nowDate = new Date();
  let actualDate = new Date(date);
  let elapsedTime = actualDate.getTime() - nowDate.getTime();
  let elapsedDay = Math.floor(Math.abs(elapsedTime/86400000));

  return elapsedDay
}

export const getDate = (isoDate) => {
  const date = new Date(isoDate);
  const [day, month, year] = [date.getDate(), date.getMonth(), date.getFullYear()];
  const dateString = `${day} | ${month} | ${year}`;
  return dateString;
}