import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { handleSuccess, handleError } from './interceptors';

const getConfig = () => {
  return {
    headers: {
      Accept: 'application/json',
    },
  };
};

const api = (baseURL: string, config?: AxiosRequestConfig) => {
  const instance = axios.create({ baseURL, ...config });

  instance.request = async <Data>(path: string, requestConfig?: AxiosRequestConfig) => {
    const mergedConfig: AxiosRequestConfig = { ...requestConfig, ...getConfig() };

    return instance(path, mergedConfig).then((response: AxiosResponse<Data>) => response.data);
  };

  instance.interceptors.response.use(handleSuccess, handleError);

  return instance;
};

export default api;
