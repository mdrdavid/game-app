import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import Title from "../components/UI/Title";
import PrimaryButton from "../components/UI/PrimaryButton";
import Colors from "../constants/colors";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/success.png")} />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highLight}>{roundsNumber}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highLight}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: deviceWidth < 380 ? 150 : 300, // image width set to 150 on devices smaller than 380px and to 300px on devices larger
    height: deviceWidth < 380 ? 150 : 300, // image height set to 150 on devices smaller than 380px and to 300px on devices larger,
    borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "Open-sans",
    fontSize: 24,
    textAlign: "center",
    marginVertical: 24,
  },
  highLight: {
    fontFamily: "Open-sans-bold",
    color: Colors.primary500,
  },
});
