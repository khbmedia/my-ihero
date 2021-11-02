import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import CreateProduct from "../screens/Profile/Product/Products/Create";
import ListProduct from "../screens/Profile/Product/Products/Index";
import EditProduct from "../screens/Profile/Product/Edit";
import CategoryStack from "./CategoryCrud";
import UnitStack from "./UnitCrud";
import ColorStack from "./ColorCrud";
import BrandStack from "./BrandCrud";
import VideoStack from "./VideoCrud";
const ProductStack = createStackNavigator();
const ProductCrud = () => {
    
    return (
        <ProductStack.Navigator>
            <ProductStack.Screen name="ProductList" component={ListProduct} />
            <ProductStack.Screen name="ProductEdit" component={EditProduct} />
            <ProductStack.Screen name="ProductCreate" component={CreateProduct} />
            <ProductStack.Screen name="CategoryStack" component={CategoryStack} />
            <ProductStack.Screen name="UnitStack" component={UnitStack} />
            <ProductStack.Screen name="ColorStack" component={ColorStack} />
            <ProductStack.Screen name="BrandStack" component={BrandStack} />
            <ProductStack.Screen name="VideoStack" component={VideoStack} />
        </ProductStack.Navigator>)
}
export default ProductCrud;