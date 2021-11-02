import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesStack from './Categories/CategoriesStack';
import BrandsStack from './Brands/BrandsStack';
import ColorsStack from './Colors/ColorsStack';
import UnitsStack from './Units/UnitsStack';
import VideosStack from './Videos/VideosStack';
import ProducStack from './Products/ProductsStack';
const ProductStack = createStackNavigator();
const Product = () => { 
    return (
        <ProductStack.Navigator > 
            <ProductStack.Screen name="BrandsStack" component={BrandsStack}   options={{header: () => null}}/>
            <ProductStack.Screen name="CategoriesStack" component={CategoriesStack} options={{header: () => null}} />
            <ProductStack.Screen name="ColorsStack" component={ColorsStack} options={{header: () => null}}/>
            <ProductStack.Screen name="UnitsStack" component={UnitsStack} options={{header: () => null}}/>
            <ProductStack.Screen name="VideosStack" component={VideosStack} options={{header: () => null}}/>
            <ProductStack.Screen name="ProducStack" component={ProducStack} options={{header: () => null}}/>
        </ProductStack.Navigator>);
}
export default Product;