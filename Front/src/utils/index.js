import Moment from 'moment';

/**
 * Convert a string into HTML code
 *
 * @param {string} text The text to translate into HTML
 * @returns The text in HTML format
 */
export function createMarkup(text) {
  return { __html: text };
}

/**
 * Convert a string into an URL friendly format
 *
 * @param {string} string The string to convert
 * @returns String converted to URL format
 */
export const stringToUrl = (string = '') => {
  const newString = string
    .toLowerCase()
    .replace(/[ '/,]/g, '-')
    .replace('à', 'a')
    .replace(/[éèê]/g, 'e')
    .replace(/[:!?$]/g, '')
    .replace('ù', 'u')
    .replace('ô', 'o')
    .replace('ç', 'c');

  return newString;
};

/**
 * Convert a date format into a readable date for french humans
 *
 * @param {string} date Date to convert
 * @returns string
 */
export function formatDate(date) {
  // Moment(date).locale().format('DD MMMM YYYY');

  // console.log(Moment(date).format('DD MMMM YYYY à HH:mm'));
  Moment.locale('fr');
  // console.log(Moment(date).format('DD MMMM YYYY à HH:mm'));
  return Moment(date).utcOffset('GMT-00:00').format('dddd DD MMMM YYYY à HH:mm');
}
