import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Title from "../components/UI/Title";
import PrimaryButton from "../components/UI/PrimaryButton";
import Colors from "../constants/colors";

function GameOverScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/success.png")} />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highLight}>X</Text> rounds to
        guess the number <Text style={styles.highLight}>Y</Text>
      </Text>
      <PrimaryButton>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
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
