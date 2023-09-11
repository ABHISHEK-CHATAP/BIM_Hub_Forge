import axios from 'axios';
import { requestHandler, successHandler, errorHandler } from './interceptor/index';

const ApiFn = () =>
  axios.create({
    headers: {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });

const API = ApiFn();
// Handle request process
API.interceptors.request.use((request) => requestHandler(request));

// Handle response process
API.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error),
);

export default API;