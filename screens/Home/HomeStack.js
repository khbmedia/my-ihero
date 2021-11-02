import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Category from "./Categories";
import Shop from "./Shop";
import Brand from "./Brand";
import Home from "./Home";
import ShopProfile from './ShopProfile';
import Product from '../Product/ProductStack';
import Filter from '../Home/Filter';
import Search from './Search';
import GetStart from './GetStart';
import BrandStack from '../Profile/Product/Brands/BrandsStack';
import { View, Image, Keyboard } from 'react-native';
import { FontAwesome, Ionicons, AntDesign } from '@expo/vector-icons';
import logo from '../../assets/logo.png'; 
import {
    NativeBaseProvider,
    VStack,
    Input
    , Icon
} from 'native-base';
const HomeStack = createStackNavigator();
const Homes = ({ navigation }) => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={Home} options={{ header: () => null }}/>
            <HomeStack.Screen name="GetStart" component={GetStart} options={{ header: () => null }}/>
            <HomeStack.Screen name="Filter" component={Filter} options={{ header: () => null }}/>
            <HomeStack.Screen name="Category" component={Category} />
            <HomeStack.Screen name="Search" component={Search}
                options={{
                    header: (props) => (
                        <View style={{ backgroundColor: '#ffffff', shadowColor: 'red',  borderBottomWidth: 2, borderBottomColor: '#e6e6e6', marginTop: 25, height: 70, justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row' }}>
                            <View style={{ flex: 1 ,paddingLeft:10}}>
                                <AntDesign name="left" size={24} color="black" onPress={()=>navigation.goBack() }/>
                            </View>
                            <View style={{ flex: 10, paddingTop: 12  ,alignItems:'center'}}> 
                                <NativeBaseProvider style={{ backgroundColor: 'red' }} onPress={Keyboard.dismiss}>
                                    <VStack space={2} width="100%">
                                        <VStack width="100%" space={2}  >
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
                                    </VStack> 
                                </NativeBaseProvider>
                            </View>
                            <View style={{ flex: 1, paddingTop: 12 }}>
                             
                            </View>
                        </View>
                    ),

                }} />
            <HomeStack.Screen name="ShopProfile" component={ShopProfile} options={{ header: () => null }} />
            <HomeStack.Screen name="Brand" component={Brand} />
            <HomeStack.Screen name="Shop" component={Shop} options={{ title: 'Shop' }} />
            <HomeStack.Screen name="ProductStack" component={Product} options={{ header: () => null }} />
          
            <HomeStack.Screen name="BrandStack" component={BrandStack} />
        </HomeStack.Navigator>
    )
}
export default Homes;