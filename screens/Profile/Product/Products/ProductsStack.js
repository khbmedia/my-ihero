import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CreateProducts from './Create';
import IndexProducts from './Index';
import BrandsStack from'../Brands/BrandsStack';
import CategoriesStack from '../Categories/CategoriesStack';
import ColorsStack from '../Colors/ColorsStack';
import UnitsStack from '../Units/UnitsStack';
 

const ProductsStack = createStackNavigator();
const Products = () => {
    
    return (
        <ProductsStack.Navigator headerMode='none'>
            <ProductsStack.Screen name="CreateProducts" component={CreateProducts} options={{header: () => null}} />
            <ProductsStack.Screen name="IndexProducts" component={IndexProducts} options={{header: () => null}}/>          
            <ProductsStack.Screen name="BrandsStack" component={BrandsStack} options={{header: () => null}}/>          
            <ProductsStack.Screen name="CategoriesStack" component={CategoriesStack} options={{header: () => null}}/>          
            <ProductsStack.Screen name="ColorsStack" component={ColorsStack} options={{header: () => null}}/>          
            <ProductsStack.Screen name="UnitsStack" component={UnitsStack} options={{header: () => null}}/>          
        </ProductsStack.Navigator>)
}
export default Products;