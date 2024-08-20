import { Pressable, StyleSheet, Text, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import DateTimePicker, {
  DateTimePickerEvent,
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import React, { useState } from "react";

type HeaderListDateScheduleProps = {
  currentDate: Date;
  showCalendar: boolean;
  setShowCalendar: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function HeaderListDateSchedule({
  currentDate,
  showCalendar,
  setShowCalendar,
}: HeaderListDateScheduleProps) {
  return (
    <View style={styles.wrapper}>
      <Entypo name="chevron-left" size={24} color="#fafafa" />
      <Pressable
        style={styles.calendarButton}
        onPress={() => setShowCalendar((prevState) => !prevState)}
      >
        <Text style={styles.dateText}>{currentDate.toDateString()}</Text>
        <Entypo name={`chevron-${showCalendar ? "down": "up"}`} size={24} color="#fafafa" />
      </Pressable>
      <Entypo name="chevron-right" size={24} color="#fafafa" />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#4b90fe",
    padding: 16,
  },
  dateText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fafafa",
  },
  calendarButton: {
    flexDirection: "row",
    backgroundColor: "#0a68fe",
    borderRadius: 10,
    padding: 10
  },
  calendarView: {
    position: "absolute",
    backgroundColor: "#fafafa",
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
