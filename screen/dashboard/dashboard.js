import React, { useEffect, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  StyleSheet,
  View,
  Image
} from "react-native";
import { SearchField } from "../../components/inputs/search";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Navigation } from "../../components/navigation/navigation";
import { Map2d } from "../../components/map/map";

import Map3d from "./map";

import Draggable from 'react-native-draggable';
import Calendar from "./calendar";
export const Dashboard = ({ navigation }) => {




  const [buildingSearch, setBuildingSearch] = useState("");
  const [roomSearch, setRoomSearch] = useState("");
  const [roomfloor, setRoomfloor] = useState("");
  const [roomblock, setRoomblock] = useState("");




  const updateQueryBuilding = (newQuery) => {
    setBuildingSearch(newQuery);
  };

  const updateQueryRoom = (newQuery) => {
    setRoomSearch(newQuery);
  };

  const updateQueryFloor = (newQuery) => {
    setRoomfloor(newQuery);
  };

  const updateQueryBlock = (newQuery) => {
    setRoomblock(newQuery);
  };








  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: "white",
      minHeight: hp(100),
      margin: 0,
      overflow:"hidden"
    },
    nav: {
      position: "absolute",
      zIndex: 10,
      bottom:0,
      alignItems: "flex-end",
      width: "100%",
      pointEvents:"none"
    },

    screen1: {
      position: "relative",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      width: wp(100),
      overflow: "hidden",
    },
    boxFor3dMap: {
      height: "40%",
      width:"100%",

      justifyContent: "center",
      alignItems:"center"
    },
  });

  return (
    <KeyboardAwareScrollView style={{ height: hp(100) }}>
      <View style={{position:"absolute",height:hp(35),width:wp(100),zIndex:10,alignItems:"flex-start",justifyContent:"flex-end"}}>
        <Calendar/>
      </View>
       
      <View style={styles.container}>
      
          <View style={styles.nav} >
            <Navigation
           
              onPressProfile={() => {
                navigation.navigate("Profile");
              }}
              onPressHome={() => {
                navigation.navigate("Dashboard");
              }}
              homeICON = {require('../../assets/img/home-icon-active.png')}
              profileICON = {require('../../assets/img/profile-icon.png')}
            />
          </View>
        <View style={styles.screen1}>
         
          <View
            style={{
              justifyContent: "center",
              zIndex: 2,
              width: "100%",
              position: "absolute",
              top: 0,
              marginTop: hp(30),
              height:hp(0),
              justifyContent: "center",
              alignItems: "center",
              backgroundColor:"green"
            }}
          >
            

            <View style={{ justifyContent: "center", width: "80%" ,marginTop:"20%"}}>
              <SearchField
                placeholder="Search"

                onBuilding={updateQueryBuilding}
                onRoom={updateQueryRoom}
                onFloor={updateQueryFloor}
                onBlock={updateQueryBlock}
                
              />
            </View>
          </View>

          <Image
            pointerEvents="none"
            style={{
              transform: [{ translateX: -80 }, { translateY: -160 }],
              zIndex: 1,
              position: "absolute",
            }}
            source={require("../../assets/img/cloud_medium.png")}
          />

          <Image
          pointerEvents="none"
            style={{
              transform: [{ translateX: 130 }, { translateY: -60 }],
              zIndex: 1,
              position: "absolute",
            }}
            source={require("../../assets/img/cloud_small.png")}
          />

          <View style={styles.boxFor3dMap}>
          <Draggable  x={wp(10)} y={hp(20)} 
           maxX={wp(180)}
            renderColor='white'>
            <View>
             
              <Map3d 
              building = {buildingSearch}
              search = {roomSearch}
              floor ={roomfloor}
              block = {roomblock}
              />
            
            </View>
            </Draggable>
            
          </View>

          <View
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              marginBottom: "10%",
              justifyContent: "center",
              alignContent: "center",
              flexDirection: "column",
            }}
          >
            <Map2d
              ZoomOutPress={() => {
                ZoomOut();
              }}
              ZoomInPress={() => {
                ZoomIn();
              }}
              StreetViewPress={() => {
                console.log("street View");
              }}
              RotatePress={() => {
                console.log("rotate");
              }}
            />
          </View>
        </View>
        </View>
    </KeyboardAwareScrollView>
  );
};
