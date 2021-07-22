import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Header() {

    return (
        <View style={styles.header}>
            <Text style={styles.title}> The Innovator's App</Text>
        </View> 
    )
}
const styles = StyleSheet.create({
    header:{
        height:'100%',
        width: '100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    
    },
    title: {
        textAlign: 'center',
        color: '#333',
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing:1,

    }
})