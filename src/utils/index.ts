/*
 * Computes the number of years, months and days that passed from a given date to today's date.
 *
 * @param {Date} date - The date that current date will be substracted from.
 * @returns {Object} An object containing years, months and days from @date to now.
 */
export const getYearsMonthsDaysFromDate = (
  date: Date
): { years: number; months: number; days: number } => {
  const NOW = new Date().getTime();
  const DIFF_MILLISECONDS = Math.abs(NOW - date.getTime());

  let days = Math.floor(DIFF_MILLISECONDS / (1000 * 60 * 60 * 24));
  const years = Math.floor(days / 365);
  const months = Math.floor(days / 30.44);
  days = Math.round(days % 30.44);

  return { years, months, days };
};
