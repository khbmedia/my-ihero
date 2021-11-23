import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from "./Dashboard";
import History from "./History";
import PaymentHistory from "./PaymentHistory";
import General from "./General";
import MyProfile from "./MyProfile"
import UserProfile from './UserProfile';
import Setting from './Setting';
import Order from './Order'
import { View, TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import Color from '../../constant/Color';
const ProfileStack = createStackNavigator();
const Profile = ({ navigation }) => {
    return (
        <ProfileStack.Navigator >

            <ProfileStack.Screen name="Dashboard" component={Dashboard}
                options={{
                    headerRight: () => (
                        <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center", paddingRight: 12 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                                <Ionicons name="notifications-outline" size={24} color={Color.textPrimary} />
                            </TouchableOpacity>
                        </View>
                    ),
                    headerTintColor: Color.textPrimary,
                    title: "Restaurants",
                    headerStyle: {
                        backgroundColor: Color.bgPrimary,
                        elevation: 0,
                        shadowOpacity: 0,
                        borderBottomWidth: 0,
                    }
                }} />
            <ProfileStack.Screen name="History" component={History}
                options={{
                    headerTintColor: '#0A8791',
                    headerTitle: 'History',
                    headerTitleAlign: 'center',
                    headerRight: (props) => (
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome name="search" size={25} color="#0A8791" style={{ paddingRight: 20 }} />
                        </View>
                    )
                }} />
            <ProfileStack.Screen name="Setting" component={Setting}
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
            <ProfileStack.Screen name="PaymentHistory" component={PaymentHistory}
                options={{
                    headerTintColor: '#0A8791',
                    headerTitle: 'PaymentHistory',
                    headerTitleAlign: 'center',
                    headerRight: (props) => (
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome name="search" size={25} color="#0A8791" style={{ paddingRight: 20 }} />
                        </View>
                    )
                }} />

            <ProfileStack.Screen name="Order" component={Order}

                options={{ header: () => null, }}
            />


            <ProfileStack.Screen name="General" component={General}
                options={{
                    headerTintColor: '#0A8791',
                    headerTitle: 'General',
                    headerTitleAlign: 'center',
                    headerRight: (props) => (
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome name="search" size={25} color="#0A8791" style={{ paddingRight: 20 }} />
                        </View>
                    )
                }} />

            <ProfileStack.Screen name="MyProfile" component={MyProfile} options={{ header: () => null, }} />
            <ProfileStack.Screen name="UserProfile" component={UserProfile} options={{
                headerTintColor: '#0A8791',
                headerTitle: 'Profile',
                headerTitleAlign: 'center',
                headerRight: (props) => (
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesome name="cog" size={25} color="#0A8791" style={{ paddingRight: 20 }} onPress={() => navigation.navigate("MyProfile")} />
                    </View>
                )
            }} />

        </ProfileStack.Navigator>
    )
}
export default Profile;