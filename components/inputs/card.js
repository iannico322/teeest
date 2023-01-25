import React from 'react'
import { Text, View ,StyleSheet, TouchableOpacity, TouchableHighlight} from 'react-native'

const Card = (props) => {
    const style = StyleSheet.create({
        card:{
           
            
            position:"relative",
            minHeight:40,
            boxSizing:"border-box",
            justifyContent:"center",
            backgroundColor:"#ECECEC",
            borderWidth:.5,
            borderColor:"#979797",
            borderRadius:4
           
        },
        text:{
            margin:0,
            marginLeft:"2%",
            minHeight:0
          
        }
        
    })


  return (
    <TouchableHighlight activeOpacity={0.6}
    underlayColor="#DDDDDD"
    onPress={props.onPress} style={style.card}>
<Text
        style={style.text}
        >{props.text}</Text>
    </TouchableHighlight>
   
        
        

  )
}

export default Card