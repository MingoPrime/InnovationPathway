import React, { useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {
  StyleSheet, Text, View, Button,
  TextInput, TouchableOpacity, ScrollView,
  Modal, TouchableHighlight
} from 'react-native';
import { CheckBox, Card } from 'react-native-elements'
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';





export default function FileUpload() {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>



      <TouchableOpacity
        style={{
          alignSelf: 'flex-start', position: 'absolute', bottom: 35, paddingLeft: 20
        }}
        onPress={() => navigation.goBack()}
      >
        <FontAwesome name="arrow-circle-left" size={24} color="black" />

      </TouchableOpacity>

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