import React from "react";
import { StyleSheet, View } from "react-native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

type WorkCalendarProps = {
  setDate: React.Dispatch<React.SetStateAction<Date>>;
  setShowCalendar: React.Dispatch<React.SetStateAction<boolean>>;
  currentDate: Date;
}
export default function WorkCalendar({ setDate, setShowCalendar, currentDate }: WorkCalendarProps) {
  const onChange = (_: DateTimePickerEvent, selectedDate?: Date) => {
    const date = selectedDate;
    if (date) {
      setDate(date);
    }
    setShowCalendar(false);
  };

return (
  <View style={[styles.calendarView, styles.shadowProp]}>
  <DateTimePicker
    testID="dateTimePicker"
    value={currentDate}
    mode={"date"}
    onChange={onChange}
    display="inline"
  />
</View>

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

