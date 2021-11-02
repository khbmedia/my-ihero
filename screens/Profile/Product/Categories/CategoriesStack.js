import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CreateCategories from './Create';
import IndexCategories from './Index';

const CategoriesStack = createStackNavigator();
const Categories = () => {
    
    return (
        <CategoriesStack.Navigator headerMode='none' >
            <CategoriesStack.Screen name="CreateCategories" component={CreateCategories} />
            <CategoriesStack.Screen name="IndexCategories" component={IndexCategories} />          
        </CategoriesStack.Navigator>)
}
export default Categories;