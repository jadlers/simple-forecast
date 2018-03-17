const BASE_URL = 'https://dataservice.accuweather.com';
const API_KEY = process.env.REACT_APP_ACCUWEATHER_API_KEY;

/**
 * @async
 * @param {string} name name of city to search for
 * @return {{ok: boolean, cities: []} list of cities matching search string
 */
export const searchLocation = async name => {
  let searchResult = { cities: [] };

  const url =
    BASE_URL +
    '/locations/v1/cities/search' +
    `?apikey=${API_KEY}` +
    `&q=${name}`;

  try {
    const res = await fetch(url);
    if (res.ok) {
      const parsedRes = await res.json();
      searchResult.cities = parsedRes;
      searchResult.ok = true;
    } else {
      searchResult.ok = false;
    }
  } catch (e) {
    console.error(e);
    searchResult.ok = false;
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
