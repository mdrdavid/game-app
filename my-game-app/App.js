import { useState } from "react";
import { StyleSheet, View, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = <GameScreen />;
  }
  return (
    // <LinearGradient color={['#4e0329','#ddb52f']} style={styles.rootScreen}>
    <View style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/sprint1.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.safeAreaView}>
        {screen}
        </SafeAreaView>
      </ImageBackground>
    </View>
    //  </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: "#ddb52f",
  },
  backgroundImage: {
    opacity: 0.15,
  },
  safeAreaView: {
    flex: 1,
    padding: 16, // Adjust the padding as per your requirement
  },
});
