import { api } from "@/api/client";
import ErrorItem from "@/components/common/ErrorItem";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import ThemeWrapper from "@/components/common/ThemeWrapper";
import ScheduleList from "@/components/employeeSchedule/ScheduleList";
import { useQuery } from "@/context/QueryProvider";
import { useFetchClasses } from "@/hooks/useFetchClasses";

export default function EmployeeSchedule() {
  const { classes } = useQuery();

  const { data, isLoading, error, fetchData } = useFetchClasses(classes)

  if (error) {
    return <ErrorItem refetch={fetchData}/>
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <ThemeWrapper>
      <ScheduleList schedule={data} />
    </ThemeWrapper>
  );
}
