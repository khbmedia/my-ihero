import * as React from 'react';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import Category from "./Categories";
import Shop from "./Shop";
import Brand from "./Brand";
import Home from "./Home";
import ShopProfile from './ShopProfile';
import Product from '../Product/ProductStack';
import Filter from '../Home/Filter';
import Search from '../search/Search';  
import { View, Keyboard,Text } from 'react-native';
import { Ionicons,EvilIcons } from '@expo/vector-icons';
import {
    NativeBaseProvider,
    VStack,
    Input
    , Icon
} from 'native-base';
import Color from '../../constant/Color';
const HomeStack = createStackNavigator();
const Homes = ({ navigation }) => {
   
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={Home} options={{ headerLeft:()=>(
                        <View style={{ flexDirection: 'row',justifyContent:"center",alignItems:"center",paddingLeft:12  }}>
                            <EvilIcons name="location" size={24} color="white" style={{}} />
                            <Text style={{ fontSize: 13, paddingTop: 2, color: Color.textLight }}>Delivery to</Text>
                            <Text style={{ paddingHorizontal: 4, color: Color.textPrimary, fontWeight: '700', paddingTop: 1 }}>Home</Text>
                            
                        </View>),
                    headerRight:()=>(<View style={{ flexDirection: 'row',justifyContent:"center",alignItems:"center",paddingRight:12 }}><Ionicons name="notifications-outline" size={24} color={Color.textPrimary} /></View>),
                    title:"",
                    headerStyle:{
                        backgroundColor:Color.bgPrimary
                        ,elevation:0,
                        shadowOpacity:0,
                        borderBottomWidth:0,
                    }
                }}/> 
            <HomeStack.Screen name="Filter" component={Filter} options={{ header: () => null }}/>
            <HomeStack.Screen name="Category" component={Category} />
            <HomeStack.Screen name="Search" component={Search}
                options={{
                    headerRight: (props) => (
                        <View style={{ backgroundColor: '#ffffff', shadowColor: 'red',  borderBottomWidth: 2, borderBottomColor: '#e6e6e6', marginTop: 25, height: 70, justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row' }}>
                            
                            <View style={{ flex: 10, paddingTop: 12  ,alignItems:'center'}}> 
                                <NativeBaseProvider style={{ backgroundColor: 'red' }} onPress={Keyboard.dismiss}>
                                        <VStack width="100%" space={2} px={2} >
                                            <Input borderRadius={10}
                                                placeholder="Search"
                                                variant="filled"
                                                width='100%' 
                                                py={3}
                                                px={1} 
                                                InputLeftElement={<Icon size='sm' ml={2} size={5} color="gray.400" as={<Ionicons name="ios-search" />} />}
                                                InputLeftElement={<Icon size='sm' ml={2} size={5} color="gray.400" as={<Ionicons name="ios-search" />} />}
                                                autocomplete="off"
                                            /> 
                                        </VStack>
                                </NativeBaseProvider>
                            </View>
                        </View>
                    ),

                }} />
            <HomeStack.Screen name="ShopProfile" component={ShopProfile} options={{ title:"shop name",headerTintColor:Color.textPrimary, headerStyle:{
                backgroundColor:Color.bgPrimary
            } }} />
            <HomeStack.Screen name="Brand" component={Brand} />
            <HomeStack.Screen name="Shop" component={Shop} options={{ }} />
            <HomeStack.Screen name="ProductStack" component={Product} options={{ header: () => null }} /> 
        </HomeStack.Navigator>
    )
}
export default Homes;