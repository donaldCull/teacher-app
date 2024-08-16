import { useQuery } from "@/context/QueryProvider";
import { Employees } from "@/types/employee";
import { Text, View } from "react-native";

export default function index() {
  const { useData } = useQuery();
  const { data, isLoading, error } = useData<Employees>("employees");

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Loading....</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Sorry an error occured!</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{data?.data[0].forename}</Text>
    </View>
  );
}
