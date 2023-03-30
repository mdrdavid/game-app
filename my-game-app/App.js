import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    // <LinearGradient color={['#4e0329','#ddb52f']} style={styles.rootScreen}>
    <View style={styles.rootScreen}>
      <StartGameScreen />
    </View>
    //  </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    // backgroundColor: '#ddb52f',
  },
});
