import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import EvilIcons from '@expo/vector-icons/EvilIcons';

type ErrorItemProps = {
  refetch: () => Promise<void>;
};

export default function ErrorItem({ refetch }: ErrorItemProps) {
  return (
    <View style={[styles.wrapper, styles.shadowProp]}>
      <Text style={{ fontSize: 20 }}>
        Sorry an error occurred. Please try again.
      </Text>
      <Pressable style={styles.button} onPress={refetch}>
        <EvilIcons name="refresh" size={36} color="#fafafa" />
        <Text style={styles.buttonText}>Try again</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fafafa",
    padding: 20,
    margin: 10,
    borderRadius: 6,
    alignItems: "center",
    flexDirection: "column"
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#4b90fe",
    alignItems: 'center',
    padding: 12,
    margin: 8,
    borderRadius: 8
  },
  buttonText: {
    fontSize: 22,
    fontWeight: 600,
    color: "#fafafa"
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
