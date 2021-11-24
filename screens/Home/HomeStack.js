import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Category from "./Categories";
import Brand from "./Brand";
import Home from "./Home";
import Product from '../Product/ProductStack';
import Filter from '../Home/Filter';
import { Ionicons, Feather, EvilIcons } from "@expo/vector-icons";
import { View, TouchableOpacity, Text, Dimensions } from 'react-native'
import {
    NativeBaseProvider,
    Input
} from 'native-base';
const width = Dimensions.get("window").width;
import Color from '../../constant/Color';
import Notification from './Notification'
import Search from './Search'
import StartUp from './StartUp';
import ShopProfile from '../Shop/ShopProfile';
const HomeStack = createStackNavigator();
const Homes = ({ navigation }) => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="StartUp" component={StartUp} options={{
                header:()=>null
            }}/>
            <HomeStack.Screen
                name="Home"
                component={Home}
                options={{
                    headerLeft: () => (
                        <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center", paddingLeft: 12 }}>
                            <EvilIcons name="location" size={24} color="white" style={{}} />
                            <Text style={{ fontSize: 13, paddingTop: 2, color: Color.textLight }}>Delivery to</Text>
                            <Text style={{ paddingHorizontal: 4, color: Color.textPrimary, fontWeight: '700', paddingTop: 1 }}>Home</Text>
                        </View>),
                    headerRight: () => (
                        <TouchableOpacity
                            style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center", paddingRight: 15 }}  >
                            <TouchableOpacity onPress={() => navigation.navigate('Search')} >
                                <Feather name="search" size={24} color={Color.textPrimary} style={{ marginHorizontal: 5 }} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Notification')} >
                                <Ionicons name="notifications-outline" size={24} color={Color.textPrimary} />
                            </TouchableOpacity>
                        </TouchableOpacity>),
                    title: "",
                    headerStyle: {
                        backgroundColor: Color.bgPrimary
                        , elevation: 0,
                        shadowOpacity: 0,
                        borderBottomWidth: 0,
                    }
                }} />
            <HomeStack.Screen name="Filter" component={Filter} options={{ header: () => null }} />
            <HomeStack.Screen name="Category" component={Category} />
            <HomeStack.Screen name="Brand" component={Brand} />
            <HomeStack.Screen name="Notification"
                component={Notification}
                options={{
                    headerBackTitle: " ",
                    headerStyle: {
                        backgroundColor: Color.bgPrimary
                        , elevation: 0,
                        shadowOpacity: 0,
                        borderBottomWidth: 0,
                    },
                    title: "Notification",
                    headerTintColor: Color.textPrimary,
                    headerTitleAlign: "center",
                }} />
            <HomeStack.Screen
                name="ShopProfile"
                component={ShopProfile}
                options={{

                    headerTintColor: Color.textPrimary,
                    title: "Restaurants",
                    headerStyle: {
                        backgroundColor: Color.bgPrimary,
                        elevation: 0,
                        shadowOpacity: 0,
                        borderBottomWidth: 0,
                    },
                    headerTitleAlign:"center"
                }} />
            <HomeStack.Screen
                name="Search"
                component={Search}
                options={{
                    headerBackTitle: " ",
                    headerStyle: {
                        backgroundColor: Color.bgPrimary,
                        elevation: 0,
                        shadowOpacity: 0,
                        borderBottomWidth: 0,
                    },
                    headerTintColor: Color.textPrimary,
                    headerBackTitleStyle: {
                        bottom: 1
                    },

                    headerRight: (props) => (
                        <NativeBaseProvider>
                            <View style={{ width: width - (0.12 * width), alignSelf: 'flex-end', right: 5, height: '100%', justifyContent: 'center' }}>
                                <Input
                                    variant='unstyled'
                                    placeholder="Search here..."
                                    px={3}
                                    py={2}
                                    width="100%"
                                    borderRadius={0}
                                    style={{ backgroundColor: '#e6e6e6' }}
                                />
                            </View>
                        </NativeBaseProvider>
                    ),
                }}
            />
            <HomeStack.Screen name="ProductStack" component={Product} options={{ header: () => null }} />
        </HomeStack.Navigator>
    )
}
export default Homes;