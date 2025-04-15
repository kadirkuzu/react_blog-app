import axios from 'axios';
import { environment } from '../environment';

const axiosInstance = axios.create({
  baseURL: environment.api,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;