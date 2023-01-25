import { useState, useEffect } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StyleSheet, Text, View, Image } from "react-native";
import ButtonText2 from "../../components/btns/button3";
import { IntputField } from "../../components/inputs/input";
import { ButtonGoogle } from "../../components/btns/buttonGoogle";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {  useDispatch } from 'react-redux';
import {
  addCredentials,
} from './../../cache/userCredentials';
export default function LoginPage({navigation}) {
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [validEmail,setvalidEmail] = useState("false");
  const [validpassword,setvalidpassword] = useState("false");


  const [warning, setwarning] = useState("");
  const [warningColor, setwarningColor] = useState("#9D9D9D");

  const [warning2, setwarning2] = useState("");
  const [warningColor2, setwarningColor2] = useState("#9D9D9D");


  //if password is empty, the whole iteration goes to default state\

  useEffect(() => {
    if (email== "") {
      setwarning("");
      setvalidEmail("false")
      setwarningColor("#9D9D9D");
    } else if (email!= "") {
      setwarning("");
      setvalidEmail("false")
      setwarningColor("#9D9D9D");
    }
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
      setwarningColor("green");
      setwarning("Valid Email");
      setvalidEmail("true")
    }
  }, [email]);

  useEffect(() => {
    if (password == "") {
      setvalidpassword("false")
      setwarning2("");
      setwarningColor2("#9D9D9D");
    } else if (password != "") {
      setwarning2("");
      setwarningColor2("green");
      setvalidpassword("true")
    }
  }, [password]);

  //Sign In Validation
  function SignIn(){
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    ) {
      setvalidEmail("true")
    } else if(email== "") {
      setvalidEmail("false")
      setwarning("Type some letter");
      setwarningColor("red");
    } else {
      setvalidEmail("false")
      setwarning("Invalid Email");
      setwarningColor("red");
    }
  

    if (password !=""){
      setwarningColor2("green");
      setvalidpassword("true")
      setwarning2("");
    }else if (password== "") {
      setwarning2("Type some letter");

      setwarningColor2("red");
    } else {

      setwarning2("Invalid Credentials");
      setwarningColor2("red");
    }


    if (
      validEmail == "true" &&
      validpassword == "true"
    ) {
      console.log("Login");
      dispatch(addCredentials(
        {
          name: `${email}`,
          email: email,
          password: password,
          username: email,
        }
      ))
      navigation.navigate("Dashboard");
      setwarningColor("#9D9D9D");
      setemail("");
      setpassword("");
    } 



  }

  return (
    <KeyboardAwareScrollView style={{ backgroundColor: "white",height:hp(100) }}>
      <View style={styles.container}>


        {/* This container  is for the clouds and other pa choy2x   */}
        <View style={{top: 0,zIndex: 2,justifyContent: "center",alignItems: "center",
            height:hp(50),
            marginTop:hp(-26)}}>

          <Image
            style={{
              transform: [
                {translateX:wp(25)},
                {translateY:hp(0)},
                { scale: 1.5 },
              ],
              height: hp(43),
              width: wp(100),
              resizeMode: "contain",}}
            source={require("../../assets/img/cloud_1.png")}/>

          <Image
            style={{
              bottom: 0,
              zIndex: 3,
              position:"absolute",
              height: hp(10),
              width: wp(55),
              resizeMode: "contain",
              marginBottom:"5%"}}
            source={require("../../assets/img/umap-logo.png")}/>
        </View>


        {/* This View container is for form */}
        <View style={styles.form}>
          
          <Text
            style={{
              fontSize: 45,
              fontWeight: "bold",
              color: "#454545",
              marginBottom: '5%',}}>

            Sign In
          </Text>


          <IntputField
            label="Email"
            placeholder="Email"
            value={email}
            onChangeText={setemail}
            warning={warning}
            warningColor={warningColor}/>

          <IntputField
            label="Password"
            placeholder="Password"
            onChangeText={setpassword}
            value={password}
            enablePass={true}
            warning={warning2}
            warningColor={warningColor2}
          />


          <View style={{ alignItems: "flex-end" }}>
            <Text
              style={{
                fontSize: 16,
                color: "#878787",
                transform: [{ translateY: -18 }],
                
              }}
              onPress={()=>{
                navigation.navigate("OTP");
              }}
              >
              Forget password?
            </Text>
          </View>

          <ButtonText2
            backgroundColor="#fdb417"
            text="Sign In"
            onPress={() => {
              SignIn()
            }}/>

          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 10,
            }}>

            <Text style={{ fontSize: 12, color: "#878787" }}>Or</Text>

            <ButtonGoogle />
            
            <Text style={{ fontSize: 12, color: "#878787", marginTop: "10%" }}>
              Dont have an Account ?{" "}
              <Text
                style={{ fontWeight: "bold", color: "#3C4387" }}
                onPress={() => {
                  navigation.navigate("Registration");
                }}>
                Create new one
              </Text>
            </Text>
          </View>
        </View>
        
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: hp(100),
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: "white",
  },
  form: {
    justifyContent: "center",
    width: wp(70),
  },
});