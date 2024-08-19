import { useData } from "@/hooks/useData";
import {
  useContext,
  createContext,
  type PropsWithChildren,
  useState,
} from "react";

const QueryContext = createContext<{
  useData: <TResponse>(endpoint: string) => {
    data: TResponse | undefined;
    error: any;
    isLoading: boolean;
    fetchData: () => Promise<void>;
  };
  employee: string;
  setEmployee: (id: string) => void;
  classes: string[];
  setClasses: (classes: string[]) => void;
}>({
  useData: useData,
  employee: "",
  setEmployee: () => null,
  classes: [],
  setClasses: () => null,
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
  const [employee, setEmployee] = useState<string>("");
  const [classes, setClasses] = useState<string[]>([]);

  return (
    <QueryContext.Provider
      value={{
        useData,
        employee,
        setEmployee: (id) => {
          setEmployee(id);
        },
        classes,
        setClasses: (classes) => {
          setClasses(classes);
        },
      }}
    >
      {children}
    </QueryContext.Provider>
  );
}
