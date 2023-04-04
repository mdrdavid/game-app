import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function InstructionTitle({ children }) {
  return <Text style={styles.instructionText}>{children}</Text>;
}

export default InstructionTitle;

const styles = StyleSheet.create({
  instructionText: {
    // color: Colors.accent500,
    color: "white",
    fontSize: 24,
  },
});
