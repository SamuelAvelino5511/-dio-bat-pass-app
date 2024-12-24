import React, { useState } from 'react';
import { Text, Pressable} from 'react-native';
import { styles } from './BatButtomStyle';
import { BatTextInput } from '../batTextInput/BatTextInput';
import generatePass from '../../service/passwordService';
import * as Clipboard from 'expo-clipboard';
import BatCheckBox  from '../BatCheckBox/BatRadioButton';

export function BatButtom() {
    const [pass, setPass] = useState('')
    const [passwordLength, setPasswordLength] = useState<number>(8);


    function handleGenerateButton(){
        let GenerateToken = generatePass(passwordLength) 
        setPass(GenerateToken)
    }
    function handleCopyButtom(){
        Clipboard.setStringAsync(pass)
    }

  return (
    <>
        <BatCheckBox passwordLength = {passwordLength} setPasswordLength={setPasswordLength}/>
        <BatTextInput pass={pass}/>

        <Pressable
            style={styles.buttom}
            onPress={handleGenerateButton}
        >
            <Text style={styles.text}>☢ GENERATE</Text>
        </Pressable>

        <Pressable
            style={styles.buttom}
            onPress={handleCopyButtom}
        >
            <Text style={styles.text}>☢ COPY</Text>
        </Pressable>
    </>
  );
}