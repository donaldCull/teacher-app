import { api } from "@/api/client";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import ThemeWrapper from "@/components/common/ThemeWrapper";
import ScheduleList from "@/components/employeeSchedule/ScheduleList";
import { useQuery } from "@/context/QueryProvider";
import {
  ClassData,
  EmployeeClass,
  EmployeeClasses,
} from "@/types/employeeClass";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function EmployeeSchedule() {
  const { classes, employee } = useQuery();
  const employeeClassList: Array<ClassData> = [];
  const [employeeLessons, setEmployeeLessons] = useState<Array<ClassData>>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    getAllClassData();
  }, []);

  const getAllClassData = async () => {
    setLoading(true);
    for (const classId of classes) {
      const response = await api.get<ClassData>(
        `classes/${classId}?include=lessons,students`
      );
      if (response) {
        employeeClassList.push(response);
      }
    }
    setEmployeeLessons(employeeClassList);
    setLoading(false);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <ThemeWrapper>
      <ScheduleList schedule={employeeLessons} />
    </ThemeWrapper>
  );
}
