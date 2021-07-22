import { StatusBar } from 'expo-status-bar';
import logo from '../assets/highwa.png';
import React, { useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {
   StyleSheet, Text, View,
   Button, Alert, SafeAreaView,
   Image, TextInput, TouchableOpacity, Modal 
} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';


export default function HomeScreen() {
    const navigation = useNavigation();
    var myPic = require('../assets/highwaa.png');
   
    return (
      <View style={styles.container}>
       
       <Image style={
        {
         justifyContent:'center',
         alignContent: 'center',
         width:150, height:100,
         marginTop: 350,
         marginBottom: 15
        }
        } 
      source={myPic}
        />
  
        <Button
          onPress={() => {navigation.navigate("Your Idea")}}
          title="Start"
          color="#4e5fb1"
          accessibilityLabel="Learn more about this purple button"
        />
        <Text style={{ paddingBottom: 500 }}> {'\n'} </Text>
        <TouchableOpacity
          style={{alignSelf: 'flex-start', position: 'absolute', bottom: 35, paddingLeft: 20}}
          onPress={() => navigation.navigate("About")}
        >
          <FontAwesome name="info" size={24} color="black" />
  
        </TouchableOpacity>
        <StatusBar hidden={true} />
      </View>
    );
}

// function newFile(a){
//   file.path = file.RNFS.DocumentDirectoryPath + '/'+ a +'.txt';
// }
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#74aae5',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 70,
    },
  });
  