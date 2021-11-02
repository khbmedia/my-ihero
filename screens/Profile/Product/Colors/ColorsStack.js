import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CreateColors from './Create';
import IndexColors from './Index';

const ColorsStack = createStackNavigator();
const Colors = () => {
    
    return (
        <ColorsStack.Navigator headerMode='none'>
            <ColorsStack.Screen name="CreateColors" component={CreateColors} />
            <ColorsStack.Screen name="IndexColors" component={IndexColors} />          
        </ColorsStack.Navigator>)
}
export default Colors;