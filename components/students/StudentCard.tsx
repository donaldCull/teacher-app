import { Student } from "@/types/employeeClass";
import { EvilIcons } from "@expo/vector-icons";
import { StyleSheet, View, Text } from "react-native";

type StudentCardProps = {
  student: Student;
};

export default function StudentCard({ student }: StudentCardProps) {
  return (
    <View style={[styles.card, styles.shadowProp]}>
      <EvilIcons name="user" size={70} color="#4b90fe" />
      <View style={{ flexDirection: "column", flex: 1 }}>
        <Text style={styles.cardText}>ID: {student.id}</Text>
        <Text style={styles.cardText}>
          {student.forename} {student.surname}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fafafa",
    padding: 12,
    margin: 8,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
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
});
