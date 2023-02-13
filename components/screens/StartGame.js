import { useState } from "react";
import { StyleSheet, TextInput, View, Alert } from "react-native";

import PrimaryButton from "../../components/ui/PrimaryButton";

function StartGame() {
  const [enterNumber, setEnterNumber] = useState('');

  function numberInputhandeller(enterText){
    setEnterNumber(enterText);
  }
    function resetInputhandeler(){
    setEnterNumber('');
  }

  function confirmInputhandeler(){
    const chosenNumber= parseInt(enterNumber);
    if(isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber > 99){
      console.log(chosenNumber);
      Alert.alert("Invalid Number", "Number should be 1 to 99!", [
      
      {
        text: "Okay",
        style: "destructive",
        onPress: resetInputhandeler
      }
    ]);
console.log(">>>>>>>>>>>>>>>>>>>");
      return;

    }
  }



  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numberInputhandeller}
        value={enterNumber}
      />
      <View style={styles.buttonsContainner}>
        <View style={styles.buttonContainner}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainner}>
          <PrimaryButton onPress={confirmInputhandeler} >Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    backgroundColor: "#ffbb00",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 5,
    elevation: 50,
    shadowColor: "#4287f5",
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    fontSize: 25,
    borderBottomColor: "#ffffff",
    borderWidth: 2,
    marginVertical: 8,
    fontWeight: "bold",
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    color: "#f5e642",
    width: 50,
    textAlign: "center",
  },
  buttonsContainner: {
    flexDirection: "row",
  },
  buttonContainner: {
    flex: 1,
  },
});
export default StartGame;
