import { ClassData } from "@/types/employeeClass";
import { StyleSheet, Text, View } from "react-native";

type ScheduleItemProps = {
  lesson: ClassData;
}

export default function ScheduleItem({ lesson}: ScheduleItemProps) {
return (
  <View style={[styles.card, styles.shadowProp]}>
    <Text>{lesson.data.id}</Text>
    <Text>{lesson.data.description}</Text>
    <Text>{lesson.data.name}</Text>
    <Text>{lesson.data.subject}</Text>
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
  image: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 10,
  },
});

