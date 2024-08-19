import { api } from "@/api/client";
import { useCallback, useEffect, useState } from "react";

export const useData = <TResponse>(endpoint: string) => {
  const [data, setData] = useState<TResponse | undefined>();
  const [error, setError] = useState<any>();
  const [isLoading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setError(null);
    try {
      setLoading(true);
      const response = await api.get<TResponse>(endpoint);
      setData(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, isLoading, fetchData };
};
