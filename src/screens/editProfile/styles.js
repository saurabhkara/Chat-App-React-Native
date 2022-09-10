import { StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  addProfile: {
    flex: 0.9,
    marginLeft: 10,
    fontSize: 14,
    color: Colors.GRAY,
    fontWeight: "600",
  },
});
