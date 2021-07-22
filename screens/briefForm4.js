import React from 'react';
import { 
  StyleSheet, Text, View, Button,
  TextInput, ScrollView, KeyboardAvoidingView,
  TouchableWithoutFeedback, Platform, Keyboard
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';


const schema = yup.object({
    programDescription: yup.string().required().min(10),
    expectedStartDate: yup.date().required(),
    expectedEndDate: yup.date().required(),
    expectedFuseSub: yup.date().required(),
    expectedPaabSub: yup.date(),
    additionalMilestone: yup.string(),
    endProductDesc: yup.string().required().min(15),
    moneyTing: yup.string().required(),

})
export default function Form1({addtoData1}){

    return(
        <View style={styles.container}>
            <Formik
            initialValues={{ 
                programDescription: '', expectedStartDate: '', 
                expectedEndDate: '', expectedFuseSub: '',
                expectedPaabSub:'',
                additionalMilestone:'', endProductDesc:'',
                moneyTing:'',
            }}
            validationSchema={schema}
            onSubmit={(values)=>{addtoData1(values)}}
            >
                {(props)=>(
                    
                    
                        <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.container}
                  >
                        
                        <ScrollView>
                        <TextInput 
                        multiline
                        style={styles.input}
                        placeholder='Program Description'
                        placeholderTextColor='grey'
                        onChangeText={props.handleChange('programDescription')}
                        value={props.values.programDescription}
                        />
                        <Text style={{color:'red'}}>{props.touched.programDescription && props.errors.programDescription}</Text>


                        <TextInput 
                        style={styles.input}
                        keyboardType='numeric'
                        placeholder='Expected Start Date'
                        placeholderTextColor='grey'
                        onChangeText={props.handleChange('expectedStartDate')}
                        value={props.values.expectedStartDate}
                        />
                        <Text style={{color:'red'}}>{props.touched.expectedStartDate && props.errors.expectedStartDate}</Text>

                        
                        <TextInput style={styles.input}
                        placeholder='Expected End Date'
                        placeholderTextColor='grey'
                        onChangeText={props.handleChange('expectedEndDate')}
                        value={props.values.expectedEndDate}
                        />
                        <Text style={{color:'red'}}>{props.touched.expectedEndDate && props.errors.expectedEndDate}</Text>


                        <TextInput style={styles.input}
                        placeholder='Expected FUSE submission date'
                        placeholderTextColor='grey'
                        onChangeText={props.handleChange('expectedFuseSub')}
                        value={props.values.expectedFuseSub}
                        />
                        <Text style={{color:'red'}}>{props.touched.expectedFuseSub && props.errors.expectedFuseSub}</Text>


                        <TextInput style={styles.input}
                        placeholder='Expected PAAB/ASC submission dates'
                        placeholderTextColor='grey'
                        onChangeText={props.handleChange('expectedPaabSub')}
                        value={props.values.expectedPaabSub}
                        />
                        <Text style={{color:'red'}}>{props.touched.expectedPaabSub && props.errors.expectedPaabSub}</Text>


                        <TextInput style={styles.input}
                        multiline
                        placeholder='Defined Milestones'
                        placeholderTextColor='grey'
                        onChangeText={props.handleChange('additionalMilestone')}
                        value={props.values.additionalMilestone}
                        />
                        <Text style={{color:'red'}}>{props.touched.additionalMilestone && props.errors.additionalMilestone}</Text>


                        <TextInput style={styles.input}
                        placeholder='Intended Audiences - KPIs - Metric for success'
                        placeholderTextColor='grey'
                        onChangeText={props.handleChange('endProductDesc')}
                        value={props.values.endProductDesc}
                        />
                        <Text style={{color:'red'}}>{props.touched.endProductDesc && props.errors.endProductDesc}</Text>


                        <TextInput style={styles.input}
                        placeholder='Program Cost & Stakeholder Information'
                        placeholderTextColor='grey'
                        onChangeText={props.handleChange('moneyTing')}
                        value={props.values.moneyTing}
                        />
                        <Text style={{color:'red'}}>{props.touched.moneyTing && props.errors.moneyTing}</Text>


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