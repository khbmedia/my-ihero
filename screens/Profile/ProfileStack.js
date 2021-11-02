import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from "./Dashboard";
import History from "./History";
import PaymentHistory from "./PaymentHistory";
import Invoice from "./Invoice";
import Order from "./Order";
import OrderDetail from "./OrderDetail";
import General from "./General";
import MyProfile from "./MyProfile"
import ProductStack from "./Product/ProductStack";
import AuthStack from '../Auth/AuthStack';
import UserProfile from './UserProfile';
import Setting from './Setting';
import InvoiceDetail from './InvoiceDetail';
import { View  } from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons';
const ProfileStack = createStackNavigator();
const Profile = ({navigation}) => {
    return (
        <ProfileStack.Navigator >
            <ProfileStack.Screen name="AuthStack" component={AuthStack}  
            options={{ header: () => null, }} 
         />
            <ProfileStack.Screen name="Dashboard" component={Dashboard} options={{ header: () => null, }} />
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
            <ProfileStack.Screen name="Invoice" component={Invoice}
                options={{
                    headerTintColor: '#0A8791',
                    headerTitle: 'Invoice',
                    headerTitleAlign: 'center',
                    headerRight: (props) => (
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome name="search" size={25} color="#0A8791" style={{ paddingRight: 20 }} />
                        </View>
                    )
                }} />
            <ProfileStack.Screen name="InvoiceDetail" component={InvoiceDetail}
                options={{
                    headerTintColor: '#0A8791',
                    headerTitle: 'InvoiceDetail',
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
            <ProfileStack.Screen name="ProductStack" component={ProductStack}
                options={{
                    headerTintColor: '#0A8791',
                    headerTitle: 'Product',
                    headerTitleAlign: 'center',

                    headerRight: (props) => (
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome name="search" size={25} color="#0A8791" style={{ paddingRight: 10 }} />
                            <Entypo name="dots-three-vertical" size={20} color="#0A8791" style={{ paddingRight: 5 }} />
                        </View>
                    )
                }}
            />
            <ProfileStack.Screen name="OrderDetail" component={OrderDetail}
                options={{
                    headerTintColor: '#0A8791',
                    headerTitle: 'OrderDetail',
                    headerTitleAlign: 'center',
                    headerRight: (props) => (
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome name="search" size={25} color="#0A8791" style={{ paddingRight: 20 }} />
                        </View>
                    )
                }} />
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
         
            <ProfileStack.Screen name="MyProfile" component={MyProfile} options={{ header: () => null, }}  />
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