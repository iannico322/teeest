import React from 'react';
import { Text, View, TouchableHighlight} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
export const ButtonZoom= (props) => { 
  // props.onPress   - for the pressing event
  // props.imageSource  - set the image source of the btn

    return (
      <View >
        <TouchableHighlight style={{height:hp(5.5),width:wp(11),justifyContent:"center",alignItems:"center",backgroundColor:"#2a2b2e",borderRadius:10}}
        onPress={props.onPress}
        
        ><Text style={{fontSize:17,color:"white"}}>{props.text}</Text></TouchableHighlight>
      </View>
    );

}
