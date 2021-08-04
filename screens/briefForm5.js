import React from 'react';
import {
  StyleSheet, Text, View, Button,
  TextInput, ScrollView, KeyboardAvoidingView,
  TouchableWithoutFeedback, Platform, Keyboard
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';


const schema = yup.object({
  ProgramTitle: yup.string().required(),
  AnticipatedSubDate: yup.string().required().min(8).max(12),
  Notes: yup.string(),


  ProgramTitle1: yup.string().required(),
  AnticipatedSubDate1: yup.string().required().min(8).max(12),
  Notes1: yup.string(),


  ProgramTitle2: yup.string().required(),
  AnticipatedSubDate2: yup.string().required().min(8).max(12),
  Notes2: yup.string(),


  ProgramTitle3: yup.string().required(),
  AnticipatedSubDate3: yup.string().required().min(8).max(12),
  Notes3: yup.string(),


  ProgramTitle4: yup.string().required(),
  AnticipatedSubDate4: yup.string().required().min(8).max(12),
  Notes4: yup.string(),
})

function Form5({ addtoData5 }) {

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          ProgramTitle: '', AnticipatedSubDate: '',
          Notes: '',
        }}
        validationSchema={schema}
        onSubmit={(values) => { addtoData5(values) }}
      >
        {(props) => (

          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
          >

            <ScrollView>
              <TextInput
                multiline
                style={styles.input}
                placeholder='Title of Program/Asset(s)'
                placeholderTextColor='grey'
                onChangeText={props.handleChange('ProgramTitle')}
                value={props.values.ProgramTitle}
              />
              <Text style={{ color: 'red' }}>{props.touched.ProgramTitle && props.errors.ProgramTitle}</Text>

              <TextInput
                multiline
                style={styles.input}
                placeholder='Anticipated Submission Date'
                placeholderTextColor='grey'
                onChangeText={props.handleChange('AnticipatedSubDate')}
                value={props.values.AnticipatedSubDate}
              />
              <Text style={{ color: 'red' }}>{props.touched.AnticipatedSubDate && props.errors.AnticipatedSubDate}</Text>

              <TextInput
                multiline
                style={styles.input}
                placeholder='Provide any additional information if necessary'
                placeholderTextColor='grey'
                onChangeText={props.handleChange('Notes')}
                value={props.values.Notes}
              />
              <Text style={{ color: 'red' }}>{props.touched.Notes && props.errors.Notes}</Text>

              <Button
                title='SAVE' color='black' onPress={props.handleSubmit}
              />
            </ScrollView>
          </KeyboardAvoidingView>

        )}
      </Formik>

    </View>
  )
};

function Form6({ addtoData6 }) {

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          ProgramTitle1: '', AnticipatedSubDate1: '',
          Notes1: '',
        }}
        validationSchema={schema}
        onSubmit={(values) => { addtoData6(values) }}
      >
        {(props) => (

          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
          >

            <ScrollView>
              <TextInput
                multiline
                style={styles.input}
                placeholder='Title of Program/Asset(s)'
                placeholderTextColor='grey'
                onChangeText={props.handleChange('ProgramTitle')}
                value={props.values.ProgramTitle1}
              />
              <Text style={{ color: 'red' }}>{props.touched.ProgramTitle1 && props.errors.ProgramTitle1}</Text>

              <TextInput
                multiline
                style={styles.input}
                placeholder='Anticipated Submission Date'
                placeholderTextColor='grey'
                onChangeText={props.handleChange('AnticipatedSubDate')}
                value={props.values.AnticipatedSubDate1}
              />
              <Text style={{ color: 'red' }}>{props.touched.AnticipatedSubDate1 && props.errors.AnticipatedSubDate1}</Text>

              <TextInput
                multiline
                style={styles.input}
                placeholder='Provide any additional information if necessary'
                placeholderTextColor='grey'
                onChangeText={props.handleChange('Notes')}
                value={props.values.Notes1}
              />
              <Text style={{ color: 'red' }}>{props.touched.Notes1 && props.errors.Notes1}</Text>

              <Button
                title='SAVE' color='black' onPress={props.handleSubmit}
              />
            </ScrollView>
          </KeyboardAvoidingView>

        )}
      </Formik>

    </View>
  )
};


function Form7({ addtoData7 }) {

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          ProgramTitle2: '', AnticipatedSubDate2: '',
          Notes2: '',
        }}
        validationSchema={schema}
        onSubmit={(values) => { addtoData7(values) }}
      >
        {(props) => (

          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
          >

            <ScrollView>
              <TextInput
                multiline
                style={styles.input}
                placeholder='Title of Program/Asset(s)'
                placeholderTextColor='grey'
                onChangeText={props.handleChange('ProgramTitle')}
                value={props.values.ProgramTitle2}
              />
              <Text style={{ color: 'red' }}>{props.touched.ProgramTitle2 && props.errors.ProgramTitle2}</Text>

              <TextInput
                multiline
                style={styles.input}
                placeholder='Anticipated Submission Date'
                placeholderTextColor='grey'
                onChangeText={props.handleChange('AnticipatedSubDate')}
                value={props.values.AnticipatedSubDate2}
              />
              <Text style={{ color: 'red' }}>{props.touched.AnticipatedSubDate2 && props.errors.AnticipatedSubDate2}</Text>

              <TextInput
                multiline
                style={styles.input}
                placeholder='Provide any additional information if necessary'
                placeholderTextColor='grey'
                onChangeText={props.handleChange('Notes')}
                value={props.values.Notes2}
              />
              <Text style={{ color: 'red' }}>{props.touched.Notes2 && props.errors.Notes2}</Text>

              <Button
                title='SAVE' color='black' onPress={props.handleSubmit}
              />
            </ScrollView>
          </KeyboardAvoidingView>

        )}
      </Formik>

    </View>
  )
};


function Form8({ addtoData8 }) {

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          ProgramTitle3: '', AnticipatedSubDate3: '',
          Notes3: '',
        }}
        validationSchema={schema}
        onSubmit={(values) => { addtoData8(values) }}
      >
        {(props) => (

          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
          >

            <ScrollView>
              <TextInput
                multiline
                style={styles.input}
                placeholder='Title of Program/Asset(s)'
                placeholderTextColor='grey'
                onChangeText={props.handleChange('ProgramTitle')}
                value={props.values.ProgramTitle3}
              />
              <Text style={{ color: 'red' }}>{props.touched.ProgramTitle3 && props.errors.ProgramTitle3}</Text>

              <TextInput
                multiline
                style={styles.input}
                placeholder='Anticipated Submission Date'
                placeholderTextColor='grey'
                onChangeText={props.handleChange('AnticipatedSubDate')}
                value={props.values.AnticipatedSubDate3}
              />
              <Text style={{ color: 'red' }}>{props.touched.AnticipatedSubDate3 && props.errors.AnticipatedSubDate3}</Text>

              <TextInput
                multiline
                style={styles.input}
                placeholder='Provide any additional information if necessary'
                placeholderTextColor='grey'
                onChangeText={props.handleChange('Notes')}
                value={props.values.Notes3}
              />
              <Text style={{ color: 'red' }}>{props.touched.Notes3 && props.errors.Notes3}</Text>

              <Button
                title='SAVE' color='black' onPress={props.handleSubmit}
              />
            </ScrollView>
          </KeyboardAvoidingView>

        )}
      </Formik>

    </View>
  )
};



function Form9({ addtoData9 }) {

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          ProgramTitle4: '', AnticipatedSubDate4: '',
          Notes4: '',
        }}
        validationSchema={schema}
        onSubmit={(values) => { addtoData9(values) }}
      >
        {(props) => (

          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
          >

            <ScrollView>
              <TextInput
                multiline
                style={styles.input}
                placeholder='Title of Program/Asset(s)'
                placeholderTextColor='grey'
                onChangeText={props.handleChange('ProgramTitle')}
                value={props.values.ProgramTitle4}
              />
              <Text style={{ color: 'red' }}>{props.touched.ProgramTitle4 && props.errors.ProgramTitle4}</Text>

              <TextInput
                multiline
                style={styles.input}
                placeholder='Anticipated Submission Date'
                placeholderTextColor='grey'
                onChangeText={props.handleChange('AnticipatedSubDate')}
                value={props.values.AnticipatedSubDate4}
              />
              <Text style={{ color: 'red' }}>{props.touched.AnticipatedSubDate4 && props.errors.AnticipatedSubDate4}</Text>

              <TextInput
                multiline
                style={styles.input}
                placeholder='Provide any additional information if necessary'
                placeholderTextColor='grey'
                onChangeText={props.handleChange('Notes')}
                value={props.values.Notes4}
              />
              <Text style={{ color: 'red' }}>{props.touched.Notes4 && props.errors.Notes4}</Text>

              <Button
                title='SAVE' color='black' onPress={props.handleSubmit}
              />
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
    margin: 5,
    width: 380,
    height: 200
  },
}
);

export {Form5, Form6, Form7, Form8, Form9};