import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CreateBrand from './Create';
import IndexBrand from './Index';

const BrandsStack = createStackNavigator();
const Brands = () => { 
    return (
        <BrandsStack.Navigator headerMode='none' >
            <BrandsStack.Screen name="IndexBrand" component={IndexBrand} />          
            <BrandsStack.Screen name="CreateBrand" component={CreateBrand} />
        </BrandsStack.Navigator>)
}
export default Brands;