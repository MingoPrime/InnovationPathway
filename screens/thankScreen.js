import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';



export default function thankYouPage() {
    return (
      <View style={styles.titleText}>
        
        <Text>Thank you for submission</Text>
    
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleText: {
      flex: 1,
      fontSize: 20,
      fontWeight: "bold",
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'contain'
    },
    paddingY: {
      paddingTop: 100,
    },
    paddingX: {
      paddingBottom: 1000,
    },
    input: {
      borderWidth: 1,
      borderColor: '#777',
      padding: 8,
      margin: 10,
      width: 200,
    },
  });
  