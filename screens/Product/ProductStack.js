import * as React from 'react';
import { View } from 'react-native';
import { createStackNavigator,  } from '@react-navigation/stack';
import ProductList from "./List";
import ProductDetail from "./Detail";
import OrderStack from '../Order/OrderStack';
import { FontAwesome, AntDesign  } from '@expo/vector-icons';  
import { TouchableOpacity } from 'react-native';
import { ImageBackground } from 'react-native'; 
import logo from '../../assets/logo.png';
import { useNavigation } from "@react-navigation/native";
const ProductStack = createStackNavigator();
const Product = () => {
    const navigation = useNavigation();
    return (
        <ProductStack.Navigator >
            <ProductStack.Screen name="ProducList" component={ProductList}
                 options={{
                   
                    headerStyle: {
                        height: 90, 
                    },
                    headerBackAccessibilityLabel:{
                        color :'red'
                    },
                     headerBackTitleStyle:{
                         color:'white',
                         paddingTop:19
                     },
                    headerTitle: 'Product List',
                   headerTitleStyle:{
                       color:'#0A8791',
                       paddingTop:20,
                       fontSize:18
                   },
                    headerTitleAlign: 'center',
                    headerRight: (props) => (
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome name="search" size={25} color="#0A8791" style={{ paddingRight: 20 , paddingTop:20}} />
                        </View>
                    ),
                    headerLeft: (props) => (
                        <TouchableOpacity style={{ flex: 1, flexDirection: 'row',
                         alignItems: 'center', justifyContent:'center',paddingTop:20 , paddingLeft:10}}
                         onPress={() => navigation.goBack()}> 
                            <AntDesign name="left" size={30} color="#0A8791" />
                        </TouchableOpacity>
                    ),
               
                  
                }}
             
            />
             <ProductStack.Screen name="OrderStack" component={OrderStack} options={{header: () => null}}/>
            <ProductStack.Screen name="ProducDetail" component={ProductDetail}
            options={{
                   
                headerStyle: {
                    height: 90, 
                },
                headerBackAccessibilityLabel:{
                    color :'red'
                },
                 headerBackTitleStyle:{
                     color:'white',
                     paddingTop:19
                 },
                headerTitle: 'Product Detail',
               headerTitleStyle:{
                   color:'#0A8791',
                   paddingTop:20,
                   fontSize:18
               },
                headerTitleAlign: 'center',
                headerRight: (props) => (
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesome name="search" size={25} color="#0A8791" style={{ paddingRight: 20 , paddingTop:20}} />
                    </View>
                ),
                headerLeft: (props) => (
                    <TouchableOpacity style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent:'center',paddingTop:20 , paddingLeft:10}}> 
                    <ImageBackground source={logo} style={{ width:40 ,height:40}} />
                    </TouchableOpacity>
                ),
           
              
            }}
            />
        </ProductStack.Navigator>);

}
export default Product;