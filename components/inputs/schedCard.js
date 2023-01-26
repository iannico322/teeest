import React from 'react'
import { Image, Text, View,TouchableHighlight } from 'react-native'
import EventICON from './../../assets/img/sched-pic.png'
import PointLoc from './../../assets/img/point.png'

const SchedCard = (props) => {
  return (
    <View style={{height:50,width:"100%",backgroundColor:"white",alignItems:"center",justifyContent:"center",borderBottomWidth:.2}}>
        <View style={{flexDirection:"row",alignItems:"center"}}>
          <Image
          source={EventICON}
          style={{height:30,width:30}}
          />
          <View style={{width:"60%",marginLeft:"5%",overflow:"hidden"}}>
            <Text style={{color:"#fdb417"}}>{props.title}</Text>
            <Text style={{color:"gray",fontSize:10}}>{`Today  ${props.time}`}</Text>
          </View>

          <TouchableHighlight
          activeOpacity={.5}
          underlayColor="none"
          onPress={props.onPress}
          >
          <Image
          source={PointLoc}
          style={{height:20,width:20,resizeMode:"contain",marginRight:"2%"}}
          />
          </TouchableHighlight>
        </View>
        </View>
  )
}

export default SchedCard