import React, { useEffect, useState } from 'react'
import { View ,Image, Text} from 'react-native'
import { Animated , StyleSheet} from 'react-native'
import LocIcon from './../../assets/img/location-icon.png'
import { useSelector} from "react-redux";
const Map = (props) => {
    const [buildingName , setBuildingName] = useState("")
    const [coordinates , setCoordinates] = useState([1000,0])
    const search = useSelector((state)=>state.search.value);
    useEffect(()=>{
        switch (search.buildingID) {
            case "3":
                setBuildingName("Integrated Technology Building")
                setCoordinates([160,-47])
                break;

            case "4":
                setBuildingName("ROTC Building")
                setCoordinates([148,-30])
                break;
            case "5":
                setBuildingName("Old Engineering Building")
                setCoordinates([96,-22])
                break;
            case "5":
                setBuildingName("Old Engineering Building")
                setCoordinates([96,-22])
                break;
            case "9":
                setBuildingName("CITC Building")
                setCoordinates([70,-56])
               
                break;
            case "14":
                setBuildingName("Finance and Accounting Building")
                setCoordinates([-4,-40])
                break;
            case "16":
                setBuildingName("DRER Memorial Hall ")
                setCoordinates([-4,-25])
                break;
            case "19":
                setBuildingName("Science Centrum Building")
                setCoordinates([84,7])
                break;
            case "20":
                setBuildingName("Cafeteria")
                setCoordinates([51,7])
                break;              

            case "23":
                setBuildingName("LRC")
                setCoordinates([-114,-47]) 
                break;
            case "24":
                setBuildingName("Food Trade Building")
                setCoordinates([-158,-20])
                break;
            case "25":
                setBuildingName("Food Innovation Center")
                setCoordinates([-98,-30])
                break;
            case "28":
                setBuildingName("Old Science Building")
                setCoordinates([-99,-19])
                break;
            case "36":
                setBuildingName("Old Student Center")
                setCoordinates([-190,-7])
                break;
            case "41":
                setBuildingName("Old Science Building")
                setCoordinates([-83,-13])
                break;
            case "41":
                setBuildingName("Old Science Building")
                setCoordinates([-83,-13])
                break;          
        
        
            default:
                setBuildingName("")
                setCoordinates([1007,-66])
                break;
        }
    },[search.buildingID])

    
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
                <Text style={{position:"absolute",top:0,fontSize:16, marginTop:5,fontWeight:"bold"}}>{search.room }</Text>
                <Text style={{position:"absolute",bottom:0,fontSize:10, marginTop:0,color:"gray",backgroundColor:"yellow",paddingLeft:2}}>{`${buildingName} - ${search.floor} : ${search.block} `}</Text>
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