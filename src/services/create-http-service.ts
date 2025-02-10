import { ApiClient } from "./api-client";
import { createHttpService } from "./http-service";

const baseURL = "";
const endpoint = "";

export default createHttpService(new ApiClient(baseURL), endpoint);
