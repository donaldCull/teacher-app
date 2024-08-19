import { api } from "@/api/client";
import { ClassData, Lessons } from "@/types/employeeClass";
import { useCallback, useEffect, useState } from "react";

const dummyLesson: Lessons[] = [{
  data: [{
    id: "l1",
    start_at: {
      date: "",
      timezone_type: 0,
      timezone: ""
    },
    end_at: {
      date: "",
      timezone_type: 0,
      timezone: ""
    }
  }]
}]

export const useFetchClasses = (classes: string[]) => {
  const [data, setData] = useState<ClassData[]>([]);
  const [error, setError] = useState<any>();
  const [isLoading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setError(null);
    try {
      setLoading(true);
      const employeeClassList: ClassData[] = [];
        setLoading(true);
        for (const classId of classes) {
          const response = await api.get<ClassData>(
            `classes/${classId}?include=lessons,students`,
          );
          if (response) {
            employeeClassList.push(response);
          }
        }
        setData(employeeClassList);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [classes])

  // useEffect(() => {
  //   setLoading(true);
  //   const getAllClassData = async () => {
  //     try {
  //       const employeeClassList: ClassData[] = [];
  //       setLoading(true);
  //       for (const classId of classes) {
  //         const response = await api.get<ClassData>(
  //           `classes/${classId}?include=lessons,students`,
  //         );
  //         if (response) {
  //           employeeClassList.push(response);
  //         }
  //       }
  //       setData(employeeClassList);
  //       setLoading(false);
  //     } catch (error) {
  //       setError(error);
  //       setLoading(false);
  //     }
  //   };
  //   getAllClassData();
  
  // }, [classes]);

  useEffect(() => {
    fetchData();
  }, [fetchData])
  return { data, error, isLoading, fetchData };
};
