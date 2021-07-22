import React from 'react';
import { 
  StyleSheet, Text, View, Button,
  TextInput, ScrollView, KeyboardAvoidingView,
  TouchableWithoutFeedback, Platform, Keyboard
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';


const schema = yup.object({
    workOwnershipDecision: yup.string().required(),
    dataOwnershipDecision: yup.string(),
    pIPRSecurity: yup.string().required(),
    bIPLRequired: yup.string().required(),
    programPub: yup.string().required(),

})
export default function Form3({addtoData3}){

    return(
        <View style={styles.container}>
            <Formik
            initialValues={{ 
                workOwnershipDecision: '', dataOwnershipDecision: '', 
                pIPRSecurity: '', bIPLRequired: '',
                programPub:'',
                
            }}
            validationSchema={schema}
            onSubmit={(values)=>{addtoData3(values)}}
            >
                {(props)=>(
                    
                    
                        <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.container}
                  >
                        
                        <ScrollView>
                        <TextInput 
                        multiline
                        style={styles.biginput}
                        placeholder='How will ownership of any work products or out be determined?'
                        placeholderTextColor='grey'
                        onChangeText={props.handleChange('workOwnershipDecision')}
                        value={props.values.workOwnershipDecision}
                        />
                        <Text style={{color:'red'}}>{props.touched.workOwnershipDecision && props.errors.workOwnershipDecision}</Text>


                        <TextInput 
                        multiline
                        style={styles.biginput}
                        placeholder='How will ownership of any data collected be determined?'
                        placeholderTextColor='grey'
                        onChangeText={props.handleChange('dataOwnershipDecision')}
                        value={props.values.dataOwnershipDecision}
                        />
                        <Text style={{color:'red'}}>{props.touched.dataOwnershipDecision && props.errors.dataOwnershipDecision}</Text>


                        <TextInput 
                        multiline
                        style={styles.biginput}
                        placeholder='How will potential IP rights be secured?'
                        placeholderTextColor='grey'
                        onChangeText={props.handleChange('pIPRSecurity')}
                        value={props.values.pIPRSecurity}
                        />
                        <Text style={{color:'red'}}>{props.touched.pIPRSecurity && props.errors.pIPRSecurity}</Text>


                        <TextInput 
                        multiline
                        style={styles.biginput}
                        placeholder='Are any background IP or licenses required for this project?'
                        placeholderTextColor='grey'
                        onChangeText={props.handleChange('bIPLRequired')}
                        value={props.values.bIPLRequired}
                        />
                        <Text style={{color:'red'}}>{props.touched.bIPLRequired && props.errors.bIPLRequired}</Text>


                        <TextInput 
                        multiline
                        style={styles.biginput}
                        placeholder='Will any publications result from the program?'
                        placeholderTextColor='grey'
                        onChangeText={props.handleChange('programPub')}
                        value={props.values.programPub}
                        />
                        <Text style={{color:'red'}}>{props.touched.programPub && props.errors.programPub}</Text>

                       

                        <Button
                        title='SAVE' color= 'black' onPress={props.handleSubmit}
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
        backgroundColor:'white',
        marginBottom: 5,
        marginTop : 10
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