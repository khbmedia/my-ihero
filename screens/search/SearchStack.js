import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Search from './Search';
const HomeStack = createStackNavigator();
import { View  } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
const SearchStack = ({ navigation }) => {
   
    return (
        <HomeStack.Navigator> 
            <HomeStack.Screen name="Search" component={Search}
                options={{
                    headerTintColor: '#0A8791',
                    headerTitle: 'Setting',
                    headerTitleAlign: 'center',
                    headerRight: (props) => (
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome name="search" size={25} color="#0A8791" style={{ paddingRight: 20 }} />
                        </View>
                    )
                }} /> 
        </HomeStack.Navigator>
    )
}
export default SearchStack;