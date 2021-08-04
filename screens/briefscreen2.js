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
import Form4 from './briefForm4';

export default function BriefScreen2() {
  const navigation = useNavigation();

  const [isSelected, setSelection] = useState(false);
  const [isSelected1, setSelection1] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
  const [isSelected3, setSelection3] = useState(false);


  const [modalOpen4, setModalOpen4] = useState(false);
  const addtoData4 = () => { setModalOpen4(false) };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Modal visible={modalOpen4} animationType='slide'>
          <View style={styles.modalContent}>
            <Ionicons
              name='close'
              size={24}
              onPress={() => setModalOpen4(false)}
              style={styles.modalToggle}
            />
            <Form4 addtoData4={addtoData4} />
          </View>
        </Modal>
        <View style={{ flexDirection: 'row', marginTop: 8, alignSelf: 'center' }}>
          <Text style={{ color: 'black', marginTop: 13, marginRight: 5, fontWeight: 'bold', fontSize: 20 }}>Program Components </Text>
          <Ionicons
            name='add'
            size={24}
            onPress={() => setModalOpen4(true)}
            style={styles.modalToggle}
          />
        </View>

        <Card containerStyle={{ backgroundColor: '#74aae5', width: 365 }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.checkboxContainer}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ marginTop: 15 }}>Yes</Text>
                <CheckBox
                  checked={!isSelected}
                  onPress={() => { setSelection(!isSelected) }}
                  style={styles.checkbox}
                />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ marginTop: 15 }}>No</Text>
                <CheckBox
                  checked={isSelected}
                  onPress={() => { setSelection(!isSelected) }}
                  style={styles.checkbox}
                />
              </View>
            </View>
            <Text style={styles.label, { padding: 8, width: 250, marginTop: 20 }}>Will 2-way engagement functionalities be enabled for any DEAs in my Program?</Text>
          </View>
        </Card>
        {isSelected ? <TouchableOpacity style={{
          alignSelf: 'center',
          backgroundColor: 'green', borderRadius: 3, borderWidth: 3,
          borderColor: 'green', marginBottom: 30, marginTop: 10, width: 200
        }}
          onPress={() => navigation.navigate("File Upload")}>
          <Text style={{ alignSelf: 'center' }}>Submit</Text></TouchableOpacity> :

          <Card containerStyle={{ backgroundColor: '#74aae5', width: 365, marginBottom: 50 }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.checkboxContainer}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ marginTop: 15, width: 300 }}>
                    I confirm that the above-mentioned agency(ies) have completed and signed a pharmacovigilance (PV) agreement and have completed all required trainings.
                    <Text style={{ fontStyle: 'italic' }}>*If PV agreement already exists, please ensure its validity.</Text>
                  </Text>
                  <CheckBox
                    checked={isSelected1}
                    onPress={() => { setSelection1(!isSelected1) }}
                    style={styles.checkbox}
                  />
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ flexDirection: 'column' }}>
                    <Text style={{ marginTop: 15, width: 300 }}> I confirm that AR monitoring will be provide by </Text>
                    <TextInput style={{ height: 20, width: 290, borderColor:'black', borderWidth: 1 , alignSelf:'center'}} placeholder='Type Here...'
                        placeholderTextColor='grey' />
                    <Text style={{ width: 300 }}>, and all AEs will be transferred according to the most recent transfer requirements.</Text>
                  </View>
                  <View style={{marginTop:15}}>
                  <CheckBox
                    checked={isSelected2}
                    onPress={() => { setSelection2(!isSelected2) }}
                    style={{
                      alignSelf: "center",
                      marginLeft: 10,
                      
                    }}
                  />
                  </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ marginTop: 15, width: 300 }}>
                    I confirm that all training for AE monitoring has been completed by the party responsible.
                  </Text>
                  <CheckBox
                    checked={isSelected3}
                    onPress={() => { setSelection3(!isSelected3) }}
                    style={styles.checkbox}
                  />
                </View>
              </View>
            </View>
          </Card>
        }

        {isSelected ? null : <TouchableOpacity
          style={{
            alignSelf: 'center', marginBottom: 30, marginTop: 10
          }}
          onPress={
            () => { navigation.navigate("Your Idea (page 4)") }
          }
        >
          <MaterialIcons name="chevron-right" size={24} color="black" />

        </TouchableOpacity>}

      </ScrollView>


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