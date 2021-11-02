import * as React from 'react';


import { createStackNavigator } from '@react-navigation/stack';
import CreateCategory from "../screens/Profile/Product/Categories/Create";
import ListCategory from "../screens/Profile/Product/Categories/Index";
import EditCategory from "../screens/Profile/Product/Categories/Edit";
const CategoryStack = createStackNavigator();
const ProductCrud = () => {
    
       return( <CategoryStack.Navigator>
            <CategoryStack.Screen name="CategoryList" component={ListCategory} />
            <CategoryStack.Screen name="CategoryEdit" component={EditCategory} />
            <CategoryStack.Screen name="CategoryCreate" component={CreateCategory} />
        </CategoryStack.Navigator>)
}
export default ProductCrud;