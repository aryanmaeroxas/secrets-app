import { ApiClient } from "./api-client";

interface Entity {
  id: number;
}

class HttpService {
  private apiClient: ApiClient;
  private endpoint: string;

  constructor(apiClient: ApiClient, endpoint: string) {
    this.apiClient = apiClient;
    this.endpoint = endpoint;
  }

  getAll<T>() {
    const controller = new AbortController();
    const request = this.apiClient.getClient().get<T[]>(this.endpoint, {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }

  create<T>(entity: T) {
    return this.apiClient.getClient().post(this.endpoint, entity);
  }

  update<T extends Entity>(entity: T) {
    return this.apiClient
      .getClient()
      .patch(`${this.endpoint}/${entity.id}`, entity);
  }

  delete(id: number) {
    return this.apiClient.getClient().delete(`${this.endpoint}/${id}`);
  }
}

const createHttpService = (apiClient: ApiClient, endpoint: string) =>
  new HttpService(apiClient, endpoint);

export { HttpService, createHttpService };
