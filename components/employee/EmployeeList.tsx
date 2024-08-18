import { useQuery } from "@/context/QueryProvider";
import { Employee, Employees } from "@/types/employee";
import { FlatList } from "react-native";
import EmployeeCard from "./EmployeeCard";
import EmptyListItem from "../common/EmptyListItem";
import LoadingSpinner from "../common/LoadingSpinner";

export default function EmployeeList() {
  const { useData } = useQuery();
  const { data, isLoading, error } = useData<Employees>(
    "employees?include=employment_details,classes&has_class=true"
  );

  if (isLoading) {
    return <LoadingSpinner />
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
