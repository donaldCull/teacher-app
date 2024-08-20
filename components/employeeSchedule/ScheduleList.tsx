import { ClassData, ClassLessons } from "@/types/employeeClass";
import { FlatList, View } from "react-native";
import EmptyListItem from "../common/EmptyListItem";
import ScheduleItem from "./ScheduleItem";
import HeaderListDateSchedule from "./HeaderListDateSchedule";

type ScheduleListProps = {
  schedule: ClassLessons[];
};

export default function ScheduleList({ schedule }: ScheduleListProps) {
  return (
    <FlatList
      data={schedule}
      ListEmptyComponent={<EmptyListItem />}
      ListHeaderComponent={<HeaderListDateSchedule />}
      renderItem={({ item }) => <ScheduleItem lesson={item} />}
      keyExtractor={(lesson) => lesson.lessonId}
    />
  );
}
