import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import StartGame from "./components/screens/StartGame";

export default function App() {
  return (
    <View style={styles.rootStyle}>
      <StartGame />
    </View>
  );
}

const styles = StyleSheet.create({
  rootStyle: {
    flex: 1,
    backgroundColor: '#6ea6fa',
    alignItems: "center",
    justifyContent: "center"
  }
});
