import { useState } from "react";
import { StyleSheet, TextInput, View, Text, Alert } from "react-native";
import Title from "../ui/Title";
import Colors from "../ui/Colors";
import NumberContainer from "./NumberContainer";
import PrimaryButton from "../ui/PrimaryButton";

let min = 1;
let max = 100;

function generateRandomNumber(min, max, exclude) {
  const rnNum = Math.floor(Math.random() * (max - min)) + min;
  console.log(rnNum);
  if (rnNum == exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return rnNum;
  }
}

function GameScreen(userNumber) {
  const initialGuess = generateRandomNumber(min, max, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  function nextHandeler(direction) {
    console.log("nextHandeler>>>>>>>>>>>>>>>>>>>>");
    console.log(currentGuess , userNumber.userNumber);
    if (
      (direction === "lower" && currentGuess < userNumber.userNumber) ||
      (direction === "greater" && currentGuess > userNumber.userNumber)
    ) {
      Alert.alert("Sorry!", "LIE!!!"),
        [
          {
            text: "Sorry!",
            style: "cancel",
          },
        ];
      return;
    }
    if (direction == "lower") {
      max = currentGuess;
    } else {
      min = currentGuess + 1;
    }

    console.log(min, max, currentGuess);

    const newNumber = generateRandomNumber(min, max, currentGuess);
    setCurrentGuess(newNumber);
  }
  return (
    <View style={styles.screen}>
      <Title> Opponents Guess </Title>
      <NumberContainer> {currentGuess} </NumberContainer>
      <View>
        <Text> Higher or lower ? </Text>
      </View>
      <View>
        <PrimaryButton onPress={nextHandeler.bind(this, "lower")}>
          -
        </PrimaryButton>
        <PrimaryButton onPress={nextHandeler.bind(this, "greater")}>
          +
        </PrimaryButton>
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
  },
});
