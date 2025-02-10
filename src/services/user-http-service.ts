import { ApiClient } from "./api-client";
import { createHttpService } from "./http-service";

const baseURL = "https://jsonplaceholder.typicode.com";
const endpoint = "/users";

export default createHttpService(new ApiClient(baseURL), endpoint);
