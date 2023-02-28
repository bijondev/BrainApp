import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Alert
} from "react-native";
import Title from '../ui/Title';
import Colors from '../ui/Colors';
import NumberContainer from "./NumberContainer";


function generateRandomNumber(min, max, exclude){
    const rnNum = Math.floor(Math.random()+(max-min))+min;
    if(rnNum == exclude){
        return generateRandomNumber(min, max, exclude);
    }
    else{
        return rnNum;
    }
}

function GameScreen({userNumber}) {
  const initialGuess = generateRandomNumber(1,100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen} >
      <Title>Opponents Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.accent500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.accent500,
  }
});
