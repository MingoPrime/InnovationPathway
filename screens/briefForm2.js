import React from 'react';
import {
    StyleSheet, Text, View, Button,
    TextInput, ScrollView, KeyboardAvoidingView,
    TouchableWithoutFeedback, Platform, Keyboard
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';


const schema = yup.object({
    riskCL: yup.string().required(),
    riskDesc: yup.string().required(),
    riskTreat: yup.string().required(),
    riskTDA: yup.string().required(),

})
export default function Form2({ addtoData2 }) {

    return (
        <View style={styles.container}>
            <Formik
                initialValues={{
                    riskCL: '', riskDesc: '',
                    riskTreat: '', riskTDA: '',
                }}
                validationSchema={schema}
                onSubmit={(values) => { addtoData2(values) }}
            >
                {(props) => (


                    <KeyboardAvoidingView
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                        style={styles.container}
                    >

                        <ScrollView>

                            <TextInput
                                multiline
                                style={styles.biginput}
                                placeholder='Risk Category & Level'
                                placeholderTextColor='grey'
                                onChangeText={props.handleChange('riskCL')}
                                value={props.values.riskCL}
                            />
                            <Text style={{ color: 'red' }}>{props.touched.riskCL && props.errors.riskCL}</Text>


                            <TextInput
                                multiline
                                style={styles.biginput}
                                placeholder='Risk Description'
                                placeholderTextColor='grey'
                                onChangeText={props.handleChange('riskDesc')}
                                value={props.values.riskDesc}
                            />
                            <Text style={{ color: 'red' }}>{props.touched.riskDesc && props.errors.riskDesc}</Text>


                            <TextInput
                                multiline
                                style={styles.biginput}
                                placeholder='Risk Treatment(eg. Accept, Mitigate...)'
                                placeholderTextColor='grey'
                                onChangeText={props.handleChange('riskTreat')}
                                value={props.values.riskTreat}
                            />
                            <Text style={{ color: 'red' }}>{props.touched.riskTreat && props.errors.riskTreat}</Text>


                            <TextInput
                                multiline
                                style={styles.biginput}
                                placeholder='Risk Treatment Description/Action'
                                placeholderTextColor='grey'
                                onChangeText={props.handleChange('riskTDA')}
                                value={props.values.riskTDA}
                            />
                            <Text style={{ color: 'red' }}>{props.touched.riskTDA && props.errors.riskTDA}</Text>


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