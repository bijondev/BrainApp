import { StyleSheet, TextInput, View } from "react-native";

import PrimaryButton from "../../components/ui/PrimaryButton";

function StartGame() {
  return (
    <View style={styles.inputContainer} >
      <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" autoCapitalize="none" autoCorrect={false} />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    backgroundColor: "#4287f5",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    marginHorizontal:24,
    borderRadius:5,
    elevation:50,
    shadowColor: '#4287f5',
    shadowOffset: { width: 0, height:3},
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput:{
    height:50,
    fontSize:25,
    borderBottomColor:'#f5e642',
    borderWidth:2,
    marginVertical:8,
    fontWeight:'bold',
    borderTopWidth:0,
    borderLeftWidth:0,
    borderRightWidth:0,
    color:'#f5e642',
    width:50,
    textAlign:"center",
  }
});
export default StartGame;
