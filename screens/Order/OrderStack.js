import * as React from 'react';   
import { createStackNavigator } from '@react-navigation/stack';
import Cart from "./Cart";
import Card from './Card';
import Checkout from "./Checkout";
import Confirmation from "./Confirmation";
import Payment from './Payment';
import { View } from 'react-native';
import Color from '../../constant/Color';
import { FontAwesome } from '@expo/vector-icons';
const OrderStack = createStackNavigator();
const Orders = () => {
        return(
        <OrderStack.Navigator >
            <OrderStack.Screen name="Cart" component={Cart} 
                options={{
                    headerTintColor: Color.textPrimary,
                    headerTitle: 'Cart',
                  headerTitleAlign: 'center',
                  headerStyle:{
                      backgroundColor:Color.bgPrimary 
                    },
                    headerRight: (props) => (
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome name="search" size={25} color={Color.textPrimary} style={{ paddingRight: 20 }} />
                        </View>
                    )
                }} />
            <OrderStack.Screen name="Payment" component={Payment} 
                options={{
                    headerTintColor: Color.textPrimary,
                    headerTitle: 'Setting',
                    headerTitleAlign: 'center',
                    headerRight: (props) => (
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome name="search" size={25} color="#ffffff" style={{ paddingRight: 20 }} />
                        </View>
                    )
                }} />
            <OrderStack.Screen name="Card" component={Card} 
                options={{
                    headerTintColor: Color.textPrimary,
                    headerTitle: 'Setting',
                    headerTitleAlign: 'center',
                    headerRight: (props) => (
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome name="search" size={25} color="#ffffff" style={{ paddingRight: 20 }} />
                        </View>
                    )
                }} />
            <OrderStack.Screen name="Checkout" component={Checkout} options={{
                title:'Checkout'
            }} />
            <OrderStack.Screen name="Confirmation" component={Confirmation}options={{
                title:'Confirmation'
            }}  />
        </OrderStack.Navigator>)
}
export default Orders;