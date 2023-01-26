import React, { useEffect, useState } from 'react'
import { View ,Image, Text} from 'react-native'
import { Animated , StyleSheet} from 'react-native'
import LocIcon from './../../assets/img/location-icon.png'

const Map = (props) => {
    const [buildingName , setBuildingName] = useState("")
    const [coordinates , setCoordinates] = useState([1000,0])
    useEffect(()=>{
        switch (props.building) {
            case "9":
                setBuildingName("CICT Building")
                setCoordinates([70,-56])
                
                
                break;    
            case "23":
                setBuildingName("LRC")
                   setCoordinates([-114,-47]) 
                break;
            
        
            default:
                setBuildingName("")
                setCoordinates([1007,-66])
                break;
        }
    },[props.building])

    
    const style = StyleSheet.create({
        map3d:{
            transform: [
              { scale: 3.4 },
              
            ],
      
            height: 150,
            width: 300,
            resizeMode: "contain",
          },


        locCon:{

            position:"absolute",
            zIndex: 8,
            flexDirection:"row",
            transform:[{translateX:coordinates[0]},{translateY:coordinates[1]}]

        },
       locIcon:{

          height: 50,
            width: 50,
        resizeMode: "contain",
       }   
    })

  return (
    <View style={{alignItems:"center",justifyContent:"center"}}>
    <Animated.View style={style.locCon}>
        <Image
        style={style.locIcon}
        source={LocIcon}
        />
        <View style={{height:38,justifyContent:"center",alignItems:"center",marginLeft:-8}}>
            <View>
                <Text style={{position:"absolute",top:0,fontSize:16, marginTop:5,fontWeight:"bold"}}>{props.search }</Text>
                <Text style={{position:"absolute",bottom:0,fontSize:10, marginTop:0,color:"gray",backgroundColor:"yellow",paddingLeft:2}}>{`${buildingName} - ${props.floor} : ${props.block} `}</Text>
            </View>
        </View>
        
    </Animated.View>
    <Image
        style={style.map3d}
                source={require("../../assets/img/map-demo.png")}
    />
    </View>
  )
}

export default Map