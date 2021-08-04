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
import { Form5, Form6, Form7, Form8, Form9 } from './briefForm5';



export default function Form4({ addtoData4 }) {

    const [modalOpen5, setModalOpen5] = useState(false);
    const addtoData5 = () => { setModalOpen5(false) };
    const [modalOpen6, setModalOpen6] = useState(false);
    const addtoData6 = () => { setModalOpen6(false) };
    const [modalOpen7, setModalOpen7] = useState(false);
    const addtoData7 = () => { setModalOpen7(false) };
    const [modalOpen8, setModalOpen8] = useState(false);
    const addtoData8 = () => { setModalOpen8(false) };
    const [modalOpen9, setModalOpen9] = useState(false);
    const addtoData9 = () => { setModalOpen9(false) };

    return (
        <View style={styles.container}>

            <ScrollView>


                <Modal visible={modalOpen5} animationType='slide'>
                    <View style={styles.modalContent}>
                        <Ionicons
                            name='close'
                            size={24}
                            onPress={() => setModalOpen5(false)}
                            style={styles.modalToggle}
                        />
                        <Form5 addtoData5={addtoData5} />
                    </View>
                </Modal>
                <View style={{ flexDirection: 'row', marginTop: 8, alignSelf: 'center' }}>
                    <Text style={{ color: 'black', marginTop: 13, marginRight: 5, fontWeight: 'bold', fontSize: 20 }}>OneRegistry </Text>
                    <Ionicons
                        name='add'
                        size={24}
                        onPress={() => setModalOpen5(true)}
                        style={styles.modalToggle}
                    />
                </View>


                <Modal visible={modalOpen6} animationType='slide'>
                    <View style={styles.modalContent}>
                        <Ionicons
                            name='close'
                            size={24}
                            onPress={() => setModalOpen6(false)}
                            style={styles.modalToggle}
                        />
                        <Form6 addtoData6={addtoData6} />
                    </View>
                </Modal>
                <View style={{ flexDirection: 'row', marginTop: 8, alignSelf: 'center' }}>
                    <Text style={{ color: 'black', marginTop: 13, marginRight: 5, fontWeight: 'bold', fontSize: 20 }}>FUSE        </Text>
                    <Ionicons
                        name='add'
                        size={24}
                        onPress={() => setModalOpen6(true)}
                        style={styles.modalToggle}
                    />
                </View>


                <Modal visible={modalOpen7} animationType='slide'>
                    <View style={styles.modalContent}>
                        <Ionicons
                            name='close'
                            size={24}
                            onPress={() => setModalOpen7(false)}
                            style={styles.modalToggle}
                        />
                        <Form7 addtoData7={addtoData7} />
                    </View>
                </Modal>
                <View style={{ flexDirection: 'row', marginTop: 8, alignSelf: 'center' }}>
                    <Text style={{ color: 'black', marginTop: 13, marginRight: 5, fontWeight: 'bold', fontSize: 20 }}>P3 Tool        </Text>
                    <Ionicons
                        name='add'
                        size={24}
                        onPress={() => setModalOpen7(true)}
                        style={styles.modalToggle}
                    />
                </View>


                <Modal visible={modalOpen8} animationType='slide'>
                    <View style={styles.modalContent}>
                        <Ionicons
                            name='close'
                            size={24}
                            onPress={() => setModalOpen8(false)}
                            style={styles.modalToggle}
                        />
                        <Form8 addtoData8={addtoData8} />
                    </View>
                </Modal>
                <View style={{ flexDirection: 'row', marginTop: 8, alignSelf: 'center' }}>
                    <Text style={{ color: 'black', marginTop: 13, marginRight: 5, fontWeight: 'bold', fontSize: 20 }}>Engage     </Text>
                    <Ionicons
                        name='add'
                        size={24}
                        onPress={() => setModalOpen8(true)}
                        style={styles.modalToggle}
                    />
                </View>


                <Modal visible={modalOpen9} animationType='slide'>
                    <View style={styles.modalContent}>
                        <Ionicons
                            name='close'
                            size={24}
                            onPress={() => setModalOpen9(false)}
                            style={styles.modalToggle}
                        />
                        <Form9 addtoData9={addtoData9} />
                    </View>
                </Modal>
                <View style={{ flexDirection: 'row', marginTop: 8, alignSelf: 'center' }}>
                    <Text style={{ color: 'black', marginTop: 13, marginRight: 5, fontWeight: 'bold', fontSize: 20 }}>eHLCCD      </Text>
                    <Ionicons
                        name='add'
                        size={24}
                        onPress={() => setModalOpen9(true)}
                        style={styles.modalToggle}
                    />
                </View>
            </ScrollView>

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

}
);