import React from 'react'
import { Text, View,StyleSheet, TextInput } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
export const IntputField = (props) => {
  const Inputs = StyleSheet.create({
    //// Usable props
  // props.onChangeText  - for the changing the text event
  // props.placeholder - Set placeholder [string]
  // props.enablePass  - Enable password mode [true/false]
  // props.value - Set the value of input
  // props.warning - set the text content of warning
  // props.warningColor - set warning color of the input

    main:{
        marginBottom:0,
        minWidth:'50%',
    },
    input:{
       

        borderWidth: 1,
       
        paddingTop:10,
        paddingLeft:10,
        paddingBottom:10,
        fontSize: hp(2.4),
        borderRadius:5,
        borderColor : props.warningColor,
      
  


    },warning:{
        color:props.warningColor,
        fontSize : hp(2)
    }


})



  return (
    <View style={Inputs.main}>
        <Text style={{marginBottom:5,fontSize:hp(2)}}>{props.label}</Text>
        
        <TextInput 
         style={Inputs.input}
         value ={props.value}
         placeholder={props.placeholder}
         secureTextEntry={props.enablePass}
         onChangeText = {props.onChangeText}
         
          />
        <Text style={Inputs.warning}>{props.warning}</Text>
    </View>
  )
}

