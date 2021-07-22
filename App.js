import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
import BriefScreen from './screens/briefscreen';
import BriefScreen1 from './screens/briefscreen1';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import thankYouPage from './screens/thankScreen';
import about from './global';
import BriefScreen2 from './screens/briefscreen2';


const Stack = createStackNavigator();

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 }
  };

  render() {
    return (
      //
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} mode='modal'
            options={
              {
                title: "The Innovator's platform",
                headerStyle: {
                  backgroundColor: '#3177c5'
                },
                headerTitleStyle: {
                  textAlign: 'center',
                  color: '#333',
                  fontSize: 20,
                  fontWeight: 'bold',
                  letterSpacing: 1,
                  color: 'white'
                }
              }}
          />
          <Stack.Screen name="About" component={about} mode='modal' />
          <Stack.Screen name="Your Idea" component={BriefScreen} mode='modal'
            options={
              {
                title: "Checklist",
                headerStyle: {
                  backgroundColor: '#3177c5'
                },
                headerTitleStyle: {
                  textAlign: 'center',
                  color: '#333',
                  fontSize: 20,
                  fontWeight: 'bold',
                  letterSpacing: 1,
                  color: 'white'
                }
              }} />
          <Stack.Screen name="Your Idea (page 2)" component={BriefScreen1} mode='modal'
            options={
              {
                title: "Checklist (Page 2)",
                headerStyle: {
                  backgroundColor: '#3177c5'
                },
                headerTitleStyle: {
                  textAlign: 'center',
                  color: '#333',
                  fontSize: 20,
                  fontWeight: 'bold',
                  letterSpacing: 1,
                  color: 'white'
                }
              }}
          />
          <Stack.Screen name="Your Idea (page 3)" component={BriefScreen2} mode='modal'
            options={
              {
                title: "Checklist (page 3)",
                headerStyle: {
                  backgroundColor: '#3177c5'
                },
                headerTitleStyle: {
                  textAlign: 'center',
                  color: '#333',
                  fontSize: 20,
                  fontWeight: 'bold',
                  letterSpacing: 1,
                  color: 'white'
                }
              }}
          />
          <Stack.Screen name="Idea Submitted" component={thankYouPage} mode='modal'
            options={
              {
                title: "Submitted",
                headerStyle: {
                  backgroundColor: '#3177c5'
                },
                headerTitleStyle: {
                  textAlign: 'center',
                  color: '#333',
                  fontSize: 20,
                  fontWeight: 'bold',
                  letterSpacing: 1,
                  color: 'white'
                }
              }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
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
});
