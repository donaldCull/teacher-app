import { useQuery } from "@/context/QueryProvider";
import { Employees } from "@/types/employee";
import { FlatList } from "react-native";
import EmployeeCard from "./EmployeeCard";
import EmptyListItem from "../common/EmptyListItem";
import LoadingSpinner from "../common/LoadingSpinner";
import ErrorItem from "../common/ErrorItem";

export default function EmployeeList() {
  const { useData } = useQuery();
  const { data, isLoading, error, fetchData } = useData<Employees>(
    "employees?include=classes,employment_details&employment_start_before=2024-07-07&has_class=true&has_lessons=true",
  );

  if (error) {
    return <ErrorItem refetch={fetchData}/>
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <FlatList
      data={data?.data}
      ListEmptyComponent={<EmptyListItem />}
      renderItem={({ item }) => <EmployeeCard employee={item} />}
      keyExtractor={(employee) => employee.id}
    />
  );
}
