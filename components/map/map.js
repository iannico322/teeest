import React from "react";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { View, Image, TouchableHighlight, Text } from "react-native";
import { ButtonZoom } from "../../components/btns/buttonZoom";
import { ButtonImageForMap } from "../../components/btns/buttonForMap";
import Draggable from "react-native-draggable";
export const Map2d = (props) => {
  return (
    <View
      style={{
        justifyContent: "flex-end",
        alignItems: "flex-end",
        flexDirection: "column",
        marginBottom: hp(5),
        marginRight: wp(2),
      }}
    >
      <View
        style={{
          flexDirection: "row",
          marginBottom: 5,
          width: wp(26),

          justifyContent: "flex-end",
        }}
      >
        <View>
          <TouchableHighlight
            style={{
              height: hp(5),
              width: wp(11),
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#2a2b2e",
              borderTopLeftRadius: 7,
              borderBottomStartRadius: 7,
            }}
            onPress={props.ZoomOutPress}
          >
            <Text style={{ fontSize: 17, color: "white" }}>-</Text>
          </TouchableHighlight>
        </View>

        <View>
          <TouchableHighlight
            style={{
              height: hp(5),
              width: wp(11),
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#2a2b2e",
              borderTopRightRadius: 7,
              borderBottomEndRadius: 7,
            }}
            onPress={props.ZoomInPress}
          >
            <Text style={{ fontSize: 17, color: "white" }}>+</Text>
          </TouchableHighlight>
        </View>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-end",
          }}
        >
          <ButtonImageForMap
            onPress={props.StreetViewPress}
            imageSource={require("./../../assets/button-icon/human.png")}
          />

          <ButtonImageForMap
            onPress={props.RotatePress}
            imageSource={require("./../../assets/button-icon/compas.png")}
          />
        </View>
        <View
          style={{
            height: hp(15),
            width: wp(27),
            resizeMode: "contain",
            borderWidth: 2,
            borderRadius: 5,
            borderColor: "#272727",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <Draggable x={-200} y={-260} maxX={500} maxY={400}>
            <Image
              style={{ height: 400, width: 500, resizeMode: "contain" }}
              source={require("../../assets/img/2dmapc.jpg")}
            />
          </Draggable>
        </View>
      </View>
    </View>
  );
};
