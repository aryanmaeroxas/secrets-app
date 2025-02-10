import { ApiClient } from "./api-client";
import { createHttpService } from "./http-service";

export interface User {
  id: number;
  name: string;
}

const baseURL = "https://jsonplaceholder.typicode.com";
const apiClient = new ApiClient(baseURL);

export default createHttpService(apiClient, "/users");
