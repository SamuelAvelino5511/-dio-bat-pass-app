import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { styles } from './BatRadioButtonStyle';


  const BatRadioButton = ({ passwordLength , setPasswordLength } : {passwordLength : number, setPasswordLength : (length:number)=> void}) => {
  return (
    <View style={ styles.container }>
        <View style={ styles.radioOne }>
            <RadioButton
             value="8" 
             status={ passwordLength === 8 ? 'checked' : 'unchecked' }
             onPress={()=> setPasswordLength(8)}/> 
            <Text>8</Text>
          </View>
          <View style={ styles.radioTwo }>
            <RadioButton 
            value="12" 
            status={ passwordLength === 12 ? 'checked' : 'unchecked' }
            onPress={()=> setPasswordLength(12)}/> 
             <Text>12</Text>
          </View>
    </View>
  );
}



export default BatRadioButton;