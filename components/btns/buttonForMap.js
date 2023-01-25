import React from 'react';
import { StyleSheet,View, TouchableHighlight, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
export const ButtonImageForMap= (props) => { 
  // props.onPress   - for the pressing event
  // props.imageSource  - set the image source of the btn

    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.button} onPress={props.onPress}>
          <Image style={{height:hp(3),width:wp(5.6),resizeMode:"contain"}} source={props.imageSource}/>
        </TouchableHighlight>
      </View>
    );

}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2a2b2e',
    borderRadius: 80,
    padding: 9,
    marginBottom: 10,
    marginTop:5,
    marginRight:5
   
  },
});