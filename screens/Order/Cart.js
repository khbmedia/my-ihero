import React, { useState, useEffect } from 'react'
import { StyleSheet, ScrollView, Image, View, Text, } from 'react-native';

import CartDetail from '../Components/CartDetail';
import Datajson from '../Components/Datajson_Short';
import Cart from '../Components/Food/Cart';
import { List, NativeBaseProvider, Switch, Button, } from "native-base";
import { Ionicons, AntDesign, MaterialCommunityIcons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { flex, style, width } from 'styled-system';
import { TouchableOpacity } from 'react-native';
const ScreenCart = ({ route, navigation }) => {
    const [loading, setLoading] = useState(9);
    const [Data, setList] = useState([]);
    useEffect(() => {

        setList(Datajson.data.success.data);

    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: "flex-end", paddingBottom: 10 }}>
                    <View style={{ flex: 1, padding: 4 }}>
                        <AntDesign name="left" size={24} color="black"
                            onPress={() => navigation.goBack()} />
                    </View>
                    <View style={{ flex: 3, alignItems: 'center' }}>
                        <Text style={{ fontSize: 19, fontWeight: '600', color: 'black' }}>Profile</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <Ionicons name="notifications-outline" size={28} color="black" />
                    </View>
                </View>
            </View>
            <View style={styles.content}>
                <ScrollView>
                    <View style={{ flex: 1 }}>
                        <NativeBaseProvider >
                            {Data.map(ele => {
                                return(
                                    <View style={styles.card} key={ele.id}>
                                        <Cart
                                            
                                            id={ele.id}
                                            name={ele.name}
                                            price={ele.product_variation[0].product_variation_condition[0].price_in_unit}
                                            image={ele.product_image[0].path}
                                            size={ele.product_variation[0].size}
                                            onPress={() => navigation.navigate("productStack", { screen: "ProducDetail" })} />
                                    </View>);
                            })}
                        </NativeBaseProvider>
                        <View style={styles.promotecode}>
                            <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                            <Image source={{uri:'https://image.flaticon.com/icons/png/512/368/368200.png'}}
                            style={{width:40, height:40}}/>
                                
                            <Text style={{color:'gray',fontWeight:'500'}}> Add Promo Coden 
                             </Text>
                            </View>
                            
                            <View style={{flex:1,alignItems:'flex-end'}}>

                             <AntDesign name="right" size={24} color="black" style={{}} />
                            </View>
                          
                        </View>
                        <View style={styles.amount}>
                            <View style={{flex:1, flexDirection:'row',justifyContent:'space-between',paddingHorizontal:26,height:45,alignItems:'center', }}>
                                <Text style={{fontSize:16,fontWeight:'500'}}>Item Total</Text>
                                <Text style={{fontSize:16,fontWeight:'500'}}>$ 16.00</Text>
                                </View>
                            <View style={{flex:1, flexDirection:'row',justifyContent:'space-between',paddingHorizontal:26,height:45,alignItems:'center', }}>
                                <Text style={{fontSize:16,fontWeight:'500'}}>Discount</Text>
                                <Text style={{fontSize:16,fontWeight:'500'}}>$2.00</Text>
                                </View>
                            <View style={{flex:1, flexDirection:'row',justifyContent:'space-between',paddingHorizontal:26,height:45,alignItems:'center'}}>
                                <Text style={{fontSize:16,fontWeight:'500',color:'#0A8791'}}>Delivery</Text>
                                <Text style={{fontSize:16,fontWeight:'500',color:'#0A8791'}}>free</Text>
                                </View>
                            <View style={{flex:1, flexDirection:'row',justifyContent:'space-between' 
                            ,borderColor:'#e6e6e6', borderBottomWidth:1,borderTopWidth:1,height:70,alignItems:'center',paddingHorizontal:20
                            }}>
                                <Text style={{fontSize:24,fontWeight:'700',}}>Total</Text>
                                <Text style={{fontSize:24,fontWeight:'700',}}>$70.00</Text>
                                </View>
                            <View style={{flex:1, flexDirection:'row',justifyContent:'space-between'
                            ,paddingHorizontal:15, paddingVertical:10,height:70}}>
                                <TouchableOpacity
                                 style={{flex:1,backgroundColor:'#0A8791',borderRadius:5,alignItems:'center',justifyContent:'center'}}
                                onPress={()=>navigation.navigate('Payment')}
                                 >
                                    <Text style={{color:'white',fontSize:20,fontWeight:'500'}}>CheckOut</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1

    },
    header: {
        flex: 1,
        width: '100%',
        backgroundColor:'white'
    },
    content: {
        flex: 8,
        width: "100%",
        backgroundColor:'white'
    },
    promotecode:
    {
        flex:1,
        margin:4,
        borderColor:'#e6e6e6',
        borderTopWidth:1, 
        borderBottomWidth:1,
        height:60,
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20,
        justifyContent:'space-between'
    },
    amount:{
        flex:1, 
        width:'100%',
        flexDirection:'column'
        

    }

});
export default ScreenCart;