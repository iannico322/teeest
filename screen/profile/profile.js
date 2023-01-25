import React, { useEffect, useState } from "react";

import { Image, SafeAreaView, ScrollView,StatusBar, Text, TouchableHighlight, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import XIcon from './../../assets/img/x2.png'
import { useSelector,useDispatch} from "react-redux";
import { addSchedule } from "../../cache/userSchedules";
import { Navigation } from "../../components/navigation/navigation";
import { IntputField } from "../../components/inputs/input";
import ModalDropdown from 'react-native-modal-dropdown';

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const credentials = useSelector((state)=>state.user.value);
  const schedules = useSelector((state) => state.sched.value)
  const [show,setShow] = useState("none")
  const [selected, setSelected] = React.useState("");
  const data = [
    {key:'1', value:'SUN'},
    {key:'2', value:'MON'},
    {key:'3', value:'TUE'},
    {key:'4', value:'WED'},
    {key:'5', value:'THU'},
    {key:'6', value: 'FRI'},
    {key:'7', value:'SAT'},
]


useEffect(()=>{
  console.log(selected)
},[selected])
  return (
    <SafeAreaView style={{ flex: 1,
      paddingTop: StatusBar.currentHeight,}}>
       

       <View style={{display:show,height:hp(100),width:wp(100),position: "absolute",zIndex:9,backgroundColor:"rgba(214, 214, 214, 0.7)",alignItems:"center",justifyContent:"center"}}>
          <View style={{height:"80%",width:"90%",backgroundColor:"white",borderRadius:10,alignItems:"center",justifyContent:"center"}}>
              <View style={{height:"98%",width:"90%",backgroundColor:"white"}}>
                
                <View style={{flexDirection:"row",height:"7%",width:"100%", backgroundColor:"white",alignItems:"center",justifyContent:"space-between"}}>
                          
                          <Text style={{fontSize:20,fontWeight:"bold",color:"#202231"}}>Set Schedule</Text>
                          
                          <TouchableHighlight
                                          activeOpacity={.5}
                                          underlayColor="none"
                                          onPress={()=>{setShow("none")}}
                                          
                                          >
                                            <Image
                                            source={XIcon}
                                            style={{height:30,width:30}}
                                            />
                                          </TouchableHighlight>
                </View>

                <View>
                    <IntputField
                      label="Schedule Name"
                      placeholder="Schedule Name"
                      // value={email}
                      // onChangeText={setemail}
                      // warning={warning}
                      // warningColor={warningColor}
                      />

                              <IntputField
                                label="Location"
                                placeholder="Location"
                                // value={email}
                                // onChangeText={setemail}
                                // warning={warning}
                                // warningColor={warningColor}
                                />
                 <ModalDropdown
                    defaultValue='Adopt now'
                    options={['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']}

                    value={setSelected}
                    textStyle={{  fontSize:16}}
                    onSelect={setSelected}
                    dropdownStyle={{width:"80%"}}
                    dropdownTextStyle={{borderColor:"gray",borderWidth:.3}}
                    style={{width:"100%",borderWidth:.9,paddingTop:10,paddingBottom:10,borderRadius:5}}
                  
                  />
                                      <TouchableHighlight
                                      style={{height:30,width:50,backgroundColor:"gray",alignItems:"center",justifyContent:"center",borderRadius:4}}
                                          activeOpacity={.5}
                                          underlayColor="none"
                                          onPress={()=>{dispatch(addSchedule({
                                            "title": " Mag Study ",
                                            "location": "Library",
                                            "day": "WED",
                                            "time": "7:00am - 9:00am",
                                          }))
                                          setShow("none")
                                        
                                        }}
                                          
                                          >
                                            <Text style={{color:"#ffffff"}}>Set</Text>
                                          </TouchableHighlight>
                    

                </View>
               
              </View>

          </View>
       </View>
      <View
          style={{
            position: "absolute",
            zIndex: 2,
            bottom:0,
           
            width: "100%",
            pointEvents: "none",
          }}
        >
          <Navigation
            onPressProfile={() => {
              navigation.navigate("Profile");
            }}
            onPressHome={() => {
              navigation.navigate("Dashboard");
            }}
            homeICON={require("../../assets/img/home-icon.png")}
            profileICON={require("../../assets/img/profile-icon-active.png")}
          />
        </View>
    <ScrollView >
      
      <View style={{position:"relative",minHeight:hp(100), width: wp(100),marginBottom:60}}>
        
        <View
          style={{
            position: "relative",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            height: "40%",
          }}
        >
          <Image
            style={{ height: 150, width: "100%", resizeMode: "cover" }}
            source={require("./../../assets/img/r5.jpg")}
          />

          {/* profile text */}
          <View
            style={{ flexDirection: "row", alignItems: "center", padding: 20 }}
          >
            <Image
              style={{
                height: 100,
                width: 100,
                resizeMode: "cover",
                borderRadius: 100,
                borderWidth: 4,
                borderColor: "#2374e1",
              }}
              source={require("./../../assets/img/profile-pic.jpg")}
            />

            <View style={{ marginLeft: 10 }}>
              <Text
                style={{ fontSize: 30, fontWeight: "bold", color: "#212121" }}
              >
               {credentials.name.slice(0,8)}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "#fdb417",
                  transform: [{ translateY: -10 }],
                }}
              >
               @ {credentials.email.slice(0,15)}
              </Text>
            </View>
            <View>
                <TouchableHighlight style={{marginLeft:"10%",height:35,width:70,backgroundColor:"#fdb417",alignItems:"center",justifyContent:"center",borderRadius:10}}
                onPress={()=>{console.log("logout")
                navigation.navigate("Login");
              }}
                >
                    <Text style={{color:"white"}}>Log Out</Text>
                </TouchableHighlight>
            </View>
          </View>

          <View
            style={{
              minHeight: 0,
              width: "100%",
              alignItems: "center",
              borderTopWidth:.8,
             
            }}
          >
            <View style={{width:"90%",backgroundColor:"#fec76f",borderRadius:13,marginTop:10}}>
               <Text style={{fontSize:19,fontWeight:"bold",padding:10,color:"#626262"}}> Set Schedule ▼  </Text>
            </View>
           
            <View
              style={{
                width: "90%",
                flexDirection: "row",
                justifyContent: "flex-start",alignItems:"center",
                flexWrap: "wrap",
                gap: 10,
              }}
            >
              <TouchableHighlight
                style={{
                  height: 140,
                  width: 140,
                  backgroundColor: "#bababa",
                  margin: 10,
                  alignItems:"center",justifyContent:"center",borderRadius:20
                }}
                onPress={()=>{
                  setShow("flex")
                  
                  }}
              >
                <Text style={{fontSize:80,color:"white"}}>+</Text>
              </TouchableHighlight>
                
              {schedules.map((e,key)=>(

                    <View
                    key={key}
                    style={{
                      height: 140,
                      width: 140,
                      backgroundColor: "#f0f0f0",
                      margin: 10,
                      alignItems:"center",justifyContent:"center",borderRadius:20,overflow:"hidden",
                      borderWidth:1,borderColor:"#626262"
                    }}
                    onPress={()=>{console.log("set Sched")}}
                    >
                      <View style={{alignItems:"center",height:"20%",width:"100%",justifyContent:"center",backgroundColor:"#fdb417"}}>
                         <Text style={{fontSize:13,color:"#f0f0f0"}}>{e.title}</Text>
                      </View>
                   
                    
                    <View style={{alignItems:"center",height:"60%",justifyContent:"center"}}>
                      <Text style={{fontSize:20,color:"#626262",textAlign:"center"}}>{ e.location}</Text>
                    </View>
                     


                      <View style={{height:"20%",flexDirection:"row",justifyContent:"center",alignItems:"center",transform:[{translateY:-5}]}}>

                        <Text style={{fontSize:12,color:"#626262",fontWeight:"bold",marginRight:"3%"}}>{ e.day}</Text>
                        <Text style={{fontSize:10,color:"#626262"}}>{ e.time}</Text>
                      </View>
                    
                    </View>
              ))}
             
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;