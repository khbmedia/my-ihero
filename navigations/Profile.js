import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from "../screens/Profile/Dashboard";
import History from "../screens/Profile/History";
import Invoice from "../screens/Profile/Invoice";
import MyOrder from "../screens/Profile/MyOrder";
import ChangePassword from "../screens/Profile/ChangePassword";
import ProductStack from "./ProductCrud";
const OrderStack = createStackNavigator();
const Orders = () => {
    
    return (
        <OrderStack.Navigator>
            <OrderStack.Screen name="Dashboard" component={Dashboard} />
            <OrderStack.Screen name="History" component={History} />
            <OrderStack.Screen name="Invoice" component={Invoice} />
            <OrderStack.Screen name="MyOrder" component={MyOrder} />
            <OrderStack.Screen name="ChangePassword" component={ChangePassword} />
            <OrderStack.Screen name="Product" component={ProductStack }/>
        </OrderStack.Navigator>
    )
    
}
export default Orders;