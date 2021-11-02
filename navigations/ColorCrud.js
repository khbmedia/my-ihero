import * as React from 'react';


import { createStackNavigator } from '@react-navigation/stack';
import CreateColor from "../screens/Profile/Product/Colors/Create";
import ListColor from "../screens/Profile/Product/Colors/Index";
import EditColor from "../screens/Profile/Product/Colors/Edit";
const ColorStack = createStackNavigator();
const ProductCrud = () => {

    return (
        <ColorStack.Navigator>
            <ColorStack.Screen name="ColorList" component={ListColor} />
            <ColorStack.Screen name="ColorEdit" component={EditColor} />
            <ColorStack.Screen name="ColorCreate" component={CreateColor} />
        </ColorStack.Navigator>)

}
export default ProductCrud;