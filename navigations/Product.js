import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import ProducList from "../screens/product/List";
import ProducListByCategory from "../screens/product/ListByCategory";
import ProducListByShop from "../screens/product/ListByShop";
import ProducListByBrand from "../screens/product/ListByBrand";
const ProductStack = createStackNavigator();
const Products = () => {
    
    return (
        <ProductStack.Navigator>
            <ProductStack.Screen name="ProducList" component={ProducList} />
            <ProductStack.Screen name="ProducListByCategory" component={ProducListByCategory} />
            <ProductStack.Screen name="ProducListByShop" component={ProducListByShop} />
            <ProductStack.Screen name="ProducListByBrand" component={ProducListByBrand} />
        </ProductStack.Navigator>)
    
}
export default Products;