import { useQuery } from "@/context/QueryProvider";
import { Employee, Employees } from "@/types/employee";
import { FlatList } from "react-native";
import EmployeeCard from "./EmployeeCard";
import EmptyEmployeeList from "./EmptyEmployeeList";

export default function EmployeeList() {
  const { useData } = useQuery();
  const { data, isLoading, error } = useData<Employees>(
    "employees?include=employment_details"
  );

  return (
    <FlatList
      data={data?.data}
      ListEmptyComponent={<EmptyEmployeeList />}
      renderItem={({ item }) => <EmployeeCard employee={item} />}
      keyExtractor={(employee) => employee.id}
    />
  );
}
