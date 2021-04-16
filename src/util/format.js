/**
 * Should've written a better csv parser so the front end doesnt have to deal with this but alas.
 * all good cuz ik the exercise was more focused on object structure than content of attributes.
 * @param {any} value to format
 * @returns formatted value
 */
export const filterOutDanglingQuote = value => {
  if (value !== null) {
    return value.split('').filter(c => c !== '"').join('');
  };
  return value;
};
/**
 * Month Text From Gregorian Calendar Index
 * @param {number} number value of month
 * @param {boolean} full want the full next or nah?
 * @returns {string} month name
 */
export const monthToText = (number, full = false) => {
  switch (number) {
    case 1:
      return `${full ? 'January' : 'JAN'}`;
    case 2:
      return `${full ? 'February': 'FEB'}`;
    case 3:
      return `${full ? 'March' : 'MAR'}`;
    case 4:
      return `${full ? 'April' : 'APR'}`;
    case 5:
      return `${full ? 'May' : 'MAY'}`;
    case 6:
      return `${full ? 'June' : 'JUN'}`;
    case 7:
      return `${full ? 'July' : 'JUL'}`;
    case 8:
      return `${full ? 'August' : 'AUG'}`;
    case 9:
      return `${full ? 'September' : 'SEPT'}`;
    case 10:
      return `${full ? 'October' : 'OCT'}`;
    case 11:
      return `${full ? 'November' : 'NOV'}`;
    case 12:
      return `${full ? 'December' : 'DEC'}`;
    default:
      return null;
  }
}

export default filterOutDanglingQuote;
