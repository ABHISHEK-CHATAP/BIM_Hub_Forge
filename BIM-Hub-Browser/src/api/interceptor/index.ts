import axios from 'axios';
interface Config {
  handlerEnabled?: boolean;
}

export const isHandlerEnabled = (config: Config = {}): boolean =>
  // eslint-disable-next-line no-prototype-builtins
  !(config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled);

export const requestHandler = async (request: any) => {
  if (isHandlerEnabled(request)) {
    // DO SOMETHING
    const temp = JSON.parse(localStorage.getItem('token') || '{}');
    const token = temp.public_token;
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    } else {
      delete request?.defaults?.headers?.common?.Authorization;
    }
  }
  return request;
};

export const successHandler = (response: any): any => {
  if (isHandlerEnabled(response)) {
    // DO SOMETHING
  }
  return response;
};

interface CustomError {
  response: any;
  config: any;
}

export const errorHandler = (error: CustomError): Promise<never> => {
  if (isHandlerEnabled(error.config)) {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/';
    }
    // DO SOMETHING
  }
  return Promise.reject({ ...error });
};