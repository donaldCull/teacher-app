import { api, request } from "@/api/client";
import { Employees } from "@/types/employee";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function index() {
  const [employees, setEmployees] = useState<Employees>();
  const [loading, setLoading] = useState(true);

  const getTeachers = async () => {
    try {
      const response = await api.get<Employees>("employees")
      setEmployees(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTeachers();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text>Loading....</Text>
    </View>
  
    )
  }
  
return (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
    <Text>{employees?.data[0].forename}</Text>
  </View>
);
}
