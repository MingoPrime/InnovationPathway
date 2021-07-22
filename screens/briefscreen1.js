import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet, Text, View,
  TextInput, TouchableOpacity, ScrollView,
  Modal, Linking
} from 'react-native';
import { CheckBox, Card } from 'react-native-elements'
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function BriefScreen1() {
  const [isSelected, setSelection] = useState(false);
  const [isSelected1, setSelection1] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
  const [isSelected3, setSelection3] = useState(false);

  const [isSelected4, setSelection4] = useState(false);
  const [isSelected5, setSelection5] = useState(false);
  const [isSelected6, setSelection6] = useState(false);

  const [isSelected7, setSelection7] = useState(false);
  const [isSelected8, setSelection8] = useState(false);
  const [isSelected9, setSelection9] = useState(false);


  const onPress1 = () => { Linking.openURL('https://novartis.csod.com/ui/lms-learning-details/app/course/80ee1de6-caf1-4025-9bfa-3ee6c49d9944') };
  const onPress2 = () => { Linking.openURL('https://novartis.csod.com/ui/lms-learning-details/app/curriculum/4c5aba7c-7066-4279-b441-5fc74b013616') };

  const navigation = useNavigation();
  return (

    <View style={styles.container}>
      <ScrollView>
        <View style={styles.checkboxContainer}>
          <View style={{ flexDirection: 'row' }}>

            <CheckBox
              checked={(isSelected && isSelected2 && isSelected1) || (isSelected3)}
              onPress={() => { setSelection3(!isSelected3) && setSelection(!isSelected3) && setSelection2(!isSelected3) && setSelection1(!isSelected3) }}
              style={{ alignSelf: 'center' }}
            />

            <Text style={{ marginTop: 15, width: 290 }}>I confirm that I have reviewed and understand the following SOPs  </Text>
            <Ionicons name="information-circle-sharp" size={24} color="black" onPress={() => Linking.openURL('https://go/DigitalEngagementStudio')} />

          </View>
        </View>
        <Card containerStyle={{ backgroundColor: '#74aae5', width: 365 }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.checkboxContainer}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ marginTop: 15, width: 300 }}>
                  <Text style={{ fontWeight: 'bold' }}>Digital Engagement Programs: </Text>
                  SOP-8078834
                  <Text style={{ fontWeight: 'bold' }}> Digital Engagement Assets and Programs</Text>
                </Text>
                <CheckBox
                  checked={isSelected}
                  onPress={() => { setSelection(!isSelected) }}
                  style={styles.checkbox}
                />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ marginTop: 15, width: 300 }}>
                  <Text style={{ fontWeight: 'bold' }}>Digital Engagement Programs: </Text>
                  GUID-8094747
                  <Text style={{ fontWeight: 'bold' }}> Scope Guidance for DEAs and DEPs</Text>
                </Text>
                <CheckBox
                  checked={isSelected1}
                  onPress={() => { setSelection1(!isSelected1) }}
                  style={styles.checkbox}
                />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ marginTop: 15, width: 300 }}>
                  <Text style={{ fontWeight: 'bold' }}>Social Media Listening Programs: </Text>
                  SOP-8074579
                  <Text style={{ fontWeight: 'bold' }}> Social Media Listening Programs</Text>
                </Text>
                <CheckBox
                  checked={isSelected2}
                  onPress={() => { setSelection2(!isSelected2) }}
                  style={styles.checkbox}
                />
              </View>
            </View>
          </View>
        </Card>

        <View style={styles.checkboxContainer}>
          <View style={{ flexDirection: 'row' }}>

            <CheckBox
              checked={(isSelected4 && isSelected5) || (isSelected6)}
              onPress={() => { setSelection6(!isSelected6) && setSelection5(!isSelected6) && setSelection4(!isSelected6) }}
              style={{ alignSelf: 'center' }}
            />

            <Text style={{ marginTop: 15, width: 290 }}>I confirm that the following mandatory trainings have been completed by both the Program Owner AND Deputy Program Owner </Text>
            <Ionicons name="information-circle-sharp" size={24} color="black" onPress={() => Linking.openURL('https://go/DigitalEngagementStudio')} />

          </View>
        </View>
        <Card containerStyle={{ backgroundColor: '#74aae5', width: 365 }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.checkboxContainer}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ marginTop: 15, width: 300 }}>
                  <Text style={{ fontWeight: 'bold' }}>Digital Engagement Assets and Programs: </Text>
                  <Text style={{ color: '#088FFA', textDecorationLine: 'underline', textDecorationColor: '#088FFA' }}
                    onPress={onPress1}> [Global] Digital Engagement Assets and Programs Process Training</Text>
                </Text>
                <CheckBox
                  checked={isSelected4}
                  onPress={() => { setSelection4(!isSelected4) }}
                  style={styles.checkbox}
                />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ marginTop: 15, width: 300 }}>
                  <Text style={{ fontWeight: 'bold' }}>Social Media Listening Programs: </Text>
                  <Text style={{ color: '#088FFA', textDecorationLine: 'underline', textDecorationColor: '#088FFA' }}
                    onPress={onPress2}> Social Media Listening Programs Training</Text>
                </Text>
                <CheckBox
                  checked={isSelected5}
                  onPress={() => { setSelection5(!isSelected5) }}
                  style={styles.checkbox}
                />
              </View>
            </View>
          </View>
        </Card>


        <View style={styles.checkboxContainer}>
          <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <Text style={{ marginTop: 30, width: 320 }}> My Program is comprised of (Select 1 or multiple) </Text>
          </View>
        </View>
        <Card containerStyle={{ backgroundColor: '#74aae5', width: 365, marginBottom: 50 }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.checkboxContainer}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ marginTop: 15, width: 300 }}>
                  Novartis Owned DEAs (hover floater to be added)
                </Text>
                <CheckBox
                  checked={isSelected7}
                  onPress={() => { setSelection7(!isSelected7) }}
                  style={styles.checkbox}
                />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ marginTop: 15, width: 300 }}>
                  Third-Party DEAs
                </Text>
                <CheckBox
                  checked={isSelected8}
                  onPress={() => { setSelection8(!isSelected8) }}
                  style={styles.checkbox}
                />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ marginTop: 15, width: 300 }}>
                  Distribution platforms of Novartis owned/Third-Party owned DEAs
                </Text>
                <CheckBox
                  checked={isSelected9}
                  onPress={() => { setSelection9(!isSelected9) }}
                  style={styles.checkbox}
                />
              </View>
            </View>
          </View>
        </Card>

      </ScrollView>
      <TouchableOpacity
        style={{
          alignSelf: 'flex-end', position: 'absolute', bottom: 35, paddingRight: 20
        }}
        onPress={() => navigation.navigate('Your Idea (page 3)')}
      >
        <FontAwesome name="arrow-circle-right" size={24} color="black" />

      </TouchableOpacity>
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