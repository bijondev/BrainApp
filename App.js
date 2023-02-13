import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import StartGame from "./components/screens/StartGame";

export default function App() {
  return (
    <LinearGradient colors={['#7c96ce', '#684045', '#531209']} style={styles.rootStyle}>
      <ImageBackground style={styles.rootStyle} imageStyle={styles.backgroundImage} source={require('./assets/images/bg.jpg')} resizeMethod="auto" >
      <StartGame />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootStyle: {
    flex: 1,
    justifyContent: "flex-start"
  },
  backgroundImage:{
    opacity:0.40
  }
});
