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

export default function BriefScreen3() {
    const navigation = useNavigation();
    const [isSelected, setSelection] = useState(false);

    return (
        <View style={styles.container}>
            <ScrollView>
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
                        <Text style={styles.label, { padding: 8, width: 270 }}>
                            Will any personal information be collected,
                            used or shared (disclosed or accessed, including for hosting purposes),
                            including info potentially collected via "Contact Us" feature or free text feature?
                        </Text>
                    </View>
                </Card>
                {!isSelected ? <Text style={{ alignSelf: 'center', fontWeight: 'bold' }}>Which type of personal information ?</Text> : null}
                {!isSelected ? <TextInput
                    multiline
                    style={styles.input, {
                        alignSelf: 'center',
                        backgroundColor: 'white', borderRadius: 3,
                        borderWidth: 3, borderColor: 'black', height: 40, width: 380
                    }}
                    placeholder='  eg. patients, consumers, HCPs, others'
                    placeholderTextColor="grey"
                /> : null}

                {!isSelected ? <Text style={{ alignSelf: 'center', fontWeight: 'bold' }}>ISRM data classification ?</Text> : null}
                {!isSelected ? <TextInput
                    multiline
                    style={styles.input, {
                        alignSelf: 'center',
                        backgroundColor: 'white', borderRadius: 3,
                        borderWidth: 3, borderColor: 'black', height: 40, width: 380
                    }}
                    placeholder='  Why?'
                    placeholderTextColor="grey"
                /> : null}

                {!isSelected ? <Text style={{ alignSelf: 'center', fontWeight: 'bold' }}>Which data points are collected ?</Text> : null}
                {!isSelected ? <TextInput
                    multiline
                    style={styles.input, {
                        alignSelf: 'center',
                        backgroundColor: 'white', borderRadius: 3,
                        borderWidth: 3, borderColor: 'black', height: 40, width: 380
                    }}
                    placeholder='  eg. name, health information, other'
                    placeholderTextColor="grey"
                /> : null}

                {!isSelected ? <Text style={{ alignSelf: 'center', fontWeight: 'bold' , width:330}}>Who will have access to personal information and why?</Text> : null}
                {!isSelected ? <TextInput
                    multiline
                    style={styles.biginput, {
                        alignSelf: 'center',
                        backgroundColor: 'white', borderRadius: 3,
                        borderWidth: 3, borderColor: 'black', height: 40, width: 380
                    }}
                    placeholder='  Internal and External - third party service provider'
                    placeholderTextColor="grey"
                /> : null}

                {!isSelected ? <Text style={{ alignSelf: 'center', fontWeight: 'bold' , width:330}}>Has an electronic privacy agreement (EPA) been completed</Text> : null}
                {!isSelected ? <TextInput
                    multiline
                    style={styles.biginput, {
                        alignSelf: 'center',
                        backgroundColor: 'white', borderRadius: 3,
                        borderWidth: 3, borderColor: 'black', height: 40, width: 380
                    }}
                    placeholder='...'
                    placeholderTextColor="grey"
                /> : null}

                {!isSelected ? <Text style={{ alignSelf: 'center', fontWeight: 'bold' , width:330}}>Will proper clauses be in place regarding Data Privacy concerns?</Text> : null}
                {!isSelected ? <TextInput
                    multiline
                    style={styles.biginput, {
                        alignSelf: 'center',
                        backgroundColor: 'white', borderRadius: 3,
                        borderWidth: 3, borderColor: 'black', height: 40, width: 380
                    }}
                    placeholder='...'
                    placeholderTextColor="grey"
                /> : null}

                {!isSelected ? <Text style={{ alignSelf: 'center', fontWeight: 'bold', width:330}}>Any other relevant information on handling of personal information?</Text> : null}
                {!isSelected ? <TextInput
                    multiline
                    style={styles.biginput, {
                        alignSelf: 'center',
                        backgroundColor: 'white', borderRadius: 3,
                        borderWidth: 3, borderColor: 'black', height: 100, width: 380, marginBottom:10
                    }}
                    placeholder='  Anything Else?'
                    placeholderTextColor="grey"
                    textAlignVertical="top"
                /> : <TouchableOpacity style={{
                    alignSelf: 'center',
                    backgroundColor: 'green', borderRadius: 3, borderWidth: 3,
                    borderColor: 'green', marginBottom: 30, marginTop: 10, width: 200
                  }}
                    onPress={() => navigation.navigate("File Upload")}>
                    <Text style={{ alignSelf: 'center' }}>Submit</Text></TouchableOpacity>}
                    

                    {!isSelected ? <TouchableOpacity style={{
                    alignSelf: 'center',
                    backgroundColor: 'green', borderRadius: 3, borderWidth: 3,
                    borderColor: 'green', marginBottom: 30, marginTop: 10, width: 200
                  }}
                    onPress={() => navigation.navigate("File Upload")}>
                    <Text style={{ alignSelf: 'center' }}>Submit</Text></TouchableOpacity>: null}


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