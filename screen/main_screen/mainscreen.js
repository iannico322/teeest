import React from "react";
import {widthPercentageToDP as wp,heightPercentageToDP as hp } from "react-native-responsive-screen";
import { StyleSheet, Animated, View, Image, Text, Easing } from "react-native";
import { ButtonImage } from "../../components/btns/button1";
import { ButtonText } from "../../components/btns/button2";
export const MainScreen = ({ navigation }) => {
  const cloudTransition = new Animated.Value(hp(15)); 
  const boxTransition = new Animated.Value(hp(-25)); 
  const visibility = new Animated.Value(0);
  

  //Scroll up function
  const travelTop = () => {
    Animated.timing(cloudTransition, {
      toValue: hp(-75),
      duration: 1200,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();

    Animated.timing(visibility, {
      toValue: 100,
      duration: 8000,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();

    Animated.timing(boxTransition, {
      toValue: hp(43),
      duration: 1200,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

  const styles = StyleSheet.create({
    container: {
      width: wp(100),
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "white",
    },

    //This layer render above the default layer
    layer2: {
      width: wp(100),
      position: "absolute",
      alignItems: "center",
      justifyContent: "center",
      bottom: 0,
      transform: [{ translateY: cloudTransition }],
      zIndex: 2,
    },
    box: {
      width: wp(100),
      height: hp(100),
      alignItems: "center",
      justifyContent: "flex-start",
      transform: [{ translateY: boxTransition }],
    },
  });

  return (
    <View style={styles.container}>


      <Animated.View style={styles.box}>
        <Animated.View
        
          style={{
            opacity: visibility,
            marginBottom: hp(15),
            justifyContent: "center",
            alignItems: "center",
            width: wp(80),
            height: hp(28),
          }}>
          <Text style={{ fontSize: hp(6), fontWeight: "bold", color: "#454545" }}>
            Sign In
          </Text>

          <View
            style={{
              height: hp(24),
              marginTop: hp(2),
              justifyContent: "space-around",
              alignItems: "center",
            }} >
            <ButtonText
              backgroundColor="#fdb417"
              fontSize={17}
              Text="Student"
              onPress={() => {
                navigation.navigate("Login");
              }}/>

            <Image
              style={{ height: hp(3), width: wp(35), resizeMode: "contain" }}
              source={require("../../assets/img/or.png")}
            />

            <ButtonText
              backgroundColor="#585858"
              fontSize={17}
              Text="I'm a guest"
              onPress={() => {
                navigation.navigate("Guest");
              }}
            />
          </View>

          <Image
            style={{
              marginVertical: hp(5),
              height: hp(8),
              width: wp(8),
              resizeMode: "contain",
            }}
            source={require("../../assets/img/circlelabel1.png")}
          />
        </Animated.View>

        <Image
        pointerEvents="none"
          style={{
            transform: [{ scale: 0.6 }, { translateY: -90 }],
            margin: 0,
            height: hp(22),
            width: wp(100),
          }}
          source={require("../../assets/img/welcome.jpg")}
        />
        <Image
        pointerEvents="none"
          style={{
            transform: [{ translateY: -hp(5)},{scale:1.7}],
            height: hp(30),
            width: wp(100),
            resizeMode: "contain",
          }}
          source={require("../../assets/img/map-demo.png")}
        />

        <Image
        pointerEvents="none"
          style={{
            transform: [{ translateY: -hp(10) }],
            height: hp(8),
            width: wp(8),
            resizeMode: "contain",
          }}
          source={require("../../assets/img/circlelabel.png")}
        />
      </Animated.View>
      <Animated.View style={styles.layer2}>

        <ButtonImage
          onPress={() => {
            travelTop();
          }}
          imageSource={require("../../assets/img/next-btn.png")}
        />

        <Image
        pointerEvents="none"
          style={{
            transform: [{ scale: 1.5 }],
            height: hp(43),
            width: wp(100),
            resizeMode: "contain",
          }}
          source={require("../../assets/img/cloud_1.png")}
        />
      </Animated.View>
    </View>
  );
};
