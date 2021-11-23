import * as React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();
import Home from "../screens/Home/HomeStack";
import Cart from "../screens/Order/OrderStack";
import Profile from "../screens/Profile/ProfileStack";
import Shop from "../screens/Shop/ShopStack";
import { FontAwesome5, Entypo, FontAwesome, Feather } from '@expo/vector-icons';
import Color from "../constant/Color";
const Tabs = () => {
    return (
        <Tab.Navigator activeColor="#f2f2f2"
            inactiveColor={Color.textPrimary}
            barStyle={{ backgroundColor: Color.bgPrimary }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <Entypo name="home" size={24} color={Color.textPrimary} />
                    ),
                }}
            />
            <Tab.Screen
                name="Cart"
                component={Cart}
                options={{
                    tabBarLabel: 'Cart',
                    tabBarIcon: ({ color }) => (
                        <Feather name="shopping-cart" size={25} color={Color.textPrimary} />
                    ),
                }}
            />
            <Tab.Screen
                name="Shop"
                component={Shop}
                options={{
                    tabBarLabel: 'Restaurants',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="store" size={20} color={Color.textPrimary} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="user-alt" size={22} color={Color.textPrimary} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
export default Tabs;