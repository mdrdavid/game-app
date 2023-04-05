import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function InstructionTitle({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstructionTitle;

const styles = StyleSheet.create({
  instructionText: {
    // color: Colors.accent500,
    fontFamily: "Open-sans",
    color: "white",
    fontSize: 24,
  },
});
