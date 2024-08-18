import { ActivityIndicator, View } from "react-native";
import ThemeWrapper from "./ThemeWrapper";

export default function LoadingSpinner() {
return (
  <ThemeWrapper centerItem>
    <ActivityIndicator size="large" color={"#4b90fe"}/>
  </ThemeWrapper>
);
}
