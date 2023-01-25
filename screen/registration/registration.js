import { useState, useEffect } from "react";
import {widthPercentageToDP as wp,heightPercentageToDP as hp,} from "react-native-responsive-screen";
import { StyleSheet, Text, View, Image } from "react-native";
import ButtonText2 from "../../components/btns/button3";
import { IntputField } from "../../components/inputs/input";
import { ButtonGoogle } from "../../components/btns/buttonGoogle";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {  useDispatch } from 'react-redux';
import {
  addCredentials,
} from './../../cache/userCredentials';
export const Registration = ({ navigation }) => {
  const dispatch = useDispatch();
  const [username, setusername] = useState("");
  const [firstname,setfirstname] = useState("")
  const [lastname,setlastname] = useState("")

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");

  let smallCase = false,
      upperCase = false,
      hasNumber = false,
      moreThanEight = false;

  const [warningColor, setwarningColor] = useState("#9D9D9D");
  const [warningColor2, setwarningColor2] = useState("#9D9D9D");

  const [warningColorEmail, setwarningColorEmail] = useState("#9D9D9D");
  const [warningColorPassword, setwarningColorPassword] = useState("#9D9D9D");
  const [warningColorConfirmPassword, setwarningColorConfirmPassword] = useState("#9D9D9D");

  const [warningEmail, setwarningEmail] = useState("");
  const [warningPass, setwarningPass] = useState("");
  const [warningConfirmPass, setwarningConfirmPass] = useState("");

  const [emailValid, setemailValid] = useState("false");
  const [passwordValid, setpasswordValid] = useState("false");
  const [confirmpasswordValid, setconfirmpasswordValid] = useState("false");

  //Username Validation
  useEffect(() => {
    if (firstname.match(/[a-z]/g) || firstname.match(/[A-Z]/g)) {
      setwarningColor("green");
    } else if (firstname == "") {
      setwarningColor("#9D9D9D");
    }
  }, [firstname]);

  useEffect(() => {
    if (lastname.match(/[a-z]/g) || lastname.match(/[A-Z]/g)) {
      setwarningColor2("green");
    } else if (lastname == "") {
      setwarningColor2("#9D9D9D");
    }
  }, [lastname]);

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
      setwarningColor("#9D9D9D");
      setwarningEmail("");
      setemailValid("false");
      setwarningColorEmail("#9D9D9D");
    } else {
      setemailValid("false");
      setwarningColorEmail("");
    }
  }, [email]);

  //Password Validation most have lowercase,uppercase,number and length is more than 8 characters
  useEffect(() => {


    //scanning password if it has small case character
    var lowerCaseLetters = /[a-z]/g;
    if (password.match(lowerCaseLetters)) {
      smallCase = true;
    } else {
      smallCase = false;
    }
    //scanning password if it has upper case character
    var upperCaseLetters = /[A-Z]/g;
    if (password.match(upperCaseLetters)) {
      upperCase = true;
    } else {
      upperCase = false;
    }
    //scanning password if it has a number 
    var numbers = /[0-9]/g;
    if (password.match(numbers)) {
      hasNumber = true;
    } else {
      upperCase = false;
    }
    //scanning password if it has lenght of greater than 7
    if (password.length >= 8) {
      moreThanEight = true;
    } else {
      moreThanEight = false;
    }

    //Validating the password validation to validate the validation of validated password,hahahaha
    if (
      smallCase == true &&
      upperCase == true &&
      hasNumber == true &&
      moreThanEight == true
    ) {
      setpasswordValid("true");
      setwarningPass("Valid Password");
      setwarningColorPassword("green");
    } else if (
      smallCase == false ||
      upperCase == false ||
      hasNumber == false ||
      moreThanEight == false
    ) {
      setwarningColorPassword("red");
      setwarningPass("Invalid Password");
      setpasswordValid("false");
    } else {
      setpasswordValid("false");
      setwarningPass("");
    }

    //if password is empty the whole iteration is back to default
    if (password ==""){
      setwarningPass("");
      setwarningColorPassword("#9D9D9D")
    }
  }, [password]);

  //Function of validation if password is equals to the value of confirm password
  useEffect(() => {
    if (password == confirmpassword && confirmpassword != "") {
      setwarningColorConfirmPassword("green");
      setconfirmpasswordValid("true");
      setwarningConfirmPass("Password Matched");
    } else if (confirmpassword == "") {
      setconfirmpasswordValid("false");
      setwarningColorConfirmPassword("#9D9D9D");
      setwarningConfirmPass("");
    } else {
      setconfirmpasswordValid("false");
      setwarningColorConfirmPassword("red");
      setwarningConfirmPass("Password not match");
    }
  }, [confirmpassword]);

  return (
    <KeyboardAwareScrollView
      style={{ height: hp(100), backgroundColor: "red", overflow: "hidden" }}>
      
      <View style={styles.container}>

        {/* Form Container */}
        <View style={styles.form}>

          <Text
            style={{
              fontSize: hp(6),
              fontWeight: "bold",
              color: "#454545",
              marginBottom: "10%",
            }}>
            Sign Up
          </Text>
         <View style={{flexDirection:"row",width:'100%'}}>
<IntputField
            label="First Name"
            placeholder="First Name"
            value={firstname}
            onChangeText={setfirstname}
            warningColor={warningColor}
          />
          <View style={{width:'2%'}}></View>
          <IntputField
            label="Last Name"
            placeholder="Last Name"
            value={lastname}
            onChangeText={setlastname}
            warningColor={warningColor2}
          />
         </View>
          

          <IntputField
            label="Email"
            placeholder="Email"
            value={email}
            onChangeText={setemail}
            warning={warningEmail}
            warningColor={warningColorEmail}/>

          <IntputField
            label="Password"
            placeholder="Password"
            onChangeText={setpassword}
            value={password}
            enablePass={true}
            warning={warningPass}
            warningColor={warningColorPassword}/>

          <IntputField
            label="Confirm Password"
            placeholder="Confirm Password"
            onChangeText={setconfirmpassword}
            value={confirmpassword}
            enablePass={true}
            warning={warningConfirmPass}
            warningColor={warningColorConfirmPassword}/>

          {/* This container contains the button*/}
          <View style={{ marginTop: "2%" }}>

            {/* Sign Up Button */}
            <ButtonText2
              backgroundColor="#fdb417"
              text="Sign Up"
              onPress={() => {
                if (
                  emailValid == "true" &&
                  passwordValid == "true" &&
                  confirmpasswordValid == "true" &&
                  firstname != "" && lastname != ""
                ) {
                  console.log("Login");
                  dispatch(addCredentials(
                    {
                      name: `${firstname} ${lastname}`,
                      email: email,
                      password: password,
                      username: username,
                    }
                  ))
                  navigation.navigate("Dashboard");
                  
                  setfirstname("");
                  setlastname("");
                  setpassword("");
                  setemail("")
                  setconfirmpassword("");

                  setwarningColor("#9D9D9D");
                  setwarningColor2("#9D9D9D");
                  setwarningColorEmail("#9D9D9D");
                  setwarningColorPassword("#9D9D9D");
                  setwarningColorConfirmPassword("#9D9D9D");
                } else if (
                  firstname =="" ||
                  lastname == ""  ||
                  email == "" ||
                  password == "" ||
                  confirmpassword == ""
                ) {
                  setwarningColor("red");
                  setwarningColor2("red");
                  setwarningColorEmail("red");
                  setwarningColorPassword("red");
                  setwarningColorConfirmPassword("red");
                }

                if(username != ""){
                  setwarningColor("green");
                }
                if(emailValid == "true"){
                  setwarningColorEmail("green");
                }if(passwordValid == "true"){
                  setwarningColorPassword("green");
                }if(confirmpasswordValid == "true" ){
                  setwarningColorConfirmPassword("green");
                }
              }}/>
            </View>
            
            
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: "2%",
              }}>

              <Text style={{ fontSize: 12, color: "#878787" }}>Or</Text>

              <ButtonGoogle />

              <Text style={{ fontSize: 12, color: "#878787", marginTop: "2%" }}>
                Already have an Account ?{" "}
                <Text
                style={{ fontWeight: "bold", color: "#3C4387" }}
                onPress={() => {
                  navigation.navigate("Login");
                }}>
                Sign In
                </Text>

              </Text>
            </View>
        </View>

        {/* This view container is for the clouds */}
        <View
          style={{
            position: "absolute",
            bottom: 0,
            zIndex: -1,
            justifyContent: "center",
            alignItems: "center",
          }}>
            <Image style={{
                transform: [{ translateY: hp(20) }, { scale: 1.5 }],
                height: hp(43),
                width: wp(100),
                resizeMode: "contain"}}

              source={require("../../assets/img/cloud_1.png")}
              />
          </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp(105),
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  form: {
    justifyContent: "center",
    marginTop: hp(7),
    width: wp(70),
  },
});