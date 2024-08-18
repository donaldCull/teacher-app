import { StyleSheet, Text, View } from "react-native";

export default function EmptyListItem() {
  return (
    <View style={[styles.wrapper, styles.shadowProp]}>
      <Text style={{ fontSize: 18 }}>
        Sorry we don't have any data at this point.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fafafa",
    padding: 20,
    margin: 10,
    borderRadius: 6,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
