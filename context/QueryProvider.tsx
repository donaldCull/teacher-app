import { api } from "@/api/client";
import { useData } from "@/hooks/useData";
import { useContext, createContext, type PropsWithChildren } from "react";

const QueryContext = createContext<{
  useData: <TResponse>(endpoint: string) => {
    data: TResponse | undefined;
    error: any;
    isLoading: boolean;
  };
}>({
  useData: useData,
});

export function useQuery() {
  const value = useContext(QueryContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useQuery must be wrapped in a <QueryProvider />");
    }
  }

  return value;
}

export function QueryProvider({ children }: PropsWithChildren) {
  return (
    <QueryContext.Provider
      value={{
        useData,
      }}
    >
      {children}
    </QueryContext.Provider>
  );
}
