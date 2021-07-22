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
import Form from './briefForm';
import Form1 from './briefForm1';
import Form2 from './briefForm2';
import Form3 from './briefForm3';




export default function BriefScreen() {

  const [isSelected, setSelection] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
  const navigation = useNavigation();
  const [Yes, setYes] = useState(0)
  const affList = ["Yes", "No"];
  const yesOrNo = (index) => { setYes((preindex) => index) };

  const [Yes1, setYes1] = useState(0)
  const yesOrNo1 = (index1) => { setYes1((preindex) => index1) };

  const addQ = (props) => { props ? <Text>Why  ?</Text> : <Text> bruh</Text> }

  const [modalOpen, setModalOpen] = useState(false);
  const addtoData = () => { setModalOpen(false) };

  const [modalOpen1, setModalOpen1] = useState(false);
  const addtoData1 = () => { setModalOpen1(false) };

  const [modalOpen2, setModalOpen2] = useState(false);
  const addtoData2 = () => { setModalOpen2(false) };

  const [modalOpen3, setModalOpen3] = useState(false);
  const addtoData3 = () => { setModalOpen3(false) };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Modal visible={modalOpen} animationType='slide'>
          <View style={styles.modalContent}>
            <Ionicons
              name='close'
              size={24}
              onPress={() => setModalOpen(false)}
              style={styles.modalToggle}
            />
            <Form addtoData={addtoData} />
          </View>
        </Modal>
        <View style={{ flexDirection: 'row', marginTop: 8, alignSelf: 'center' }}>
          <Text style={{ color: 'black', marginTop: 13, marginRight: 5, fontWeight: 'bold', fontSize: 20 }}>Preliminary Information</Text>
          <Ionicons
            name='add'
            size={24}
            onPress={() => setModalOpen(true)}
            style={styles.modalToggle}
          />
        </View>

        <Card containerStyle={{ backgroundColor: '#74aae5', width: 365 }}>
          <View style={{ borderRadius: 3, borderColor: 'grey' }}>

            <Text style={{ paddingLeft: 5 }}> Does my Program meet criteria for priority review?</Text>

            <View style={{ flexDirection: "row" }}>

              {affList.map((data, index) => (
                <TouchableOpacity
                  key={data}
                  style={{
                    flexDirection: "row",
                    margin: 10,
                    flex: 3,
                    justifyContent: "space-evenly",
                  }}
                  onPress={yesOrNo.bind(this, index)}
                >
                  <MaterialIcons
                    name={
                      index === Yes
                        ? "radio-button-checked"
                        : "radio-button-unchecked"
                    }
                    size={18}
                    color='#ccc'
                  />
                  <Text style={styles.termsText}>{data}</Text>
                </TouchableOpacity>
              ))}
            </View>

          </View>
        </Card>

        <Modal visible={modalOpen1} animationType='slide'>
          <View style={styles.modalContent}>
            <Ionicons
              name='close'
              size={24}
              onPress={() => setModalOpen1(false)}
              style={styles.modalToggle}
            />
            <Form1 addtoData1={addtoData1} />
          </View>
        </Modal>
        <View style={{ flexDirection: 'row', marginTop: 10, alignSelf: 'center' }}>
          <Text style={{ color: 'black', marginTop: 13, marginRight: 5, fontWeight: 'bold', fontSize: 20 }}>Program Details</Text>
          <Ionicons
            name='add'
            size={24}
            onPress={() => setModalOpen1(true)}
            style={styles.modalToggle}
          />
        </View>
        <Card containerStyle={{ backgroundColor: '#74aae5', width:365 }}>
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
            <Text style={styles.label, { padding: 8, width: 300, marginTop: 30 }}>Is Novartis identified on the platform/channel for distribution?</Text>
          </View>
        </Card>
        {isSelected ? <Text style={{ alignSelf: 'center', fontWeight: 'bold' }}>Detail why Novartis is not identified on the platform</Text> : null}
        {isSelected ? <TextInput
          multiline
          style={styles.biginput, {
            alignSelf: 'center',
            backgroundColor: 'white', borderRadius: 3,
            borderWidth: 3, borderColor: 'black', height: 100, width: 380
          }}
          placeholder='Why?'
          placeholderTextColor="grey"
        /> : null}


        <Modal visible={modalOpen2} animationType='slide'>
          <View style={styles.modalContent}>
            <Ionicons
              name='close'
              size={24}
              onPress={() => setModalOpen2(false)}
              style={styles.modalToggle}
            />
            <Form2 addtoData2={addtoData2} />
          </View>
        </Modal>
        <View style={{ flexDirection: 'row', marginTop: 10, alignSelf: 'center' }}>
          <Text style={{ color: 'black', marginTop: 13, marginRight: 5, fontWeight: 'bold', fontSize: 20 }}>Risk Assessment</Text>
          <Ionicons
            name='add'
            size={24}
            onPress={() => setModalOpen2(true)}
            style={styles.modalToggle}
          />
        </View>


        <Modal visible={modalOpen3} animationType='slide'>
          <View style={styles.modalContent}>
            <Ionicons
              name='close'
              size={24}
              onPress={() => setModalOpen3(false)}
              style={styles.modalToggle}
            />
            <Form3 addtoData3={addtoData3} />
          </View>
        </Modal>
        <View style={{ flexDirection: 'row', marginTop: 10, alignSelf: 'center' }}>
          <View>
            <Text style={{ color: 'black', marginTop: 13, marginRight: 5, fontWeight: 'bold', fontSize: 20 }}>Ownership, IP & Publication</Text>
          </View>
          <Ionicons
            name='add'
            size={24}
            onPress={() => setModalOpen3(true)}
            style={styles.modalToggle}
          />
        </View>


        <Card containerStyle={{ backgroundColor: '#74aae5', width: 365 }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.checkboxContainer}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ marginTop: 15 }}>Yes</Text>
                <CheckBox
                  checked={!isSelected2}
                  onPress={() => { setSelection2(!isSelected2) }}
                  style={styles.checkbox}
                />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ marginTop: 15 }}>No</Text>
                <CheckBox
                  checked={isSelected2}
                  onPress={() => { setSelection2(!isSelected2) }}
                  style={styles.checkbox}
                />
              </View>
            </View>
            <Text style={styles.label, { padding: 8, width: 300, marginTop: 30 }}>Is my Program comprised of Digital Engagement Assets or a Social Media Listening Program?</Text>
          </View>
        </Card>
        {isSelected2 ? <TouchableOpacity style={{
          alignSelf: 'center',
          backgroundColor: 'green', borderRadius: 3, borderWidth: 3,
          borderColor: 'green', marginBottom: 30, marginTop: 10, width: 200
        }}
          onPress={() => navigation.navigate("Idea Submitted")}>
          <Text style={{ alignSelf: 'center' }}>Submit</Text></TouchableOpacity> :
          <TouchableOpacity
            style={{
              alignSelf: 'center', marginBottom: 30, marginTop: 10
            }}
            onPress={
              () => { navigation.navigate("Your Idea (page 2)") }
            }
          >
            <MaterialIcons name="chevron-right" size={24} color="black" />

          </TouchableOpacity>
        }



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