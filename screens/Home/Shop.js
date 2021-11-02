import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native';
import { Feather, AntDesign, Ionicons } from '@expo/vector-icons';
import { View, ScrollView, Keyboard, Text } from 'react-native';
import Datajson from '../Components/Datajson';
import TabBrand from '../Components/TabBrand'
import {
    NativeBaseProvider,
    VStack,
    Input,
    Icon,
    Tabs
} from 'native-base';
import { paddingLeft } from 'styled-system';
const Brand = ({ navigation }) => {
    const [Data, setData] = useState([]);
    useEffect(() => {
        setData(Datajson.data.success.data);

    }, []);
    return (
        <View style={{ flex: 1, width: '100%' }}>
            <View style={{ flex: 1, width: '100%' }}>

                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: "flex-end", backgroundColor: '#f2f2f2' }}>
                        <View style={{ flex: 4, flexDirection: 'row', paddingLeft: 12 }}>
                            <AntDesign name="left" size={24} color="#008080"
                                onPress={() => navigation.goBack()} />
                            <Text style={{ fontSize: 16, color: 'gray', fontWeight: '500', paddingLeft: 10, paddingBottom: 2 }}>Shop</Text>

                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <Feather name="search" size={24} color="#008080" />
                            {/* <Feather name="upload" size={24} color="#008080" onPress={() => setModalVisible(true)} /> */}
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 10, backgroundColor: '#f2f2f2' }}>
                    <NativeBaseProvider style={{ backgroundColor: 'red' }} onPress={Keyboard.dismiss}>
                        <VStack space={2} width="100%">
                            <VStack width="100%" space={2}  >
                                <Input borderRadius={10}
                                    placeholder="Search categories,brand,shop...."
                                    variant="outline"

                                    width='90%'
                                    py={3}
                                    px={1}


                                    InputLeftElement={<Icon size='sm' ml={2} size={6} color="gray.400" as={<Ionicons name="ios-search" />} />}
                                    
                                    InputRightElement={
                                        <Ionicons name="options" size={24} color="black" style={{ paddingRight: 12 }} />
                                    }
                                />
                            </VStack>
                        </VStack>
                    </NativeBaseProvider>
                </View>
            </View>
            <View style={{ flex: 4, backgroundColor: '#f2f2f2', width: '100%',paddingTop:10}}>
                <ScrollView style={{ width: '100%', }}>
                <Text style={{fontSize:16, paddingLeft:20 ,fontWeight:'600'}}>Near By Restourents</Text>
                <Text style={{fontSize:12, color:'gray', paddingLeft:20}}>200+ Restourents found near you</Text>
                    <SafeAreaView>
                        <TabBrand BrandList={Data} />
                    </SafeAreaView>
                </ScrollView>
            </View>
        </View>

    )
}
export default Brand;