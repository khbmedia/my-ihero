
import * as React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Star from 'react-native-star-view';
import { Entypo } from '@expo/vector-icons';
import pro1 from '../Assets/Images/Brand/image1.png';
import { Tabs, NativeBaseProvider, Center, List } from 'native-base';
import { EvilIcons, Ionicons, FontAwesome5, FontAwesome } from '@expo/vector-icons';
const UserProfile = ({ navigation }) => {
    return (
        <View style={{ flex: 1, flexDirection: "column" }}>
            <View style={{ backgroundColor: '#0A8791', width: '100%', flex: 1.5 }} >
                <View style={{ backgroundColor: '#0A8791', width: '100%', flex: 0.5, alignItems: 'center', justifyContent: 'center' }} >

                </View>
                <View style={{ backgroundColor: '#0A8791', width: '100%', flex: 1, alignItems: 'center', justifyContent: 'space-evenly' }} >
                    <EvilIcons name="user" size={110} color="white" />
                    <Pressable onPress={() => navigation.navigate("AuthStack", { screen: "Login" })}>
                        <Text style={{ color: 'white', fontSize: 20 }}>User Name</Text>
                    </Pressable>
                </View>
            </View>
            <View style={{ flex: 3 }}>
                <ScrollView style={{}}>
                    <NativeBaseProvider>
                        <Tabs align='center' colorScheme="warning">
                            <Tabs.Bar>
                                <Tabs.Tab style={styles.tabDashboard}>
                                    <EvilIcons name="heart" size={40} />
                                    <Text>My Order</Text>
                                </Tabs.Tab>
                                <Tabs.Tab style={styles.tabDashboard}>
                                    <Ionicons name="bookmark-outline" size={30} />
                                    <Text>Saved</Text>
                                </Tabs.Tab>
                                <Tabs.Tab style={styles.tabDashboard}>
                                    <Ionicons name="document-text-outline" size={30} />
                                    <Text>History</Text>
                                </Tabs.Tab>
                            </Tabs.Bar>
                            <Tabs.Views>
                                <Tabs.View>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', flexWrap: "wrap" }}>
                                        <TouchableOpacity style={styles.boxItem} onPress={() => navigation.navigate("ProducDetail")}>
                                            <View style={styles.menuBrand}>
                                                <View style={styles.Pro_image}>
                                                    <Image source={pro1} style={styles.imagestyle} />
                                                </View>
                                                <View style={styles.Pro_detail}>
                                                    <Text style={styles.nameBrand}>Shoes</Text>
                                                    <Text style={styles.pro_price}>$56</Text>
                                                    <Star score={4} style={styles.starStyle} />
                                                    <Entypo name="dots-three-vertical" size={14} color="black" style={{ paddingTop: 5 }} />
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.boxItem} onPress={() => navigation.navigate("ProducDetail")}>
                                            <View style={styles.menuBrand}>
                                                <View style={styles.Pro_image}>
                                                    <Image source={pro1} style={styles.imagestyle} />
                                                </View>
                                                <View style={styles.Pro_detail}>
                                                    <Text style={styles.nameBrand}>Shoes</Text>
                                                    <Text style={styles.pro_price}>$56</Text>
                                                    <Star score={4} style={styles.starStyle} />
                                                    <Entypo name="dots-three-vertical" size={14} color="black" style={{ paddingTop: 5 }} />
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.boxItem} onPress={() => navigation.navigate("ProducDetail")}>
                                            <View style={styles.menuBrand}>
                                                <View style={styles.Pro_image}>
                                                    <Image source={pro1} style={styles.imagestyle} />
                                                </View>
                                                <View style={styles.Pro_detail}>
                                                    <Text style={styles.nameBrand}>Shoes</Text>
                                                    <Text style={styles.pro_price}>$56</Text>
                                                    <Star score={4} style={styles.starStyle} />
                                                    <Entypo name="dots-three-vertical" size={14} color="black" style={{ paddingTop: 5 }} />
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.boxItem} onPress={() => navigation.navigate("ProducDetail")}>
                                            <View style={styles.menuBrand}>
                                                <View style={styles.Pro_image}>
                                                    <Image source={pro1} style={styles.imagestyle} />
                                                </View>
                                                <View style={styles.Pro_detail}>
                                                    <Text style={styles.nameBrand}>Shoes</Text>
                                                    <Text style={styles.pro_price}>$56</Text>
                                                    <Star score={4} style={styles.starStyle} />
                                                    <Entypo name="dots-three-vertical" size={14} color="black" style={{ paddingTop: 5 }} />
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </Tabs.View>
                                <Tabs.View>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', flexWrap: "wrap" }}>
                                        <TouchableOpacity style={styles.boxItem} onPress={() => navigation.navigate("ProducDetail")}>
                                            <View style={styles.menuBrand}>
                                                <View style={styles.Pro_image}>
                                                    <Image source={pro1} style={styles.imagestyle} />
                                                </View>
                                                <View style={styles.Pro_detail}>
                                                    <Text style={styles.nameBrand}>Shoes</Text>
                                                    <Text style={styles.pro_price}>$56</Text>
                                                    <Star score={4} style={styles.starStyle} />
                                                    <Entypo name="dots-three-vertical" size={14} color="black" style={{ paddingTop: 5 }} />
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.boxItem} onPress={() => navigation.navigate("ProducDetail")}>
                                            <View style={styles.menuBrand}>
                                                <View style={styles.Pro_image}>
                                                    <Image source={pro1} style={styles.imagestyle} />
                                                </View>
                                                <View style={styles.Pro_detail}>
                                                    <Text style={styles.nameBrand}>Shoes</Text>
                                                    <Text style={styles.pro_price}>$56</Text>
                                                    <Star score={4} style={styles.starStyle} />
                                                    <Entypo name="dots-three-vertical" size={14} color="black" style={{ paddingTop: 5 }} />
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.boxItem} onPress={() => navigation.navigate("ProducDetail")}>
                                            <View style={styles.menuBrand}>
                                                <View style={styles.Pro_image}>
                                                    <Image source={pro1} style={styles.imagestyle} />
                                                </View>
                                                <View style={styles.Pro_detail}>
                                                    <Text style={styles.nameBrand}>Shoes</Text>
                                                    <Text style={styles.pro_price}>$56</Text>
                                                    <Star score={4} style={styles.starStyle} />
                                                    <Entypo name="dots-three-vertical" size={14} color="black" style={{ paddingTop: 5 }} />
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.boxItem} onPress={() => navigation.navigate("ProducDetail")}>
                                            <View style={styles.menuBrand}>
                                                <View style={styles.Pro_image}>
                                                    <Image source={pro1} style={styles.imagestyle} />
                                                </View>
                                                <View style={styles.Pro_detail}>
                                                    <Text style={styles.nameBrand}>Shoes</Text>
                                                    <Text style={styles.pro_price}>$56</Text>
                                                    <Star score={4} style={styles.starStyle} />
                                                    <Entypo name="dots-three-vertical" size={14} color="black" style={{ paddingTop: 5 }} />
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.boxItem} onPress={() => navigation.navigate("ProducDetail")}>
                                            <View style={styles.menuBrand}>
                                                <View style={styles.Pro_image}>
                                                    <Image source={pro1} style={styles.imagestyle} />
                                                </View>
                                                <View style={styles.Pro_detail}>
                                                    <Text style={styles.nameBrand}>Shoes</Text>
                                                    <Text style={styles.pro_price}>$56</Text>
                                                    <Star score={4} style={styles.starStyle} />
                                                    <Entypo name="dots-three-vertical" size={14} color="black" style={{ paddingTop: 5 }} />
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.boxItem} onPress={() => navigation.navigate("ProducDetail")}>
                                            <View style={styles.menuBrand}>
                                                <View style={styles.Pro_image}>
                                                    <Image source={pro1} style={styles.imagestyle} />
                                                </View>
                                                <View style={styles.Pro_detail}>
                                                    <Text style={styles.nameBrand}>Shoes</Text>
                                                    <Text style={styles.pro_price}>$56</Text>
                                                    <Star score={4} style={styles.starStyle} />
                                                    <Entypo name="dots-three-vertical" size={14} color="black" style={{ paddingTop: 5 }} />
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </Tabs.View> 
                                <Tabs.View>
                                    <View style={{ backgroundColor: 'white', width: '100%', flex: 1, justifyContent: 'center' }} >
                                        <List borderColor='white' marginX='3' >
                                            <List.Item style={styles.borderitem}>
                                                <FontAwesome5 style={styles.leftIcon} name="user" />
                                                <View>
                                                    <Text style={styles.textCenter} >Dunh Vidou</Text>
                                                    <Text style={styles.textdata} >2021 May 18  /  09:21 am</Text>
                                                </View>
                                                <FontAwesome name="trash-o" style={styles.rightIcon} />
                                            </List.Item>
                                            <List.Item style={styles.borderitem}>
                                                <FontAwesome5 style={styles.leftIcon} name="user" />
                                                <View>
                                                    <Text style={styles.textCenter} >Dunh Vidou</Text>
                                                    <Text style={styles.textdata} >2021 May 18  /  09:21 am</Text>
                                                </View>
                                                <FontAwesome name="trash-o" style={styles.rightIcon} />
                                            </List.Item>

                                            <List.Item style={styles.borderitem}>
                                                <FontAwesome5 style={styles.leftIcon} name="user" />
                                                <View>
                                                    <Text style={styles.textCenter} >Kakada Keo</Text>
                                                    <Text style={styles.textdata} >2021 May 18  /  09:34 pm</Text>
                                                </View>
                                                <FontAwesome name="trash-o" style={styles.rightIcon} />
                                            </List.Item>
                                            <List.Item style={styles.borderitem}>
                                                <FontAwesome5 style={styles.leftIcon} name="user" />
                                                <View>
                                                    <Text style={styles.textCenter} >Vann Sovey</Text>
                                                    <Text style={styles.textdata} >2021 May 18  /  02:14 pm</Text>
                                                </View>
                                                <FontAwesome name="trash-o" style={styles.rightIcon} />
                                            </List.Item>
                                            <List.Item style={styles.borderitem}>
                                                <FontAwesome5 style={styles.leftIcon} name="user" />
                                                <View>
                                                    <Text style={styles.textCenter} >Yem Rahang</Text>
                                                    <Text style={styles.textdata} >2021 May 18  /  09:21 am</Text>
                                                </View>
                                                <FontAwesome name="trash-o" style={styles.rightIcon} />
                                            </List.Item>
                                            <List.Item style={styles.borderitem}>
                                                <FontAwesome5 style={styles.leftIcon} name="user" />
                                                <View>
                                                    <Text style={styles.textCenter} >Pisey</Text>
                                                    <Text style={styles.textdata} >2021 May 18  /  09:34 pm</Text>
                                                </View>
                                                <FontAwesome name="trash-o" style={styles.rightIcon} />
                                            </List.Item>
                                            <List.Item style={styles.borderitem}>
                                                <FontAwesome5 style={styles.leftIcon} name="user" />
                                                <View>
                                                    <Text style={styles.textCenter} >San ChanThea</Text>
                                                    <Text style={styles.textdata} >2021 May 18  /  02:14 pm</Text>
                                                </View>
                                                <FontAwesome name="trash-o" style={styles.rightIcon} />
                                            </List.Item>
                                            <List.Item style={styles.borderitem}>
                                                <FontAwesome5 style={styles.leftIcon} name="user" />
                                                <View>
                                                    <Text style={styles.textCenter} >San ChanThea</Text>
                                                    <Text style={styles.textdata} >2021 May 18  /  02:14 pm</Text>
                                                </View>
                                                <FontAwesome name="trash-o" style={styles.rightIcon} />
                                            </List.Item>
                                            <List.Item style={styles.borderitem}>
                                                <FontAwesome5 style={styles.leftIcon} name="user" />
                                                <View>
                                                    <Text style={styles.textCenter} >San ChanThea</Text>
                                                    <Text style={styles.textdata} >2021 May 18  /  02:14 pm</Text>
                                                </View>
                                                <FontAwesome name="trash-o" style={styles.rightIcon} />
                                            </List.Item>
                                            <List.Item style={styles.borderitem}>
                                                <FontAwesome5 style={styles.leftIcon} name="user" />
                                                <View>
                                                    <Text style={styles.textCenter} >San ChanThea</Text>
                                                    <Text style={styles.textdata} >2021 May 18  /  02:14 pm</Text>
                                                </View>
                                                <FontAwesome name="trash-o" style={styles.rightIcon} />
                                            </List.Item>
                                            <List.Item style={styles.borderitem}>
                                                <FontAwesome5 style={styles.leftIcon} name="user" />
                                                <View>
                                                    <Text style={styles.textCenter} >San ChanThea</Text>
                                                    <Text style={styles.textdata} >2021 May 18  /  02:14 pm</Text>
                                                </View>
                                                <FontAwesome name="trash-o" style={styles.rightIcon} />
                                            </List.Item>
                                            <List.Item style={styles.borderitem}>
                                                <FontAwesome5 style={styles.leftIcon} name="user" />
                                                <View>
                                                    <Text style={styles.textCenter} >San ChanThea</Text>
                                                    <Text style={styles.textdata} >2021 May 18  /  02:14 pm</Text>
                                                </View>
                                                <FontAwesome name="trash-o" style={styles.rightIcon} />
                                            </List.Item>
                                            <List.Item style={styles.borderitem}>
                                                <FontAwesome5 style={styles.leftIcon} name="user" />
                                                <View>
                                                    <Text style={styles.textCenter} >San ChanThea</Text>
                                                    <Text style={styles.textdata} >2021 May 18  /  02:14 pm</Text>
                                                </View>
                                                <FontAwesome name="trash-o" style={styles.rightIcon} />
                                            </List.Item> 
                                        </List>
                                    </View>
                                </Tabs.View>
                            </Tabs.Views>
                        </Tabs>
                    </NativeBaseProvider>
                </ScrollView>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    tabDashboard: {
        flexDirection: 'column',
        flex: 1,
        flexWrap: 'wrap'
    },
    boxItem: {
        height: 220,
        width: '47%',
        borderRadius: 5,
        margin: 5,
        backgroundColor: '#fafafa'
    },
    menuBrand: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagestyle: {
        width: '100%',
        height: '100%'
    },
    Pro_image: {
        flex: 3,
        width: '100%'
    },
    Pro_detail: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 7
    },
    nameBrand: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    pro_price: {
        color: 'red',
        fontWeight: 'bold'
    },
    starStyle: {
        width: 100,
        height: 20,
        marginBottom: 20,
    },
    borderitem: {
        borderTopWidth: 2,
        borderTopColor: '#f2f2f2',
        borderBottomWidth: 2,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        height: 80,
        flex: 1,
        justifyContent: 'space-between',
    },
    leftIcon:
    {
        fontSize: 24,
        color: '#0A8791',
        marginLeft: 2,
        marginRight: 10
    },
    textdata: {
        color: 'gray',
        fontSize: 12,

    },
    textCenter1: {
        fontSize: 27,
        fontWeight: 'bold',
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 10,


    },
    textCenter: {
        fontSize: 16,
        fontWeight: '600'
    },
    rightIcon: {
        color: 'black',
        position: 'absolute',
        right: 10,
        top: 3,
        fontSize: 24
    }
});
export default UserProfile;