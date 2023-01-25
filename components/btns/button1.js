import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
export const ButtonImage= (props) => { 
  // props.onPress   - for the pressing event
  // props.imageSource  - set the image source of the btn

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
          <Image style={{height:hp(4),width:wp(8),resizeMode:"contain"}} source={props.imageSource}/>
        </TouchableOpacity>
      </View>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  
    position:"absolute",
    zIndex:2,
    top:hp(8)
    
  },
  button: {
    backgroundColor: '#626262',
    borderRadius: 80,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 80,
    shadowOpacity: 0.35,
  },
});