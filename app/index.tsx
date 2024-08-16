import EmployeeList from "@/components/employee/EmployeeList";
import { useQuery } from "@/context/QueryProvider";
import { Employees } from "@/types/employee";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function index() {
  return (
    <View style={styles.wrapper}>
      <EmployeeList />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fee0b0"
  },
  card: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fafafa",
  },
  cardText: {
    fontSize: 18
  }
});
