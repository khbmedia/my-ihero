import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import CreateVideo from "../screens/Profile/Product/Videos/Create";
import ListVideo from "../screens/Profile/Product/Videos/Index";
import EditVideo from "../screens/Profile/Product/Videos/Edit";


const VideoStack = createStackNavigator();
const ProductCrud = () => {
    
    return (
        <VideoStack.Navigator>
            <VideoStack.Screen name="VideoList" component={ListVideo} />
            <VideoStack.Screen name="VideoEdit" component={EditVideo} />
            <VideoStack.Screen name="VideoCreate" component={CreateVideo} />
        </VideoStack.Navigator>
    )
    
}
export default ProductCrud;