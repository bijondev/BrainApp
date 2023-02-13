import { StyleSheet, View, Text, Pressable } from "react-native";

function PrimaryButton({ children, onPress }) {

  function presshandeler(){
    console.log(">>>>>>>>>>>>!");
  }

  return (
    
    <View style={styles.bottonOuterContainer} >
      <Pressable style={styles.bottonInnerContainer} 
      onPress={onPress} 
      android_ripple={{color:'#ffffff'}} >
      <Text style={styles.buttonText} > {children} </Text>
      </Pressable>
    </View>
    
  );
}

const styles = StyleSheet.create({
  bottonOuterContainer: {
    borderRadius:28,
    margin:8,
    overflow:'hidden'
  },
  bottonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical:8,
    paddingHorizontal: 16,
    elevation:2,
  },
  bottonContainer: {
    backgroundColor: "#72063c",
    borderRadius:28,
    paddingVertical:8,
    paddingHorizontal: 16,
    elevation:2,
  },
  buttonText: {
    color:'white',
    textAlign:'center'
  }

});

export default PrimaryButton;
