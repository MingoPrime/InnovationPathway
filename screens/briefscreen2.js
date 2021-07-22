import React, { useState } from 'react';
import { Link, useNavigation } from '@react-navigation/native';
import {
  StyleSheet, Text, View,
  TextInput, TouchableOpacity, ScrollView,
  Modal, Linking
} from 'react-native';
import { CheckBox, Card } from 'react-native-elements'
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { CardStyleInterpolators } from '@react-navigation/stack';


export default function BriefScreen2() {
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Text>Rest of Brief to be added by 23/07/2021</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#74aae5',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    input: {
      borderWidth: 3,
      borderColor: '#000',
      backgroundColor: '#fff',
      padding: 8,
      margin: 10,
      width: 150,
    },
    biginput: {
      flex: 1,
      borderWidth: 3,
      borderColor: '#000',
      backgroundColor: '#fff',
      padding: 9,
      margin: 10,
      width: 380,
    },
    modalToggle: {
      borderWidth: 1,
      borderColor: '#f2f2f2',
      padding: 10,
      marginBottom: 10,
      borderRadius: 10,
      alignSelf: 'center',
    },
    modalClose: {
      marginTop: 20,
      marginBottom: 0
    },
    modalContent: {
      flex: 1,
    },
    checkboxContainer: {
      flexDirection: "column",
      marginBottom: 20,
    },
    checkbox: {
      alignSelf: "center",
      marginLeft: 10,
    },
    label: {
      margin: 8,
      paddingTop: 6,
      flexWrap: 'wrap'
    }
  
  });