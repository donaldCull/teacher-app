import ThemeWrapper from "@/components/common/ThemeWrapper";
import EmployeeList from "@/components/employee/EmployeeList";
import { useQuery } from "@/context/QueryProvider";
import { Employees } from "@/types/employee";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function index() {
  return (
    <ThemeWrapper>
      <EmployeeList />
    </ThemeWrapper>
  );
}
