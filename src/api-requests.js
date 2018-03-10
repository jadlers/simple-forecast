import mockSearchRes from './mock/search.json';
import mockForecast from './mock/forecast.json';

const BASE_URL = 'https://www.metaweather.com';

/**
 * @async
 * @param {string} name name of city to search for
 * @return {Object[]} list of cities matching search string
 */
export const searchLocation = async name => {
  return mockSearchRes;
};

/**
 * @param {number} woeid id for the city to get forecast for
 */
export const fiveDayForecast = async woeid => {
  return mockForecast;
};

/**
 * @param {string} abbr Abreviation of weather status
 * @return {string} an URL pointing to the image of the weather status given
 */
export const weatherStateIcon = abbr => {
  return `${BASE_URL}/static/img/weather/${abbr}.svg`;
};
