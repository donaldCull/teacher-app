import { ClassData } from "@/types/employeeClass";
import { FlatList } from "react-native";
import EmptyListItem from "../common/EmptyListItem";
import ScheduleItem from "./ScheduleItem";

type ScheduleListProps = {
  schedule: ClassData[];
};

export default function ScheduleList({ schedule }: ScheduleListProps) {
  return (
    <FlatList
      data={schedule}
      ListEmptyComponent={<EmptyListItem />}
      renderItem={({ item }) => <ScheduleItem lesson={item} />}
      keyExtractor={(lesson) => lesson.data.id}
    />
  );
}
