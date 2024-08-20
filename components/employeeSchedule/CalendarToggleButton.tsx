import { Entypo } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

type CalendarButtonsProps = {
  buttonType: "increment" | "decrement";
  onPress: () => void;
};

export default function CalendarToggleButton({
  buttonType,
  onPress,
}: CalendarButtonsProps) {
  return (
    <Pressable
      testID={`${buttonType}Button`}
      style={({ pressed }) => [
        { backgroundColor: pressed ? "#0a68fe" : "transparent" },
        styles.pressedDateButton,
      ]}
      onPress={onPress}
    >
      <Entypo
        name={`chevron-${buttonType === "decrement" ? "left" : "right"}`}
        size={24}
        color="#fafafa"
      />
    </Pressable>
  );
}
const styles = StyleSheet.create({
  pressedDateButton: {
    padding: 8,
    borderRadius: 50,
  },
});
