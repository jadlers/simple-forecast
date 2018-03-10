import mockSearchRes from './mock/search.json';

/**
 * @async
 * @param {string} name name of city to search for
 * @return {Object[]} list of cities matching search string
 */
export const searchLocation = async name => {
  return mockSearchRes;
};
