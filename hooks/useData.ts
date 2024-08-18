import { api } from "@/api/client";
import { useEffect, useState } from "react";

export const useData = <TResponse>(endpoint: string) => {
  const [data, setData] = useState<TResponse | undefined>();
  const [error, setError] = useState<any>();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api
      .get<TResponse>(endpoint)
      .then((response: TResponse) => {
        setData(response);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, [endpoint]);

  return { data, error, isLoading };
};
