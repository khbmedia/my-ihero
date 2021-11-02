import * as React from 'react';
import { FontAwesome, AntDesign  } from '@expo/vector-icons';  
import { TouchableOpacity } from 'react-native';
import { ImageBackground,View } from 'react-native'; 
import { createStackNavigator } from '@react-navigation/stack';
import Cart from "./Cart";
import Card from './Card';
import Checkout from "./Checkout";
import Confirmation from "./Confirmation";
import Payment from './Payment';
import logo from '../../assets/logo.png';
const OrderStack = createStackNavigator();
const Orders = () => {
        return(
        <OrderStack.Navigator >
            <OrderStack.Screen name="Cart" component={Cart} 
              options={{ header: () => null }} />
            <OrderStack.Screen name="Payment" component={Payment} 
              options={{ header: () => null }} />
            <OrderStack.Screen name="Card" component={Card} 
              options={{ header: () => null }} />
            <OrderStack.Screen name="Checkout" component={Checkout} options={{
                title:'Checkout'
            }} />
            <OrderStack.Screen name="Confirmation" component={Confirmation}options={{
                title:'Confirmation'
            }}  />
        </OrderStack.Navigator>)
}
export default Orders;