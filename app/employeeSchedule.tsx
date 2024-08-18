import { api } from "@/api/client";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import ThemeWrapper from "@/components/common/ThemeWrapper";
import ScheduleList from "@/components/employeeSchedule/ScheduleList";
import { useQuery } from "@/context/QueryProvider";
import { ClassData } from "@/types/employeeClass";
import { useEffect, useState } from "react";

export default function EmployeeSchedule() {
  const { classes } = useQuery();
  const [employeeLessons, setEmployeeLessons] = useState<ClassData[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const getAllClassData = async () => {
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
      setEmployeeLessons(employeeClassList);
      setLoading(false);
    };
    getAllClassData();
  }, [classes]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <ThemeWrapper>
      <ScheduleList schedule={employeeLessons} />
    </ThemeWrapper>
  );
}
