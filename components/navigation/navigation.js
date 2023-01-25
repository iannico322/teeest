import React from 'react'
import { Text, View,StyleSheet, TouchableHighlight,Image } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
export const Navigation = (props) => {
  const Inputs = StyleSheet.create({
    main:{
    
      
 
      position: "absolute",
 
        height:hp(9),
      
        borderWidth: 1,
        borderColor:"rgba(0, 0, 0, 0.255)",
       bottom:0,
       width:"100%",
      
    
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

        color:"rgb(255, 187, 0)",
        backgroundColor:"rgb(239, 239, 239)",
        alignItems:"center",
        justifyContent:"space-around",

        flexDirection:"row"
        

        
      
    }})
    
      
  



  return (
    <View style={Inputs.main} pointerEvents="auto">
      <TouchableHighlight underlayColor="" activeOpacity={.5} onPress={props.onPressHome}>
        <Image style={{height:hp(4),width:wp(10),resizeMode:"contain"}} source={props.homeICON} />
      </TouchableHighlight>
      <TouchableHighlight underlayColor="" activeOpacity={.5} onPress={props.onPressHome}>
        <Image style={{marginBottom:hp(6),transform:[{scale:.9}],height:hp(10),width:wp(19),resizeMode:"contain"}} source={require('../../assets/img/search.png')} />
        </TouchableHighlight>
        <TouchableHighlight underlayColor="" activeOpacity={.5} onPress={props.onPressProfile}>
          <Image style={{height:hp(4),width:wp(10),resizeMode:"contain"}} source={props.profileICON} />
        </TouchableHighlight>
     
    </View>
  )
}

