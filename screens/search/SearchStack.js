import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Search from './Search';
const HomeStack = createStackNavigator();
import { View, Dimensions } from 'react-native';
import {
    NativeBaseProvider,
    VStack,
    Input
    , Icon
} from 'native-base';
const SearchStack = ({ navigation }) => {
    const width = Dimensions.get("window").width;
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Search" component={Search}
                options={{
                    headerBackTitle: "jhhgfdfhgjkgf ",
                    headerStyle: {
                        backgroundColor: "#0092ff",
                        elevation: 0,
                        shadowOpacity: 0,
                        borderBottomWidth: 0,
                    },
                    headerTintColor: "#ffffff",
                    headerBackTitleStyle: {
                        bottom: 1
                    },

                    headerRight: (props) => (
                        <NativeBaseProvider>
                            <View style={{ width: width - (0.12 * width), alignSelf: 'flex-end', right: 5, height: '100%', justifyContent: 'center' }}>
                                <Input
                                    variant="outline"
                                    placeholder="Search your course name here..."
                                    px={3}
                                    width="100%"
                                    borderRadius={0}
                                    bg="white"
                                />
                            </View>
                        </NativeBaseProvider>
                    ),


                }}
            />
        </HomeStack.Navigator>
    )
}
export default SearchStack;