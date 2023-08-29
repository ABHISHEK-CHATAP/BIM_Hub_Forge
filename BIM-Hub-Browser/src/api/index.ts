import axios from "axios";
import {requestHandler, successHandler, errorHandler} from './interceptor/index'
const ApiFn = () =>
  axios.create({
    baseURL: `http://localhost:8080`,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "origin-name": window.location.origin.toString(),
    },
  });

const API = ApiFn();

API.interceptors.request.use((request) => requestHandler(request));

API.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);

export default API;
