import React from 'react';
import { 
  StyleSheet, Text, View, Image, Linking 
} from 'react-native';

export default function Card(props){
    return(
        <View style={StyleSheet.card}>
            <View style={StyleSheet.cardContent}>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card : {
        borderRadius: 6,
        elevation:3,
        backgroundColor:'white',
        shadowOffset:{width: 1, height:1},
        shadowColor: 'grey',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal:4,
        marginVertical: 6,
    },
    cardContent:{
         marginHorizontal: 18,
         marginVertical:10
    }
})