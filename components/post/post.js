import React from 'react'
import { View,Image,Text } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

export const Post = (props) => {
  return (
    <View style={{ width: wp(90), height: hp(25)}}>
                <View
                  style={{
                    width: "40%",
                    
                    height: "20%",
                    marginBottom: "3%",alignItems:"center",justifyContent:"flex-start",flexDirection:"row",
                    
                  }}>

                <Image
                  style={{
                    height: hp(4.7),
                    width: hp(4.7),
                    borderRadius: hp(100),
                    borderColor: "#1780fd",
                    borderWidth: 2}}
                  source={require("../../assets/img/profile-pic.jpg")}/>

                    <View style={{marginLeft:'3%'}}>
                        <Text>Nicolas Yan</Text>
                        <Text style={{fontSize:hp(1.2),color:"#9b9b9b"}}>{props.delay }</Text>
                    </View>

                  </View>
                <View
                  style={{
                    width: "100%",
                    backgroundColor: props.backgroundColor,
                   
                    justifyContent:"center"

                  }}
                >

                    <Text style={{fontSize:hp(3),margin:'5%',fontWeight:"bold"}}>{props.post}</Text>
                </View>
              </View>
  )
}
