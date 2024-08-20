import { ClassLessons } from "@/types/employeeClass";
import { FlatList, StyleSheet, View } from "react-native";
import EmptyListItem from "../common/EmptyListItem";
import ScheduleItem from "./ScheduleItem";
import HeaderListDateSchedule from "./HeaderListDateSchedule";
import { useEffect, useState } from "react";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

type ScheduleListProps = {
  schedule: ClassLessons[];
};

export default function ScheduleList({ schedule }: ScheduleListProps) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentDate, setDate] = useState(new Date("2024-07-08"));
  const [filteredSchedule, setFilteredSchedule] = useState<ClassLessons[]>();

  const onChange = (_: DateTimePickerEvent, selectedDate?: Date) => {
    const date = selectedDate;
    if (date) {
      setDate(date);
    }
    setShowCalendar(false);
  };

  const isBetweenRange = (lesson: ClassLessons) => {
    const upperRange = new Date(currentDate);
    upperRange.setUTCHours(12);
    return lesson.start_at.getTime() >= currentDate.getTime() && lesson.start_at.getTime() <= upperRange.getTime();
  }

  useEffect(() => {
    setFilteredSchedule(schedule.filter(isBetweenRange))
  }, [currentDate])

  return (
    <>
      {showCalendar && (
        <View style={[styles.calendarView, styles.shadowProp]}>
          <DateTimePicker
            testID="dateTimePicker"
            value={currentDate}
            mode={"date"}
            onChange={onChange}
            display="inline"
          />
        </View>
      )}

      <FlatList
        data={filteredSchedule}
        ListEmptyComponent={<EmptyListItem />}
        ListHeaderComponent={
          <HeaderListDateSchedule
            showCalendar={showCalendar}
            setShowCalendar={setShowCalendar}
            currentDate={currentDate}
          />
        }
        renderItem={({ item }) => <ScheduleItem lesson={item} />}
        keyExtractor={(lesson) => lesson.lessonId}
      />
    </>
  );
}

const styles = StyleSheet.create({
  calendarView: {
    zIndex: 1,
    position: "absolute",
    top: 50,
    left: 50,
    backgroundColor: "#fafafa",
    padding: 5
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
