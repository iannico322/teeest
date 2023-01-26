import React, { useEffect, useState } from "react";
import moment from "moment";
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import XIcon from "./../../assets/img/x2.png";
import { useSelector, useDispatch } from "react-redux";
import { logout, addSchedule } from "../../cache/userSchedules";
import { Navigation } from "../../components/navigation/navigation";
import { IntputField } from "../../components/inputs/input";
import ModalDropdown from "react-native-modal-dropdown";
import { addSearch } from "../../cache/userSearch";

import DateTimePickerModal from "react-native-modal-datetime-picker";
const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const credentials = useSelector((state) => state.user.value);
  const schedules = useSelector((state) => state.sched.value);
  const [show, setShow] = useState("none");

  const data = [
    { key: "1", value: "SUN" },
    { key: "2", value: "MON" },
    { key: "3", value: "TUE" },
    { key: "4", value: "WED" },
    { key: "5", value: "THU" },
    { key: "6", value: "FRI" },
    { key: "7", value: "SAT" },
  ];

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [selectedday, setSelectedday] = useState("");
  const [timeStart, setTimeStart] = useState("00:00 AM");
  const [timeEnd, setTimeEnd] = useState("00:00 AM");
  const [isStartTimeVisible, setStartTimeVisibility] = useState(false);
  const [isEndTimeVisible, setEndTimeVisibility] = useState(false);

  const showStartTimePicker = () => {
    setStartTimeVisibility(true);
  };

  const hideStartTimePicker = () => {
    setStartTimeVisibility(false);
  };

  const handleConfirm = (time) => {
    setTimeStart(time);
    const timeCo = moment(time);
    setTimeStart(timeCo.format("h:mm A"));
    hideStartTimePicker();
  };

  const showEndTimePicker = () => {
    setEndTimeVisibility(true);
  };

  const hideEndTimePicker = () => {
    setEndTimeVisibility(false);
  };

  const handleConfirm2 = (time) => {
    setTimeEnd(time);
    const timeCo = moment(time);
    setTimeEnd(timeCo.format("h:mm A"));
    hideEndTimePicker();
  };

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      {/* Form - kyle */}
      <View
        style={{
          display: show,
          height: hp(100),
          width: wp(100),
          position: "absolute",
          zIndex: 9,
          backgroundColor: "rgba(214, 214, 214, 0.7)",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            height: "60%",
            width: "90%",
            backgroundColor: "white",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{ height: "90%", width: "80%", backgroundColor: "white" }}
          >
            <View
              style={{
                flexDirection: "row",
                height: "7%",
                width: "100%",
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "#202231" }}
              >
                Set Schedule
              </Text>

              <TouchableHighlight
                activeOpacity={0.5}
                underlayColor="none"
                onPress={() => {
                  setShow("none");
                }}
              >
                <Image source={XIcon} style={{ height: 30, width: 30 }} />
              </TouchableHighlight>
            </View>

            <View>
              <IntputField
                label="Schedule Name"
                placeholder="Schedule Name"
                value={title}
                onChangeText={setTitle}
                // warning={warning}
                // warningColor={warningColor}
              />

              <IntputField
                label="Location"
                placeholder="Location"
                value={location}
                onChangeText={setLocation}
                // warning={warning}
                // warningColor={warningColor}
              />
              <ModalDropdown
                defaultValue="Select Day"
                options={["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]}
                textStyle={{ fontSize: 16 }}
                onSelect={setSelectedday}
                dropdownStyle={{ width: "80%" }}
                dropdownTextStyle={{ borderColor: "gray", borderWidth: 0.3 }}
                style={{
                  width: "100%",
                  borderWidth: 0.9,
                  paddingTop: 10,
                  paddingBottom: 10,
                  borderRadius: 5,
                }}
              />

              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Text
                    style={{ fontSize: 20, paddingVertical: 10 }}
                  >{`${timeStart}`}</Text>
                  <Button
                    title="Set Time Start"
                    onPress={showStartTimePicker}
                  />

                  <DateTimePickerModal
                    isVisible={isStartTimeVisible}
                    mode="time"
                    onConfirm={handleConfirm}
                    onCancel={hideStartTimePicker}
                  />
                </View>
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Text
                    style={{ fontSize: 20, paddingVertical: 10 }}
                  >{`${timeEnd}`}</Text>
                  <Button title="Set Time End" onPress={showEndTimePicker} />

                  <DateTimePickerModal
                    isVisible={isEndTimeVisible}
                    mode="time"
                    onConfirm={handleConfirm2}
                    onCancel={hideEndTimePicker}
                  />
                </View>
              </View>
              <View
                style={{
                  width: "100%",
                  height: "30%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TouchableHighlight
                  style={{
                    height: 60,
                    width: 90,
                    backgroundColor: "#fcb040",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 4,
                  }}
                  activeOpacity={0.5}
                  underlayColor="none"
                  onPress={() => {
                    dispatch(
                      addSchedule({
                        title: title,
                        location: location,
                        day: `${
                          ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][
                            selectedday
                          ]
                        }`,
                        time: `${timeStart} -${timeEnd} `,
                      })
                    );
                    setTitle("");
                    setLocation("");
                    setSelectedday("");
                    setTimeStart("00:00 AM");
                    setTimeEnd("00:00 AM");
                    setShow("none");
                  }}
                >
                  <Text
                    style={{
                      color: "#ffffff",
                      fontSize: 16,
                      textAlign: "center",
                    }}
                  >
                    Set Schedule
                  </Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Form - kyle */}
      <View
        style={{
          position: "absolute",
          zIndex: 2,
          bottom: 0,

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
      <ScrollView>
        <View
          style={{
            position: "relative",
            minHeight: hp(100),
            width: wp(100),
            marginBottom: 60,
          }}
        >
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
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 20,
              }}
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

              <View style={{ marginLeft: 10, width: "42%" }}>
                <Text
                  style={{ fontSize: 30, fontWeight: "bold", color: "#212121" }}
                >
                  {credentials.name.slice(0, 8)}
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    color: "#fdb417",
                    transform: [{ translateY: -4 }],
                  }}
                >
                  {credentials.email.slice(0, 19)}
                </Text>
              </View>
              <View>
                <TouchableHighlight
                  style={{
                    marginLeft: "10%",
                    height: 35,
                    width: 70,
                    backgroundColor: "#fdb417",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                  }}
                  onPress={() => {
                    console.log("logout");
                    dispatch(addSearch({}));
                    dispatch(logout());
                    navigation.navigate("Login");
                  }}
                >
                  <Text style={{ color: "white" }}>Log Out</Text>
                </TouchableHighlight>
              </View>
            </View>

            <View
              style={{
                minHeight: 0,
                width: "100%",
                alignItems: "center",
                borderTopWidth: 0.8,
              }}
            >
              <View
                style={{
                  width: "90%",
                  backgroundColor: "#fec76f",
                  borderRadius: 13,
                  marginTop: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 19,
                    fontWeight: "bold",
                    padding: 10,
                    color: "#626262",
                  }}
                >
                  {" "}
                  Set Schedule ▼{" "}
                </Text>
              </View>

              <View
                style={{
                  width: "90%",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
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
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 20,
                  }}
                  onPress={() => {
                    setShow("flex");
                  }}
                >
                  <Text style={{ fontSize: 80, color: "white" }}>+</Text>
                </TouchableHighlight>

                {schedules.map((e, key) => (
                  <TouchableHighlight
                    key={key}
                    activeOpacity={0.5}
                    underlayColor="none"
                    onPress={() => {
                      console.log("heheh");
                      dispatch(
                        addSearch({
                          buildingID: "9",
                          room: `${e.title}  | ${e.location}`,
                          floor: e.day,
                          block: e.time,
                        })
                      );
                      navigation.navigate("Dashboard");
                    }}
                  >
                    <View
                      style={{
                        height: 140,
                        width: 140,
                        backgroundColor: "#f0f0f0",
                        margin: 10,
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 20,
                        overflow: "hidden",
                        borderWidth: 1,
                        borderColor: "#626262",
                      }}
                    >
                      <View
                        style={{
                          alignItems: "center",
                          height: "20%",
                          width: "100%",
                          justifyContent: "center",
                          backgroundColor: "#fdb417",
                        }}
                      >
                        <Text style={{ fontSize: 13, color: "#f0f0f0" }}>
                          {e.title}
                        </Text>
                      </View>

                      <View
                        style={{
                          alignItems: "center",
                          height: "60%",
                          justifyContent: "center",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 20,
                            color: "#626262",
                            textAlign: "center",
                          }}
                        >
                          {e.location}
                        </Text>
                      </View>

                      <View
                        style={{
                          height: "20%",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                          transform: [{ translateY: -5 }],
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 12,
                            color: "#626262",
                            fontWeight: "bold",
                            marginRight: "3%",
                          }}
                        >
                          {e.day}
                        </Text>
                        <Text style={{ fontSize: 10, color: "#626262" }}>
                          {e.time}
                        </Text>
                      </View>
                    </View>
                  </TouchableHighlight>
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
