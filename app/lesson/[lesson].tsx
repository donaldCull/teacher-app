import ErrorItem from "@/components/common/ErrorItem";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import ThemeWrapper from "@/components/common/ThemeWrapper";
import StudentList from "@/components/students/StudentList";
import { useQuery } from "@/context/QueryProvider";
import { Lesson } from "@/types/lesson";
import { useLocalSearchParams } from "expo-router";

export default function lesson() {
  const { lesson } = useLocalSearchParams<{
    lesson: string;
  }>();
  const { useData } = useQuery();
  const { data, isLoading, error, fetchData } = useData<Lesson>(
    `lessons/${lesson}?include=class.students`
  );

  const studentList = data?.data.class.data.students.data ?? [];

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    <ErrorItem refetch={fetchData} />;
  }

  return (
    <ThemeWrapper>
      <StudentList students={studentList} />
    </ThemeWrapper>
  );
}
