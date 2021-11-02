import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CreateUnits from './Create';
import IndexUnits from './Index';

const UnitsStack = createStackNavigator();
const Units = () => {
    
    return (
        <UnitsStack.Navigator headerMode='none'>
            <UnitsStack.Screen name="CreateUnits" component={CreateUnits} />
            <UnitsStack.Screen name="IndexUnits" component={IndexUnits} />          
        </UnitsStack.Navigator>)
}
export default Units;