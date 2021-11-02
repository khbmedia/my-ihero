import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, ScrollView, Keyboard } from 'react-native';
import { NativeBaseProvider, VStack, Input, Icon, Tabs } from 'native-base';
import Datajson from '../Components/Datajson';
import Product from '../Components/Product';
import HomeproductBuy from '../Components/HomeproductBuy';

import { EvilIcons, Ionicons, FontAwesome5, SimpleLineIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
const Home = ({navigation }) => {
    const [ProBuy, setProBuyData] = useState([]);
    const [Data, setList] = useState([]);
    useEffect(() => {
        setProBuyData(Datajson.data.success.data);
        setList(Datajson.data.success.data);
    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ backgroundColor: '#0A8791', flex: 1, borderBottomRightRadius: 50, }}>
                    <View style={styles.box}>
                        <View style={{ flexDirection: 'row' }}>
                            <EvilIcons name="location" size={24} color="white" style={{}} />
                            <Text style={{ fontSize: 13, paddingTop: 2, color: 'white' }}>Delivery to</Text>
                            <Text style={{ paddingHorizontal: 4, color: '#cc7a00', fontWeight: '700', paddingTop: 1 }}>Home</Text>
                            <Ionicons name="notifications-outline" size={24} color="black" style={{ position: 'absolute', right: 10 }} />
                        </View>
                    </View>
                    <View style={styles.box1}> 
                        <NativeBaseProvider style={{ backgroundColor: 'red' }} onPress={Keyboard.dismiss}>
                            <VStack space={2} width="100%">
                                <VStack width="100%" space={2}  >
                                    <Input borderRadius={10}
                                        placeholder="Search"
                                        variant="filled"
                                        width='90%'
                                        py={3}
                                        // keyboardType="text"
                                        px={1} 
                                        InputLeftElement={<Icon size='sm' ml={2} size={5} color="gray.400" as={<Ionicons name="ios-search" />} />}
                                        InputLeftElement={<Icon size='sm' ml={2} size={5} color="gray.400" as={<Ionicons name="ios-search" />} />}
                                        autocomplete="off"
                                        InputRightElement={
                                        <Ionicons name="options" size={24} color="black"
                                            onPress={() => navigation.navigate('Filter')}
                                            style={{ paddingRight: 12 }} />}/>
                                </VStack>
                            </VStack> 
                        </NativeBaseProvider>
                    </View>
                    <View style={styles.box2}>
                        <TouchableOpacity><Ionicons name="ios-fast-food-outline" size={24} color="#e6e6e6" /></TouchableOpacity>
                        <TouchableOpacity><FontAwesome5 name="hamburger" size={24} color="#e6e6e6" /></TouchableOpacity>
                        <TouchableOpacity><Ionicons name="ios-pizza-outline" size={24} color="#e6e6e6" /></TouchableOpacity>
                        <TouchableOpacity><SimpleLineIcons name="cup" size={24} color="#e6e6e6" /></TouchableOpacity>
                        <TouchableOpacity><Ionicons name="wine-outline" size={24} color="#e6e6e6" /></TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.content}>
                <View style={styles.content1} borderTopLeftRadius={50}>
                    <View style={{ flex: 1, width: '100%', marginTop: 40 }}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={{ flex: 9,marginBottom:10 }}>
                                <View style={styles.rootproduct}>
                                    <Text style={{ fontSize: 16, fontWeight: '700' }} color='#0A8791' paddingLeft={2}>Shop</Text>
                                    <Text style={styles.seemore} >See all</Text>
                                </View> 
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                                    <View style={styles.rootcomponent}>
                                        <HomeproductBuy Pro_List={ProBuy} />
                                    </View>
                                </ScrollView>
                            </View>
                            <View style={{ flex: 7, }}>
                                <NativeBaseProvider>
                                    <Tabs align='center' colorScheme="warning" >
                                        <Tabs.Bar backgroundColor='white' >
                                            <Tabs.Tab>Recent</Tabs.Tab>
                                            <Tabs.Tab active={true} >Favorite</Tabs.Tab>
                                            <Tabs.Tab>Top Tating</Tabs.Tab>
                                            <Tabs.Tab>For Sells</Tabs.Tab>
                                        </Tabs.Bar>
                                        <Tabs.Views>
                                            <Tabs.View> 
                                                <View style={styles.Container}>
                                                    <Product Pro_List={Data} />
                                                </View>
                                            </Tabs.View>
                                            <Tabs.View> 
                                                <View style={styles.Container}>
                                                    <Product Pro_List={Data} />
                                                </View>
                                            </Tabs.View>
                                            <Tabs.View> 
                                                <View style={styles.Container}>
                                                    <Product Pro_List={Data} />
                                                </View>
                                            </Tabs.View>
                                            <Tabs.View> 
                                                <View style={styles.Container}>
                                                    <Product Pro_List={Data} />
                                                </View>
                                            </Tabs.View>
                                        </Tabs.Views>
                                    </Tabs>
                                </NativeBaseProvider>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 3,
        backgroundColor: '#f2f2f2', 
    },
    header1: {
        flex: 1,
        backgroundColor: 'red',
        borderBottomRightRadius: 50, 
    },
    content: {
        flex: 8,
        backgroundColor: '#0A8791',
        borderBottomRightRadius: 50,
    },
    content1: {
        backgroundColor: '#f2f2f2',
        flex: 1
    },
    box: {
        flex: 1,
        marginBottom: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginTop:20
    },
    box1: {
        flex: 1,
        marginBottom: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    box2: {
        flex: 1,
        marginBottom: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingHorizontal: 10,
        flexDirection: 'row',
        // backgroundColor:'cyan'
    },
    rootcomponent: { 
        flexDirection: 'row',
        paddingTop: 6

    },
    rootproduct: {
        justifyContent: 'space-between',

        flexDirection: 'row',
        paddingLeft: 20
    },
    seemore: {
        color: 'red',
        fontSize: 14,
        marginRight: 6
    },
});
export default Home;