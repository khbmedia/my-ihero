import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Cart from '../screens/Order/Cart';
import Checkout from '../screens/Order/Checkout';
import Confirmation from '../screens/Order/Confirmation';
const OrderStack = createStackNavigator();
const Orders = () => {
    
        return(<OrderStack.Navigator>
            <OrderStack.Screen name="Cart" component={Cart} />
            <OrderStack.Screen name="Checkout" component={Checkout} />
            <OrderStack.Screen name="Confirmation" component={Confirmation} />
        </OrderStack.Navigator>)
}
export default Orders;