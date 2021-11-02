import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native';
import { Feather, AntDesign, Ionicons } from '@expo/vector-icons';
import { View, ScrollView, Keyboard, Text } from 'react-native';
import Datajson from '../Components/Datajson';
import TabBrand from '../Components/TabBrand'
 
import { paddingLeft } from 'styled-system';
import { ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native';
const GetStart = ({ navigation }) => {
    const [Data, setData] = useState([]);
    useEffect(() => {
        setData(Datajson.data.success.data);

    }, []);
    return (
        <View style={{ flex: 1, width: '100%',backgroundColor:'#fff'}}>
                <View style={{flex:1}}></View>
            <View style={{flex:6,width:'100%',backgroundColor:'#fff',padding:30,justifyContent:'center',alignItems:'center'}}>
                <ImageBackground source={{uri:'http://cdn.shopify.com/s/files/1/0775/2687/collections/Fast-free-delivery-logo-with-bike-man-on-transparent-background-PNG_1200x1200.png?v=1610116424'}}
                style={{width:'100%',height:'99%',bottom:0,position:'absolute'}}/>
            </View>
            <View style={{flex:6,width:'100%',backgroundColor:'#fff',justifyContent:'flex-start',alignItems:'center'}}>
                <Text style={{fontSize:22,fontWeight:'600',color:'#4d4d4d',paddingBottom:10}}>Fastest Delivery</Text>
                <Text style={{textAlign:'center',paddingHorizontal:35,fontSize:16.5,color:'#808080',paddingBottom:30}}>we make food Ordering fast,simple and free-no matter, if you order online or case</Text>
                <TouchableOpacity style={{height:50,backgroundColor:'#0A8791',width:'50%',borderRadius:20,}}
                onPress={()=>navigation.navigate('Home')}>
                    <Text style={{color:'#fff',textAlign:'center',paddingTop:13,fontSize:18}}>Get Start</Text>
                </TouchableOpacity>
            </View> 
        </View>

    )
}
export default GetStart;