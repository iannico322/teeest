import React from 'react';
import { View, TouchableHighlight,Text} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
export const ButtonProfile= (props) => { 
  // props.onPress   - for the pressing event
  // props.imageSource  - set the image source of the btn

    return (
      <View >
        <TouchableHighlight  underlayColor="#DDDDDD" onPress={props.onPress}  style={{height:hp(5),width:wp(20),backgroundColor:props.backgroundColor,alignItems:"center",justifyContent:"center",borderRadius:hp(1)}} >
            <Text style={{color:props.color,fontWeight:"bold"}}>{props.text}</Text>
        </TouchableHighlight>
      </View>
    );

}

