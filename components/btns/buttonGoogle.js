import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
export const ButtonGoogle= (props) => { 

    return (
      <View style={styles.container}>
        
        <TouchableOpacity style={styles.button} onPress={()=>{
          console.log("Google")
        }}>
          <Image style={{height:hp(2),width:wp(4)}} source={require("../../assets/img/googleIcon.png")}/>
          <Text style={{marginLeft:15,fontWeight:"bold"}}>Google</Text>
        </TouchableOpacity>
        
      </View>
    );

}

const styles = StyleSheet.create({
  container: {
 
  
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:10,

  },
  button: {
   
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:"row",
    padding: 15,
    backgroundColor:"white",
    borderWidth:1,
    width:wp(30),
    borderRadius:30,
    marginBottom: 20,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 80,
    shadowOpacity: 0.35,
  },
});