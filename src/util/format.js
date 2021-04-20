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
  // might be stored as string so always type cast to number here
  switch (+number) {
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

const centSwitch = cents => {
  switch (cents) {
    case cents.length < 1:
      return '00';
    case cents.length === 1:
      return `${cents}0`;
    default:
      return `${cents.substring(0,2)}`;
  }
};

const dollarFormat = dollar => {
  if (dollar.length > 3) {
    let index = dollar.length - 1;
    let result = [];
    while (index >= 0) {
      if (
        (index !== (dollar.length - 1)) &&
        (index - 1 % 3 === 0)) {
        result.unshift(`,${dollar[index]}`)
      } else {
        result.unshift(dollar[index]);
      }
      index--;
    }
    return result.join('');
  }
  return dollar;
};

export const numberFormat = number => {
  number += '';
  const dollar = number.split('.')[0];
  const cents = number.split('.')[1];
  return `${dollarFormat(dollar)}.${!cents ? '00' : centSwitch(cents)}`;
};

export default filterOutDanglingQuote;
