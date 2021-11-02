import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CreateVideos from './Create';
import IndexVideos from './Index';

const VideosStack = createStackNavigator();
const Videos = () => {
    
    return (
        <VideosStack.Navigator headerMode='none'>
            <VideosStack.Screen name="CreateVideos" component={CreateVideos} />
            <VideosStack.Screen name="IndexVideos" component={IndexVideos} />          
        </VideosStack.Navigator>)
}
export default Videos;