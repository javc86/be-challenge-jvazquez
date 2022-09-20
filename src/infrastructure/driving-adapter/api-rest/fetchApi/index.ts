import axios, { AxiosResponse } from 'axios';
import * as dotenv from 'dotenv';
import rateLimit from 'axios-rate-limit';

dotenv.config();

axios.defaults.baseURL = process.env.API_BASE_URI
axios.defaults.headers.common['Content-type'] = 'application/json';
axios.defaults.headers.common['X-Auth-Token'] = process.env.API_TOKEN || '';

const http = rateLimit(axios.create(), { maxRequests: 2, perMilliseconds: 60000, maxRPS: 2 })

interface FetchApi {
  path: string;
  method: 'get' | 'post' | 'put' | 'delete';
}

export default async ({
  path,
  method,
}: FetchApi): Promise<AxiosResponse> => {
  return await http[method](path);
}