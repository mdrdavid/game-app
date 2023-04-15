import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

import Colors from "../../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;
const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 380 ? 12 : 24, // set 24 px on larger screens and 12 on smaller screens
    borderRadius: 8,
    margin: deviceWidth < 380 ? 12 : 24, // set 24 px on larger screens and 12px margin  on smaller screens,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    // color: Colors.accent500,
    color: "white",
    fontFamily: "Open-sans-bold",
    // fontWeight: "bold",
    fontSize: deviceWidth < 380 ? 28 : 36, //set 28px fontSize on smaller devices and 36px on relatively large devices
  },
});
