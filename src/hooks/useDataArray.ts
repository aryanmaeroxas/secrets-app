import { useEffect, useState } from "react";
import { CanceledError } from "../services/api-client";
import { ApiClient } from "../services/api-client";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(baseUrl: string, endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    new ApiClient(baseUrl)
      .getClient()
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);

  return { data, error, isLoading, setData, setError };
};

export default useData;
