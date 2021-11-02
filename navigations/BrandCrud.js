import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import CreateBrand from "../screens/Profile/Product/Brands/Create";
import ListBrand from "../screens/Profile/Product/Brands/Index";
import EditBrand from "../screens/Profile/Product/Brands/Edit";
const BrandStack = createStackNavigator();
const ProductCrud = () => {
    
    return (
        <BrandStack.Navigator>
            <BrandStack.Screen name="BrandList" component={ListBrand} />
            <BrandStack.Screen name="BrandEdit" component={EditBrand} />
            <BrandStack.Screen name="BrandCreate" component={CreateBrand} />
        </BrandStack.Navigator>
    )
    
}
export default ProductCrud;