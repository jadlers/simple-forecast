const BASE_URL = 'https://dataservice.accuweather.com';
const API_KEY = ''; // Has to be set

/**
 * @async
 * @param {string} name name of city to search for
 * @return {Object[]} list of cities matching search string
 */
export const searchLocation = async name => {
  let searchResult = [];
  try {
    const url =
      BASE_URL +
      '/locations/v1/cities/search' +
      `?apikey=${API_KEY}` +
      `&q=${name}`;
    const res = await fetch(url);
    if (res.status !== 200) {
      console.warn(`Non 200 response status (${res.status})`);
      console.warn(res);
    }
    searchResult = res.status === 200 ? await res.json() : [];
  } catch (error) {
    console.error(error);
  }

  return searchResult;
};

/**
 * @param {number} key for the city to get forecast to
 */
export const fiveDayForecast = async key => {
  let forecast = {};
  try {
    const metric = 'true';
    const url =
      `${BASE_URL}/forecasts/v1/daily/5day/${key}` +
      `?apikey=${API_KEY}` +
      `&metric=${metric}`;
    const res = await fetch(url);
    if (res.status !== 200) {
      console.warn(`Non 200 response status (${res.status})`);
      console.warn(res);
    }
    forecast = res.status === 200 ? await res.json() : [];
  } catch (error) {
    console.error(error);
  }

  return forecast;
};

/**
 * @param {number} iconNumber AccuWeathers id for an icon
 * @return {string} an URL pointing to the image of the weather status given
 */
export const weatherStateIcon = iconNumber => {
  return (
    `https://developer.accuweather.com/sites/default/files/` +
    (iconNumber > 9 ? iconNumber : '0' + iconNumber) +
    `-s.png`
  );
};
