import { Pressable, StyleSheet, Text, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import CalendarToggleButton from "./CalendarToggleButton";

type HeaderListDateScheduleProps = {
  currentDate: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
  showCalendar: boolean;
  setShowCalendar: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function HeaderListDateSchedule({
  currentDate,
  setDate,
  showCalendar,
  setShowCalendar,
}: HeaderListDateScheduleProps) {
  const incrementDate = () => {
    const nextDay = new Date(currentDate);
    nextDay.setDate(nextDay.getDate() + 1);
    setDate(nextDay);
  };

  const decrementDate = () => {
    const prevDay = new Date(currentDate);
    prevDay.setDate(prevDay.getDate() - 1);
    setDate(prevDay);
  };

  return (
    <View style={styles.wrapper}>
      <CalendarToggleButton buttonType="decrement" onPress={decrementDate}/>
      <Pressable
        testID="showCalendarButton"
        style={({ pressed }) => [{ backgroundColor: pressed ? "transparent" : "#0a68fe"},styles.calendarButton]}
        onPress={() => setShowCalendar((prevState) => !prevState)}
      >
        <Text style={styles.dateText}>{currentDate.toDateString()}</Text>
        <Entypo
          name={`chevron-${showCalendar ? "down" : "up"}`}
          size={24}
          color="#fafafa"
        />
      </Pressable>
      <CalendarToggleButton buttonType="increment" onPress={incrementDate}/>
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
    borderRadius: 10,
    padding: 10,
  },
  calendarView: {
    position: "absolute",
    backgroundColor: "#fafafa",
  },
  pressedDateButton: {
    padding: 8,
    borderRadius: 50
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
