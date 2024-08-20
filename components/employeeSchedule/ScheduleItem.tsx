import { ClassData, ClassLessons } from "@/types/employeeClass";
import { Pressable, StyleSheet, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { dateTime } from "@/utils/formatter";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { Href, Link } from "expo-router";

type ScheduleItemProps = {
  lesson: ClassLessons;
};

export default function ScheduleItem({ lesson }: ScheduleItemProps) {
  const dt = dateTime();
  return (
    <Link
      style={[styles.card, styles.shadowProp]}
      href={`lesson/${lesson.lessonId}` as Href}
      asChild
    >
      <Pressable>
        <View style={{ flexDirection: "column" }}>
          <View style={styles.cardSection}>
            <Text style={styles.cardTitle}>Class: {lesson.classTitle}</Text>
            <View style={[styles.cardDetail, { marginLeft: 24 }]}>
              <FontAwesome name="calendar" size={18} color="#4b90fe" />
              <Text style={styles.detailText}>
                {dt(lesson.start_at)} - {dt(lesson.end_at)}
              </Text>
            </View>
          </View>
          <View style={styles.cardFooter}>
            <View style={styles.cardDetail}>
              <FontAwesome name="user" size={18} color="#4b90fe" />
              <Text style={styles.detailText}>
                {lesson.students.data.length}
              </Text>
            </View>
            <View style={[styles.cardDetail, { marginLeft: 12 }]}>
              <FontAwesome name="map-marker" size={18} color="#4b90fe" />
              <Text style={styles.detailText}>{lesson.room}</Text>
            </View>
          </View>
        </View>
        <EvilIcons name="chevron-right" size={50} color="#4b90fe" />
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fafafa",
    padding: 12,
    margin: 8,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  cardSection: {
    padding: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardFooter: {
    flexDirection: "row",
    padding: 4,
  },
  cardDetail: {
    flexDirection: "row",
    alignItems: "center",
  },
  detailText: {
    fontSize: 18,
    marginLeft: 4,
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
