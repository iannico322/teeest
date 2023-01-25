import { useState, useEffect } from "react";
import {widthPercentageToDP as wp,heightPercentageToDP as hp,} from "react-native-responsive-screen";
import { StyleSheet, Text, View, Image } from "react-native";
import ButtonText2 from "../../components/btns/button3";
import { IntputField } from "../../components/inputs/input";




import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const OTP = ({ navigation }) => {
    const [btntext,setbtntext ] = useState("Send Code")

    const [show,setshow ] = useState("none")

    
    const [email, setemail] = useState("");
    const [otp, setotp] = useState("");

    const [warningColorEmail, setwarningColorEmail] = useState("#9D9D9D");
    const [warningEmail, setwarningEmail] = useState("");
    const [emailValid, setemailValid] = useState("false");

   //Email Validation
  useEffect(() => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setemailValid("true");
      setwarningEmail("Valid Email");
      setwarningColorEmail("green");
    } else if (email.match(/[a-z]/g) || email.match(/[A-Z]/g)) {
      setemailValid("false");
      setwarningEmail("Invalid Email");
      setwarningColorEmail("red");
    } else if (email == "") {

      setwarningEmail("");
      setemailValid("false");
      setwarningColorEmail("#9D9D9D");
    } else {
      setemailValid("false");
      setwarningColorEmail("");
    }
  }, [email]);




  function sendOTP(){
    if (
        emailValid == "true" 
      ) {
    
       setbtntext("Confirm")
       setshow("flex")
    }

    if (otp.match(/[a-z]/g) || otp.match(/[A-Z]/g) || otp.match(/[1-10]/g)){
      navigation.navigate("ForgotPassword")
      setshow("none")
      setbtntext("Send Code")
      setotp("")
      setemail("")
  }
    
    }
    

  return (
    <KeyboardAwareScrollView style={{ height: hp(100), backgroundColor: "white", overflow: "hidden" }}>
      
      <View style={styles.container}>
      <View
          style={{
            
            bottom: 0,
            zIndex: 2,
            justifyContent: "center",
            alignItems: "center",
          }}>
            <Image style={{
                transform: [{ translateY: hp(-10) }, { scale: 4 }],
                height: hp(10),
                width: wp(100),
                resizeMode: "contain"}}

              source={require("../../assets/img/cloud_1.png")}
              />
          </View>


        <View style={styles.form}>

          <Text
            style={{
              fontSize: hp(6),
              fontWeight: "bold",
              color: "#454545",
              marginBottom: "10%",
            }}>
            Forgot Password
          </Text>

          

          <IntputField
            label="Email"
            placeholder="Email"
            onChangeText={setemail}
            value={email}
            warning={warningEmail}
            warningColor={warningColorEmail}/>

            <View style={{display:show}}>

                <IntputField
                label="OTP"
                placeholder="OTP"
                onChangeText={setotp}
                keyboardType="Numeric"
                maxLength={7}
                value={otp}
                warningColor="#9D9D9D"

            />
                </View>

         
          <View style={{ marginTop: "2%" }}>

            
            <ButtonText2
              backgroundColor="#fdb417"
              text={btntext}
              onPress={() => {
                    sendOTP()
              }}/>
            </View>
            
            
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: "20%",
         
                bottom:0
              }}>
          
            </View>
        </View>
       
       
        
      </View>
        
     
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp(100),
 
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  form: {
    justifyContent: "flex-start",
    marginTop: hp(7),
    width: wp(70),

  },
});