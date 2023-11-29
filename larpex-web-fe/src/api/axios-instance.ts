import Axios, { AxiosRequestConfig } from "axios";

export const AXIOS_INSTANCE = Axios.create({
  baseURL: import.meta.env.VITE_LARPEX_API_URL,
});

AXIOS_INSTANCE.interceptors.request.use(function (config) {
  const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFhYWFhQGFkZHNkYXNkYXMuY29tIiwibmJmIjoxNzAxMjkxMTY4LCJleHAiOjE3MDEyOTQ3NjgsImlhdCI6MTcwMTI5MTE2OCwiaXNzIjoiTGFycGV4QXBwIn0.56H4BSdc7jeJRiMqHxsgIaJiBpgaORsfVeKMg6C6A5g';
  config.headers.Authorization =  token;
   
  return config;
});

export const customInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
): Promise<T> => {
  const source = Axios.CancelToken.source();
  const promise = AXIOS_INSTANCE({
    ...config,
    ...options,
    cancelToken: source.token,
  }).then(({ data }) => data);

   // @ts-expect-error cancellation
  promise.cancel = () => {
    source.cancel('Query was cancelled');
  };

  return promise;
};
