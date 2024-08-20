import { Student, Students } from "@/types/employeeClass";
import { FlatList } from "react-native";
import EmptyListItem from "../common/EmptyListItem";
import StudentCard from "./StudentCard";

type StudentListProps = {
  students: Student[];
};
export default function StudentList({ students }: StudentListProps) {
  return (
    <FlatList
      data={students}
      keyExtractor={(student) => student.id}
      ListEmptyComponent={<EmptyListItem />}
      renderItem={({ item }) => <StudentCard student={item} />}
    />
  );
}
