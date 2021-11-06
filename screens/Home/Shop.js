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
const Brand = ({ navigation }) => {
    const [Data, setData] = useState([]);
    useEffect(() => {
        setData(Datajson.data.success.data);

    }, []);
    return (
        <View style={{ flex: 1, width: '100%' }}>
           
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