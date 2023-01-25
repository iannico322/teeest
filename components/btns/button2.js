import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
export const ButtonText= (props) => { 

const styles = StyleSheet.create({
  //// Usable props
  // props.onPress   - for the pressing event
  // props.fontSize  - Set the font size of the button
  // props.Text      - Assign text content of the button
  // props.backgroundColor - Set the background Color of the button

  button: {
    backgroundColor: props.backgroundColor,
    borderRadius: 80,
    padding: 0,

    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 80,
    shadowOpacity: 0.35,
    width:wp(50),
    height:hp(8),
    justifyContent:"center",
    alignItems:"center"
  },
});
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
          <Text style={{fontSize:props.fontSize,color:"white",fontWeight:"bold"}}>{props.Text}</Text>
        </TouchableOpacity>
      </View>
    );

}
