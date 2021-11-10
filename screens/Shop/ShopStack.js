import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Shop from "../Home/Shop";
// import ShopProfile from '../Home/ShopProfile';
import SearchShop from './SearchShop'
import { View, Keyboard,Text } from 'react-native';
import { Ionicons, AntDesign,Feather } from '@expo/vector-icons';
import {TouchableOpacity} from "react-native"
import {
    NativeBaseProvider,
    VStack,
    Input
    , Icon
} from 'native-base';
import Color from '../../constant/Color';
import { TextInput } from 'react-native-gesture-handler';
const ShopStack = createStackNavigator();
const Shops = ({ navigation }) => {
    return (
        <ShopStack.Navigator initialRouteName="Shop">
            <ShopStack.Screen name="Shop" component={Shop} options={{
                headerRight:()=>(<View style={{ flexDirection: 'row',justifyContent:"center",alignItems:"center",paddingRight:12 }}>
                    <TouchableOpacity onPress={()=>{
                        navigation.navigate("SearchShop");
                    }}><Feather name="search" size={24} color={Color.textPrimary}/></TouchableOpacity>
                    </View>),
                headerTintColor:Color.textPrimary,
                title:"Restaurants",
                headerStyle:{
                    backgroundColor:Color.bgPrimary
                    ,elevation:0,
                    shadowOpacity:0,
                    borderBottomWidth:0,
                } }} />
            <ShopStack.Screen name="SearchShop" component={SearchShop}
            options={{header:()=>(<View style={{width:"100%",flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
            </View>), headerTintColor:Color.textPrimary,headerStyle:{
                backgroundColor:Color.bgPrimary,
            }}} />
        </ShopStack.Navigator>
    )
}
export default Shops;