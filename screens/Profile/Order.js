import React, { useState, useEffect } from 'react'
import { View, Text, Image, ScrollView, Pressable, StyleSheet } from 'react-native';
import { Tabs, NativeBaseProvider, Center, Box, VStack, Button, Icon } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import Order from '../Components/Food/Order'
import Datajson from '../Components/Datajson';
import { background, backgroundColor } from 'styled-system';
import { ImageBackground, TouchableOpacity } from 'react-native';
import { Feather, AntDesign, Ionicons } from '@expo/vector-icons';
const MyOrder = ({ navigation }) => {
    const [Data, setList] = useState([]);
    useEffect(() => {
        setList(Datajson.data.success.data);
        console.log(Data);

    }, []);
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: "flex-end", paddingHorizontal: 10, backgroundColor: '#fff', marginBottom: 10 }}>
                <View style={{ flex: 4, backgroundColor: '#fff' }}>
                    <AntDesign name="left" size={24} color="#000000"
                        onPress={() => navigation.goBack()} />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <Feather name="search" size={24} color="black" />
                    <Feather name="upload" size={24} color="black" onPress={() => setModalVisible(true)} />
                </View>
            </View>
            <View style={{ flex: 8, }}>
                <ScrollView style={{ width: '100%', backgroundColor: '#fff' }}>
                    <NativeBaseProvider>
                        <Tabs align='center' colorScheme="warning">
                            <Tabs.Bar justifyContent='space-evenly'>
                                <Tabs.Tab>Pre Order</Tabs.Tab>
                                <Tabs.Tab>Oncoming</Tabs.Tab>
                                <Tabs.Tab>History</Tabs.Tab>
                            </Tabs.Bar>
                            <Tabs.Views>
                                <Tabs.View>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', flexWrap: "wrap" }}>
                                        <View style={styles.menuBrand}>
                                            <Order ListFood={Data} />
                                        </View>
                                    </View>
                                </Tabs.View>
                                <Tabs.View>
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                        <ImageBackground source={{ uri: 'https://static9.depositphotos.com/1605004/1140/v/450/depositphotos_11408313-stock-illustration-shopping-cart.jpg' }
                                        }
                                            style={{ width: 200, height: 200 }}>

                                        </ImageBackground>
                                        <View style={{ flex: 6, width: '100%', backgroundColor: '#fff', justifyContent: 'flex-start', alignItems: 'center' }}>
                                            <Text style={{ fontSize: 22, fontWeight: '600', color: '#4d4d4d', paddingBottom: 20 }}>Fastest Delivery</Text>
                                            <Text style={{ textAlign: 'center', paddingHorizontal: 35, fontSize: 16.5, color: '#808080', paddingBottom: 40 }}>we make food Ordering fast,simple and free-no matter, if you order online or case</Text>
                                            <TouchableOpacity style={{ height: 50, backgroundColor: '#0A8791', width: '50%', borderRadius: 10, }}
                                                onPress={() => navigation.navigate('Shop')}>
                                                <Text style={{ color: '#fff', textAlign: 'center', paddingTop: 10, fontSize: 18 }}> <AntDesign name="pluscircleo" size={24} color="white" />  Get Start</Text>
                                                {/* <AntDesign name="pluscircleo" size={24} color="black" /> */}
                                            </TouchableOpacity>
                                        </View>
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
        alignItems: 'center',
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
    }
});
export default MyOrder;