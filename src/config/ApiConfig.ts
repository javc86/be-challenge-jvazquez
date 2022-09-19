import 'dotenv';
import { IConfig } from '../models';

class ApiConfig implements IConfig {
  private apiToken: string;
  baseUri: string;
  
  constructor() {
    this.apiToken = process.env.API_TOKEN || '';
    this.baseUri = process.env.API_BASE_URI || '';
  }

  getApiToken(): string {
    return this.apiToken;
  }
}

export default ApiConfig;