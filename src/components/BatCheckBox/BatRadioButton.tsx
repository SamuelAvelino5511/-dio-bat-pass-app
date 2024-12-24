import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';


  const BatCheckBox = ({ passwordLength , setPasswordLength } : {passwordLength : number, setPasswordLength : (length:number)=> void}) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, justifyContent: 'flex-start' }}>
        <View style={{marginRight:50, flexDirection: 'row', alignItems: 'center'}}>
            <RadioButton
             value="8" 
             status={ passwordLength === 8 ? 'checked' : 'unchecked' }
             onPress={()=> setPasswordLength(8)}/> 
            <Text>8</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <RadioButton 
            value="12" 
            status={ passwordLength === 12 ? 'checked' : 'unchecked' }
            onPress={()=> setPasswordLength(12)}/> 
             <Text>12</Text>
          </View>
    </View>
  );
}



export default BatCheckBox;