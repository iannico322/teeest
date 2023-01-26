import React, { useEffect, useState } from 'react'
import { Text, View,StyleSheet, TextInput,Image, TouchableHighlight } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import {rooms} from "./rooms"
import Card from './card'
import Xbtn from './../../assets/img/x.png'
import Ybtn from './../../assets/img/Magnifier.png'
import {  useDispatch } from 'react-redux';
import { addSearch } from '../../cache/userSearch'
export const SearchField = (props) => {
  const dispatch = useDispatch();
  const [show,setshow] = useState("none")
  const [sel ,setsel] = useState(false)
  const [query, setQuery] = useState(''); // state to hold the search query
 
  const [imageSrc, setimage] = useState(Ybtn); // state to hold the temporary query when hovering over a suggestion
  

  
  
  
 

 

  useEffect(()=>{
   
    if(query != ""){
      setshow("flex")
    }else{
      setshow("none")
    }
    
    if(sel === true){
      setshow("none")
      setsel(false)
    }
    
   
  },[query])
  const Inputs = StyleSheet.create({
    main:{
    
      
       
      
        width:"100%",
        flexDirection:"column",
      
    },
    inputcon:{
      display:"flex",
      position:"relative",
      marginTop:20,
      
        width:"100%",
        height:hp(7.4),
      
        borderWidth: 2,
       
        paddingTop:10,
        paddingLeft:10,
        
        paddingBottom:10,
        fontSize: 25,
        borderRadius:10,
        fontWeight:"bold",
        
        borderColor : "#404040",
        color:"#493636",
        
        flexDirection:"row",
        justifyContent:"flex-end",
        alignItems:"center"
        
        

        
    },
    input:{

       marginLeft:10,
       position:"absolute",
        fontSize: 23,
      
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center",
        color:"#493636",
        height:"100%",
        width:"84%",
        transform:[{translateX:-43}],
        
        
    },warning:{
        color:props.warningColor
    },

    
})



  return (
    <View style={Inputs.main}>

      <View  style={Inputs.inputcon}>


        
        <TextInput 
         style={Inputs.input}
         value ={query}
         placeholder={props.placeholder}
         secureTextEntry={props.enablePass}
         onChangeText = {setQuery}
         
          />


        <TouchableHighlight 
        underlayColor="none"
        onPress={()=>{
          setQuery("")
          setimage(Ybtn)
          dispatch(addSearch(
            {
              "buildingID":"1000",
              "room": "",
              "floor": "",
              "block": "",
            }
          ))



        }}style={{position:"relative",marginRight:"4%",height:"120%",width:"12%",resizeMode:"contain"}}
        >
           <Image 
        style={{height:"100%",width:"100%"}}
        source={imageSrc} />

        </TouchableHighlight>
       
    </View>

  
    
      <View style={{position:"relative",display:show,padding: 2,}}>
          
          {
            rooms.filter(e=>e.roomName.toLowerCase().startsWith(query.toLowerCase()) || e.roomName.toLowerCase().includes(query.toLowerCase())).slice(0,7).map((e,key)=>(
              <Card 
              key={key}
              text = {e.roomName}
              onPress = {()=>{setQuery(e.roomName)
            
              setshow("none")
              setsel(true)
              setimage(Xbtn)
              console.log(`${e.buildingNumber} 3`)

              dispatch(addSearch(
                {
                  "buildingID":e.buildingNumber,
                  "room": e.roomName,
                  "floor": `F ${e.floorNumber}`,
                  "block": `B ${e.blockNumber}`,
                }
              ))
            }}
              />
          ))
        
          }
      </View>
      
    </View>
    
  )
}

