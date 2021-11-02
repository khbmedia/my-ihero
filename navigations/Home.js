import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Category from "../screens/Product/ListByCategory";
import Shop from "../screens/Product/List";
import Brand from "../screens/Product/ListByBrand";
import Home from "../screens/Home";
const HomeStack = createStackNavigator();
const Homes = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={Home} />
            <HomeStack.Screen name="Category" component={Category} />
            <HomeStack.Screen name="Brand" component={Brand} />
            <HomeStack.Screen name="Shop" component={Shop} />
        </HomeStack.Navigator>
    )
    
}
export default Homes;