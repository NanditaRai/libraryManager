import { GET } from './constants';
import { serviceConstants } from './apiConfig';

const addQueryParamsToReq = (resourceURL = '', query = {}) => {
  if (Object.keys(query).length < 1) return resourceURL;
  const queryString = Object.keys(query)
    .reduce((accumulator, currentValue) => {
      accumulator.push(`${currentValue}=${query[currentValue]}`);
      return accumulator;
    }, [])
    .join('&');

  return `${resourceURL}?${queryString}`;
};

const callApi = async ({ endPoint, method = GET }, data = {}) => {
  try {
    let response = {};
    const { commonHeaders, baseURL } = serviceConstants;
    const url = `${baseURL}${endPoint}`;
    if (method === GET) {
      response = await fetch(addQueryParamsToReq(url, data), {
        method,
        headers: {
          ...commonHeaders,
        },
      });
    } else {
      response = await fetch(url, {
        method,
        body: JSON.stringify(data),
        headers: {
          ...commonHeaders,
        },
      });
    }
    if (response.ok) {
      const res = await response.json();
      return res;
    }
    throw new Error('Something Went Wrong');
  } catch (error) {
    throw new Error('Something Went Wrong');
  }
};

export default callApi;
