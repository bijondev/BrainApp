import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGame from "./components/screens/StartGame";
import GameScreen from "./components/screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  function pickedNumberhandeler(pickNnmber) {
    setUserNumber(pickNnmber);
  }
  let screen = <StartGame onpickedNumber={pickedNumberhandeler} />;
  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient
      colors={["#7c96ce", "#684045", "#531209"]}
      style={styles.rootStyle}
    >
      <ImageBackground
        style={styles.rootStyle}
        imageStyle={styles.backgroundImage}
        source={require("./assets/images/bg.jpg")}
        resizeMethod="auto"
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    padding: 30,
  },
  rootStyle: {
    flex: 1,
    justifyContent: "flex-start",
  },
  backgroundImage: {
    opacity: 0.4,
  },
});
