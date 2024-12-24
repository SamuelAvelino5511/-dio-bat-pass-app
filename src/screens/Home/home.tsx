import React from 'react';
import {Text, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './style';
import { BatLogo } from '../../components/BatLogo/BatLogo';
import { BatTextInput } from '../../components/batTextInput/BatTextInput';
import { BatButtom } from '../../components/BatButtom/BatButtom';


export default function Home(){
    return(
    <View style={styles.appcontainer}>
      <View style={styles.logocontainer}>
        <BatLogo/>
      </View>
      <View style={styles.inputContainer}>
        <BatButtom/>
      </View>  
    
      <StatusBar style="light" />
    </View>
    )
}
