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
