import axios, {AxiosError, InternalAxiosRequestConfig} from 'axios';
import Config from 'react-native-config';
import {AXIOS_TIMEOUT} from 'src/Constanst';
import configs from 'src/Constanst/config';

const instance = axios.create({
  baseURL: Config.API_URL,
  timeout: AXIOS_TIMEOUT,
  withCredentials: false,
  responseType: 'json',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    Authorization: configs.API_TOKEN,
  },
});

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) =>
    // Do something before request is sent
    config,
  (error: AxiosError) =>
    // Do something with request error
    Promise.reject(error),
);

export default instance;
