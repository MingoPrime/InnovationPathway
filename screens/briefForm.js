import React from 'react';
import { 
    StyleSheet, Text, View, Button,
    TextInput, ScrollView, KeyboardAvoidingView,
    TouchableWithoutFeedback, Platform, Keyboard
  } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';


const schema = yup.object({
    programTitle: yup.string().required().min(3),
    brandName: yup.string().required(),
    pownerName: yup.string().required(),
    pownerFunction: yup.string().required(),
    pownerReportingManager: yup.string().required(),
    DeputypoiName: yup.string().required(),
    DeputypoiFunction: yup.string().required(),
    DeputypoiReportingManager: yup.string().required(),

})
export default function Form({addtoData}){

    return(
        <View style={styles.container}>
            <Formik
            initialValues={{ 
                programTitle: '', brandName: '', 
                pownerName: '', pownerFunction: '',
                pownerReportingManager:'',
                DeputypoiName:'', DeputypoiFunction:'',
                DeputypoiReportingManager:'',
            }}
            validationSchema={schema}
            onSubmit={(values)=>{addtoData(values)}}
            >
                {(props)=>(
                    <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.container}
                  >
                      <View>
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}><ScrollView>

                        <TextInput style={styles.input}
                        placeholder='Program Title'
                        placeholderTextColor='grey'
                        onChangeText={props.handleChange('programTitle')}
                        value={props.values.programTitle}
                        />
                        <Text>{props.touched.programTitle && props.errors.programTitle}</Text>
                        <TextInput style={styles.input}
                        placeholder='Brand Name'
                        placeholderTextColor='grey'
                        onChangeText={props.handleChange('brandName')}
                        value={props.values.brandName}
                        />
                        <Text>{props.touched.brandName && props.errors.brandname}</Text>
                        <TextInput style={styles.input}
                        placeholder='Program Owner Name'
                        placeholderTextColor='grey'
                        onChangeText={props.handleChange('pownerName')}
                        value={props.values.pownerName}
                        />
                        <Text>{props.touched.pownerName && props.errors.pownerName}</Text>
                        <TextInput style={styles.input}
                        placeholder='program Owner Function'
                        placeholderTextColor='grey'
                        onChangeText={props.handleChange('pownerFunction')}
                        value={props.values.pownerFunction}
                        />
                        <Text>{props.touched.pownerFunction && props.errors.pownerFunction}</Text>
                        <TextInput style={styles.input}
                        placeholder='Program Owner Reporting Manager'
                        placeholderTextColor='grey'
                        onChangeText={props.handleChange('pownerReportingManager')}
                        value={props.values.pownerReportingManager}
                        />
                        <Text>{props.touched.pownerReportingManager && props.errors.pownerReportingManager}</Text>
                        <TextInput style={styles.input}
                        placeholder='Deputy Program Owner Name'
                        placeholderTextColor='grey'
                        onChangeText={props.handleChange('DeputypoiName')}
                        value={props.values.DeputypoiName}
                        />
                        <Text>{props.touched.DeputypoiName && props.errors.DeputypoiName}</Text>
                        <TextInput style={styles.input}
                        placeholder='Deputy Program Owner Function'
                        placeholderTextColor='grey'
                        onChangeText={props.handleChange('DeputypoiFunction')}
                        value={props.values.DeputypoiFunction}
                        />
                        <Text>{props.touched.DeputypoiFunction && props.errors.DeputypoiFunction}</Text>
                        <TextInput style={styles.input}
                        placeholder='Deputy Program Owner Reporting Manager'
                        placeholderTextColor='grey'
                        onChangeText={props.handleChange('DeputypoiReportingManager')}
                        value={props.values.DeputypoiReportingManager}
                        />
                        <Text>{props.touched.DeputypoiReportingManager && props.errors.DeputypoiReportingManager}</Text>
                        <Button
                        title='save' color= 'blue' onPress={props.handleSubmit}
                        />
                        </ScrollView>
                        </TouchableWithoutFeedback>
                    </View>
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
        backgroundColor:'white',
        marginBottom: 5,
        marginTop : 10
      },
}
);