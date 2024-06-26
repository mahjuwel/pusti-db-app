import axios from 'axios';
import { getToken } from '../utils/token';

// TODO: import from ENV
// const BASE_URL = 'http://10.0.2.2:3003';
const BASE_URL = 'http://192.168.0.199:3010/api/v1/';

const request = axios.create({
  baseURL: BASE_URL,
});

export const updateAxiosHeaders = () => {
  getToken()
    .then(token => {
      request.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    })
    .catch(e => console.log(e));
};

export default request;
