import React from 'react';
import {
  StyleSheet, Text, View, Button,
  TextInput, ScrollView, KeyboardAvoidingView,
  TouchableWithoutFeedback, Platform, Keyboard
} from 'react-native';
import { Card } from "react-native-elements";
import { Formik } from 'formik';
import * as yup from 'yup';
import DateField from 'react-native-datefield';


const schema = yup.object({
  programDescription: yup.string().required().min(10),
  expectedStartDate: yup.date().required(),
  expectedEndDate: yup.date().required().min(yup.ref('expectedStartDate')),
  expectedFuseSub: yup.date().required(),
  expectedPaabSub: yup.date(),
  additionalMilestone: yup.string(),
  endProductDesc: yup.string().required().min(15),
  moneyTing: yup.string().required(),

})
export default function Form1({ addtoData1 }) {

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          programDescription: '', expectedStartDate: '',
          expectedEndDate: '', expectedFuseSub: '',
          expectedPaabSub: '',
          additionalMilestone: '', endProductDesc: '',
          moneyTing: '',
        }}
        validationSchema={schema}
        onSubmit={(values) => { addtoData1(values) }}
      >
        {(props) => (


          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
          >

            <ScrollView>
              <TextInput

                style={styles.biginput}
                multiline
                placeholder='Program Description'
                placeholderTextColor='grey'
                onChangeText={props.handleChange('programDescription')}
                value={props.values.programDescription}
              />
              <Text style={{ color: 'red' }}>{props.touched.programDescription && props.errors.programDescription}</Text>

              <Card containerStyle={{ backgroundColor: '#fff', width: 365 }}>
                <Text style={{fontWeight:'bold', fontSize: 20}}>Expected Start Date</Text>
              <DateField
                labelDate="date"
                labelMonth="month"
                labelYear="year"
                styleInput={styles.inputBorder}
                maximumDate={new Date(2024, 3, 10)}
                minimumDate={new Date()}
                onSubmit={(value) => console.log(value)}
              />
              </Card>
              <Card containerStyle={{ backgroundColor: '#fff', width: 365 }}>
                <Text style={{fontWeight:'bold', fontSize: 20}}>Expected End Date</Text>
              <DateField
                labelDate="day"
                labelMonth="month"
                labelYear="year"
                styleInput={styles.inputBorder}
                maximumDate={new Date(2024, 3, 10)}
                minimumDate={new Date()}
                onSubmit={(value) => console.log(value)}
              />
              </Card>
              <Card containerStyle={{ backgroundColor: '#fff', width: 365 }}>
                <Text style={{fontWeight:'bold', fontSize: 20}}>Expected FUSE submission date</Text>
              <DateField
                labelDate="date"
                labelMonth="month"
                labelYear="year"
                styleInput={styles.inputBorder}
                maximumDate={new Date(2024, 3, 10)}
                minimumDate={new Date()}
                onSubmit={(value) => console.log(value)}
              />
              </Card>
              <Card containerStyle={{ backgroundColor: '#fff', width: 365 }}>
                <Text style={{fontWeight:'bold', fontSize: 20}}>Expected PAAB/ASC submission dates</Text>
              <DateField
                labelDate="date"
                labelMonth="month"
                labelYear="year"
                styleInput={styles.inputBorder}
                maximumDate={new Date(2024, 3, 10)}
                minimumDate={new Date()}
                onSubmit={(value) => console.log(value)}
              />
              </Card>
              

              <TextInput style={styles.biginput}
                multiline
                placeholder='Defined Milestones'
                placeholderTextColor='grey'
                onChangeText={props.handleChange('additionalMilestone')}
                value={props.values.additionalMilestone}
              />
              <Text style={{ color: 'red' }}>{props.touched.additionalMilestone && props.errors.additionalMilestone}</Text>


              <TextInput style={styles.biginput}
                multiline
                placeholder='Intended Audiences - KPIs - Metric for success'
                placeholderTextColor='grey'
                onChangeText={props.handleChange('endProductDesc')}
                value={props.values.endProductDesc}
              />
              <Text style={{ color: 'red' }}>{props.touched.endProductDesc && props.errors.endProductDesc}</Text>


              <TextInput style={styles.biginput}
                multiline
                placeholder='Program Cost & Stakeholder Information'
                placeholderTextColor='grey'
                onChangeText={props.handleChange('moneyTing')}
                value={props.values.moneyTing}
              />
              <Text style={{ color: 'red' }}>{props.touched.moneyTing && props.errors.moneyTing}</Text>


              <Button
                title='SAVE' color='blue' color='black' onPress={props.handleSubmit}
              />
              <View style={{ marginBottom: 50 }}></View>
            </ScrollView>
          </KeyboardAvoidingView>


        )}
      </Formik>

    </View>
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#74aae5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    backgroundColor: 'white',
    marginBottom: 5,
    marginTop: 10
  },
  biginput: {
    flex: 1,
    borderWidth: 3,
    borderColor: '#000',
    backgroundColor: '#fff',
    padding: 9,
    alignSelf:'center',
    marginTop: 10,
    marginBottom: 5,
    width: 380,
    height: 200,
    textAlignVertical: 'top'
  },
  inputBorder: {
    width: '30%',
    borderRadius: 8,
    borderColor: '#cacaca',
    borderWidth: 1,
    marginBottom: 20,
  },
}
);