import axios from 'axios';
import { requestHandler, successHandler, errorHandler } from './interceptor/index';

const ApiFn = () =>
  axios.create({
    baseURL: `${import.meta.env.VITE_APP_BASE_URL}`,
    headers: {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'origin-name': window.location.origin.toString(),
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