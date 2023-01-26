import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from "./screen/login/login";
import { Registration } from "./screen/registration/registration";
import { OTP } from "./screen/forgot_password/otp_verification";
import { ForgotPassword } from "./screen/forgot_password/forgotPassword";
import { Dashboard } from "./screen/dashboard/dashboard";
import { MainScreen } from './screen/main_screen/mainscreen';
import Profile from './screen/profile/profile';

import store from "./cache/store";
import { Provider } from "react-redux";

export default function App() {
  //College Cheetah Inc.

  const Stack = createNativeStackNavigator();

  return (

    <Provider store={store}>
     
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false,customAnimationOnGesture:true,animation:"slide_from_right"} }name="Profile" component={Profile} />
      <Stack.Screen options={{ headerShown: false ,customAnimationOnGesture:true,animation:"slide_from_right"} }  name="MainScreen" component={MainScreen} /> 
        
      <Stack.Screen options={{ headerShown: false ,customAnimationOnGesture:true,animation:"slide_from_bottom"} } name="Login" component={LoginPage} />
     
        <Stack.Screen options={{ headerShown: false,customAnimationOnGesture:true,animation:"slide_from_right"} }name="Dashboard" component={Dashboard} />
        
        <Stack.Screen options={{ headerShown: false ,customAnimationOnGesture:true,animation:"slide_from_bottom"} } name="Registration" component={Registration} />
        
        <Stack.Screen options={{ headerShown: false ,customAnimationOnGesture:true,animation:"slide_from_right"} }  name="OTP" component={OTP} /> 
        <Stack.Screen options={{ headerShown: false ,customAnimationOnGesture:true,animation:"slide_from_right"} }  name="ForgotPassword" component={ForgotPassword} /> 

      </Stack.Navigator>
  </NavigationContainer>
  
  </Provider>
  );
}
