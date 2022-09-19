import axios, { AxiosResponse } from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

console.log('process.env.API_BASE_URI', process.env.API_BASE_URI);
console.log('process.env.API_TOKEN', process.env.API_TOKEN);

axios.defaults.baseURL = process.env.API_BASE_URI
axios.defaults.headers.common['Content-type'] = 'application/json';
axios.defaults.headers.common['X-Auth-Token'] = process.env.API_TOKEN || '';

interface FetchApi {
  path: string;
  method: 'get' | 'post' | 'put' | 'delete';
}

export default async ({
  path,
  method,
}: FetchApi): Promise<AxiosResponse> => {
  return await axios[method](path);
}