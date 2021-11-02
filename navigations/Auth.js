import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import ForgotPassword from "../screens/auth/ForgotPassword";
import ResetPassword from "../screens/auth/ResetPassword";
const AuthStack = createStackNavigator();
const Auth = () => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="Login" component={Login} />
            <AuthStack.Screen name="Register" component={Register} />
            <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
            <AuthStack.Screen name="ResetPassword" component={ResetPassword} />
        </AuthStack.Navigator>
    )
    
}
export default Auth;