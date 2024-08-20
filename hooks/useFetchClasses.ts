import { api } from "@/api/client";
import { ClassData, ClassLessons, Lessons } from "@/types/employeeClass";
import { useCallback, useEffect, useState } from "react";

export const useFetchClasses = (classes: string[]) => {
  const [data, setData] = useState<ClassLessons[]>([]);
  const [error, setError] = useState<any>();
  const [isLoading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setError(null);
    try {
      setLoading(true);
      const employeeClassList: ClassLessons[] = [];
      setLoading(true);

      for (const classId of classes) {
        const res = await api.get<ClassData>(
          `classes/${classId}?has_students=true&include=employees,lessons,students&has_lessons=true&lessons_start_after=2024-07-07`
        );
        if (res?.data) {
          const { data: lessonData} = res?.data?.lessons;
          for (const lesson of lessonData) {
            employeeClassList.push({
              classId: res.data.id,
              classTitle: res.data.name,
              subject: res.data.subject,
              lessonId: lesson.id,
              room: lesson.room,
              start_at: new Date(lesson.start_at.date),
              end_at: new Date(lesson.end_at.date),
              timezone_type: lesson.start_at.timezone_type,
              timezone: lesson.start_at.timezone,
              students: res.data.students
            });
          }
        }
      }
      setData(employeeClassList.sort((a, b) => a.start_at.getTime() - b.start_at.getTime()));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [classes]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return { data, error, isLoading, fetchData };
};
