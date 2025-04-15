import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { environment } from '../../environment';

const TTL = 30 * 60 * 1000;

const buildKey = (config: AxiosRequestConfig): string => {
  const url = config.url || '';
  const method = config.method || 'get';
  const params = config.params ? JSON.stringify(config.params) : '';
  return `${method}:${url}?${params}`;
};

const getCached = (key: string) => {
  const raw = sessionStorage.getItem(key);
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw);
    if (Date.now() - parsed.timestamp < TTL) {
      return parsed.data;
    } else {
      sessionStorage.removeItem(key);
    }
  } catch {
    sessionStorage.removeItem(key);
  }

  return null;
};

const setCached = (key: string, data: any) => {
  sessionStorage.setItem(
    key,
    JSON.stringify({
      timestamp: Date.now(),
      data,
    })
  );
};

export const httpService = axios.create({
  baseURL: environment.api,
  headers: { 'Content-Type': 'application/json' },
});

// cache data interceptor
httpService.interceptors.request.use((config) => {
  const key = buildKey(config);

  const cached = getCached(key);
  if (cached) {
    config.adapter = () => {
      return Promise.resolve({
        data: cached,
        status: 200,
        statusText: 'OK',
        headers: {},
        config,
      } as AxiosResponse);
    };
  }

  return config;
});

httpService.interceptors.response.use((response) => {
  const key = buildKey(response.config);
  setCached(key, response.data);
  return response;
});