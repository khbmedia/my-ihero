import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Login from "./Login"
import Register from "./Register"
import ForgotPassword from "./ForgotPassword"
import ResetPassword from "./ResetPassword"
import VerifyAccount from "./VerifyAccount" 
import Profile from '../Profile/Dashboard';
const AuthStack = createStackNavigator();
const Auth= () => {
    return (
        <AuthStack.Navigator headerMode='none'>
            <AuthStack.Screen name="Login" component={Login}  options={{header:() =>null}} />
            <AuthStack.Screen name="Register" component={Register}   options={{header:() =>null}} />
            <AuthStack.Screen name="ForgotPassword" component={ForgotPassword}  options={{header:() =>null}}  />
            <AuthStack.Screen name="ResetPassword" component={ResetPassword}  options={{header:() =>null}}  />
            <AuthStack.Screen name="VerifyAccount" component={VerifyAccount}   options={{header:() =>null}} /> 
            <AuthStack.Screen name="Profile" component={Profile}   options={{header:() =>null}} /> 
        </AuthStack.Navigator>
    )
    
}
export default Auth;