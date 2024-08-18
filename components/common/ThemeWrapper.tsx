import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

type PropsWithChildren<P> = P & { children?: ReactNode };

type ThemeWrapperProps = {
  centerItem?: boolean;
};

export default function ThemeWrapper({
  children,
  centerItem,
}: PropsWithChildren<ThemeWrapperProps>) {
  return (
    <View style={[styles.wrapper, centerItem ? styles.centerItem : null]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fee0b0",
  },
  centerItem: {
    alignItems: "center",
    justifyContent: "center",
  },
});
