
interface Config {
  handlerEnabled?: boolean;
}

export const isHandlerEnabled = (config: Config = {}): boolean =>
  // eslint-disable-next-line no-prototype-builtins
  !(config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled);

export const requestHandler = async (request: any) => {
  if (isHandlerEnabled(request)) {
    const temp = JSON.parse(localStorage.getItem("token") || "{}");
    console.log(temp,"token");
    
    const token = temp.public_token;
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    } else {
      delete request?.default?.headers?.common?.Authorization;
    }
  }
  return request;
};

export const successHandler = (response: any): any => {
  if (isHandlerEnabled(response)) {
    //Do Something
  }
  return response;
};

interface CustomError {
  response: any;
  config: any;
}

export const errorHandler = (error: CustomError): Promise<never> => {
  if (isHandlerEnabled(error.config)) {
    if (error.response?.status == 401) {
      localStorage.removeItem("token");
      window.location.href = "/";
    }
  }
  return Promise.reject({ ...error });
};
