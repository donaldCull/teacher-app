import { ClassLessons } from "@/types/employeeClass";
import { FlatList, StyleSheet, View } from "react-native";
import EmptyListItem from "../common/EmptyListItem";
import ScheduleItem from "./ScheduleItem";
import HeaderListDateSchedule from "./HeaderListDateSchedule";
import { useEffect, useState } from "react";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import WorkCalendar from "./WorkCalendar";

type ScheduleListProps = {
  schedule: ClassLessons[];
};

export default function ScheduleList({ schedule }: ScheduleListProps) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentDate, setDate] = useState(new Date("2024-07-08"));
  const [filteredSchedule, setFilteredSchedule] = useState<ClassLessons[]>();

  const isBetweenRange = (lesson: ClassLessons) => {
    const upperRange = new Date(currentDate);
    upperRange.setUTCHours(12);
    return (
      lesson.start_at.getTime() >= currentDate.getTime() &&
      lesson.start_at.getTime() <= upperRange.getTime()
    );
  };

  useEffect(() => {
    setFilteredSchedule(schedule.filter(isBetweenRange));
  }, [currentDate]);

  return (
    <>
      {showCalendar && (
        <WorkCalendar
          currentDate={currentDate}
          setDate={setDate}
          setShowCalendar={setShowCalendar}
        />
      )}
      <FlatList
        data={filteredSchedule}
        ListEmptyComponent={<EmptyListItem />}
        ListHeaderComponent={
          <HeaderListDateSchedule
            showCalendar={showCalendar}
            setShowCalendar={setShowCalendar}
            currentDate={currentDate}
            setDate={setDate}
          />
        }
        renderItem={({ item }) => <ScheduleItem lesson={item} />}
        keyExtractor={(lesson) => lesson.lessonId}
      />
    </>
  );
}
