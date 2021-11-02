import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import CreateUnit from "../screens/Profile/Product/Units/Create";
import ListUnit from "../screens/Profile/Product/Units/Index";
import EditUnit from "../screens/Profile/Product/Units/Edit";
const UnitStack = createStackNavigator();
const ProductCrud = () => {
    
    return (
        <UnitStack.Navigator>
            <UnitStack.Screen name="UnitList" component={ListUnit} />
            <UnitStack.Screen name="UnitEdit" component={EditUnit} />
            <UnitStack.Screen name="UnitCreate" component={CreateUnit} />
        </UnitStack.Navigator>
    )
}
export default ProductCrud;