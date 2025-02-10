import useData from "./useDataArray";

export interface User {
  id: number;
  name: string;
}

const useUsers = () =>
  useData<User>("https://jsonplaceholder.typicode.com", "/users");

export default useUsers;
