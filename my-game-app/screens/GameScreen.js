import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Title from "../components/UI/Title";
import NumberContainer from "../components/game/NumberContainer";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
export default function GameScreen({ userNumber }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {/* GUESS Number*/}
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower</Text>
        {/* + - */}
      </View>
      <View>
        <Text>Log Rounds</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  // title: {
  //   fontSize: 24,
  //   fontWeight: "bold",
  //   color: "#ddb52f",
  //   textAlign: "center",
  //   borderWidth: 2,
  //   borderColor: "#ddb52f",
  //   padding: 12,
  // },
});
