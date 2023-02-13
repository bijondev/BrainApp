import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import StartGame from "./components/screens/StartGame";

export default function App() {
  return <StartGame />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
