import { StyleSheet, Text, View } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';

export default function HeaderListDateSchedule() {
return (
  <View style={styles.wrapper}>
    <Entypo name="chevron-left" size={24} color="#fafafa" />
    <Text style={styles.dateText}>dd/mm/yyyy</Text>
    <Entypo name="chevron-right" size={24} color="#fafafa" />
  </View>
);
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#4b90fe",
    padding: 20
  },
  dateText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fafafa"
  }
})
