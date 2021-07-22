import React from 'react';
import { 
  StyleSheet, Text, View, Image, Linking 
} from 'react-native';

export default function about(){

  return(
    <View style={{backgroundColor:'#61739e', flex:1}}>
      <Text style={{fontSize: 30}}>
        More information to be added later
      </Text>
      <Text style={styles.hyperlink} onPress={()=>Linking.openURL('https://go/PNI')}>
         - Protecting Novartis Information Guideline
      </Text>
      <Text style={styles.hyperlink} onPress={()=>Linking.openURL('https://go/CLASSIFY')}>
        - Understanding Novartis Document Confidentiality Classifications
      </Text>
      <Text style={styles.hyperlink} onPress={()=>Linking.openURL('https://go/GRRS')}>
        - Global Records Retention Schedule
      </Text>
      <Text style={styles.hyperlink} onPress={()=>Linking.openURL('https://go/HLCCD')}>
        - eClassification tool
      </Text>
  
    </View>
  );
};

const styles = StyleSheet.create({
  hyperlink:{
      color: '#088FFA',
      fontWeight: 'bold',
      fontStyle:'italic',
      textDecorationLine:'underline',
      textDecorationColor:'#088FFA'
  }
}
)