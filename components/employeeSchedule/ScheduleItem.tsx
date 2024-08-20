import { ClassData, ClassLessons } from "@/types/employeeClass";
import { StyleSheet, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { dateTime } from "@/utils/formatter";

type ScheduleItemProps = {
  lesson: ClassLessons;
};

export default function ScheduleItem({ lesson }: ScheduleItemProps) {
  const dt = dateTime();
  return (
    <View style={[styles.card, styles.shadowProp]}>
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>Class</Text>
      <View style={styles.cardSection}>
        <Text>ID: {lesson.classId}</Text>
        <Text>Name: {lesson.classTitle}</Text>
        <Text>Subject: {lesson.subject}</Text>
      </View>
      <View style={styles.cardSection}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <FontAwesome name="user" size={18} color="#4b90fe" />
          <Text style={{ fontWeight: 600, fontSize: 18, marginLeft: 4 }}>
            {lesson.students.data.length}
          </Text>
        </View>
      </View>
      <View style={styles.cardSection}>
      </View>
      <View style={styles.cardSection}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <FontAwesome name="calendar" size={18} color="#4b90fe" />
          <Text style={{ fontWeight: 600, fontSize: 18, marginLeft: 4 }}>
            {dt(lesson.start_at)} - {dt(lesson.end_at)}
          </Text>
        </View>
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
    flexDirection: "column",
  },
  cardSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
