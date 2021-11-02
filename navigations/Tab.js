import * as React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();
import Home from "../screens/Home/HomeStack";
import Cart from "../screens/Order/OrderStack"; 
import Search from "../screens/Home/Search";
import Profile from "../screens/Profile/ProfileStack";
import Shop from "../screens/Home/Shop";
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'; 
const Tabs = () => {
    return (
        <Tab.Navigator activeColor="#0A8791"
            inactiveColor="#3e2465"
            barStyle={{ backgroundColor: '#f2f2f2' }}> 
            <Tab.Screen 
            
                name="Home"
                component={Home}
                options={{ 
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home-circle-outline" size={27} color="#0A8791" />
                    ), 
                    
                }}
            />
            
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                      
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="apple-safari" size={27} color="#0A8791" />
                    ),
                    tabBarButton: (props) =>
                    (
                        <CustomTabBarButton {...props} />
                    )
                }}
            />
            <Tab.Screen
                name="Cart"
                component={Cart} 
                options={{
                    tabBarLabel: 'Cart',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="md-cart-outline" size={27} color="#0A8791" />
                    ),
                }}
            />
            <Tab.Screen
                name="Shop"
                component={Shop} 
                options={{
                    tabBarLabel: 'Shop',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="shopping-outline" size={28} color="#0A8791" />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        // <EvilIcons name="user" size={40} color="#0A8791" />
                        <FontAwesome5 name="user-circle" size={24} color="#0A8791" />
                    ),
                }}
            /> 
        </Tab.Navigator>
    );
}
export default Tabs;