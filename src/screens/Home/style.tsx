import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    appcontainer: {
      flex: 1,
      backgroundColor: '#333333',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logocontainer: {
      flexDirection: 'column',
      borderColor: '#ffffff',
      borderWidth: 2, 
      justifyContent: 'center',
      alignSelf: 'center',
      marginBottom: 60,
      paddingTop: 20,
      paddingBottom: 10,
      backgroundColor: '#4d4d4d'
    },
    inputContainer:{
      width:'80%',
      alignItems:'center',
      flexDirection:'column'
    }
  });

  export default styles