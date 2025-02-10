import axios, { AxiosInstance, CanceledError } from "axios";

class ApiClient {
  private client: AxiosInstance;

  constructor(baseURL: string) {
    this.client = axios.create({ baseURL });
  }

  getClient() {
    return this.client;
  }
}

export { CanceledError, ApiClient };
