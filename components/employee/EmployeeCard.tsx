import { Employee } from "@/types/employee";
import { StyleSheet, View, Text, Image } from "react-native";
import EvilIcons from '@expo/vector-icons/EvilIcons';

type EmployeeCardProps = { employee: Employee };

export default function EmployeeCard({ employee }: EmployeeCardProps) {
  return (
    <View style={[styles.card, styles.shadowProp]}>
      <EvilIcons name="user" size={70} color="#4b90fe" />
      <View style={{ flexDirection: "column", flex: 1}}>
        <Text style={styles.cardText}>ID: {employee.id}</Text>
        <Text style={styles.cardText}>
          {employee.title} {employee.forename} {employee.surname}
        </Text>
        <Text style={styles.cardText}>
          Status:{" "}
          {employee.employment_details.data.current ? "Current" : "Not current"}
        </Text>
      </View>
      <EvilIcons name="chevron-right" size={70} color="#4b90fe" />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
  card: {
    backgroundColor: "#fafafa",
    padding: 12,
    margin: 8,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center"
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  cardText: {
    fontSize: 18,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 10
  },
});
