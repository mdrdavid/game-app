import { Text, StyleSheet, Platform } from "react-native";
import Colors from "../../constants/colors";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "Open-sans-bold",
    fontSize: 24,
    // fontWeight: "bold",
    color: "white",
    textAlign: "center",
    // borderWidth: Platform.OS === "android " ? 2 : 0, // set a border width 2px on android and 0px on IOS
    // borderWidth: Platform.select({ ios: 0, android: 2 }), // set a border width 2px on android and 0px on IOS. The alternative way of using platform api
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
