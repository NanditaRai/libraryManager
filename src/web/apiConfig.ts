import { POST, GET, PUT } from './constants';

const serviceConstants = {
  baseURL: 'http://localhost:3080',
  timeOut: 30000,
  commonHeaders: {
    'Content-Type': 'application/json',
    'Accept-Encoding': 'gzip, deflate',
  },
};

export default {
  getList: {
    endPoint: '/booklist',
    method: GET,
  },
  getBook: {
    endPoint: '/book',
    method: GET,
  },
  addBook: {
    endPoint: '/book',
    method: POST,
  },
  editBook: {
    endPoint: '/book',
    method: PUT,
  },
};

export { serviceConstants };
