
import React, { useState, useEffect, useRef } from 'react'

import { Tabs, NativeBaseProvider, Center } from 'native-base';
import { View, Text, Image, ScrollView, Dimensions, StyleSheet, Button, IconButton } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomSheet from 'react-native-gesture-bottom-sheet';
import Star from 'react-native-star-view';
import ListFood from '../Components/Food/ListFood';
import { Feather, AntDesign, Ionicons } from '@expo/vector-icons';
import { ImageBackground } from 'react-native';
import { getAllItem, getAllCategory } from '../../store/item/action';
import { useDispatch, useSelector } from 'react-redux';
import Color from '../../constant/Color';
const { width, height } = Dimensions.get("window");
const ShopProfile = ({ route, navigation }) => {
    const items = useSelector(state => state.items);
    const { params } = route;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllItem(params.id));
        dispatch(getAllCategory(params.id));
    }, [dispatch]);
    const bottomSheet = useRef();
    return (
        <NativeBaseProvider>
            <View style={{ flex: 1, flexDirection: "column" }}>
                <ImageBackground source={{ uri: params.cover }}
                    style={{ width: '100%', flex: 1 }} borderBottomRightRadius={50} >

                </ImageBackground>
                <View style={{ flex: 2, }}>
                    <ScrollView >
                        <View style={{ flex: 1, padding: 6, paddingHorizontal: 18, flexDirection: 'row' }}>
                            <View style={{ height: '100%', justifyContent: 'center' }}>
                                <Image source={{ uri: params.logo }} style={{ width: 50, height: 50, borderRadius: 50 }} />
                            </View>
                            <View style={{ flex: 1, width: '100%' }}>
                                <Text style={styles.shopname}> {params.name}</Text>
                                <Text style={styles.shopabout}> {params.city}</Text>
                                <Star score={4} style={styles.starStyle} />
                            </View>
                        </View>
                        <View style={{ flex: 5 }}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View style={styles.Container}>
                                    <ListFood DataFood={items.allItem} />
                                </View>
                            </ScrollView>

                        </View>
                    </ScrollView>
                </View>
            </View>
        </NativeBaseProvider>
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
    shopname: {
        fontSize: 15,
        fontWeight: '500',
    },
    shopabout: {
        fontSize: 13,
        color: 'gray'
    },
    starStyle: {
        width: 100,
        height: 20
    },
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        alignItems: "center",
        justifyContent: "center"
    },
    modalBox: {
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        height,
        width,
        backgroundColor: "transparent"
    },
    content: {
        position: "absolute",
        bottom: 0,
        width: '100%',
        height: 400,
        borderTopLeftRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        borderTopRightRadius: 20,
        backgroundColor: "white",
        flex: 1,
        flexDirection: 'column'
    },
    textStyle: {
        fontSize: 22
    },
    box1: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    box2: {
        flex: 3,
        width: '100%',
        flexDirection: 'row',
        borderColor: '#e6e6e6',
        borderBottomWidth: 1
    },
    box3: {
        flex: 2,
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row'
        , alignItems: 'center'
    },
    box4: {
        flex: 2,

        width: '100%'
    },
    box5: {
        flex: 3,
        padding: 5,
        width: '100%',
        alignItems: 'center',
        // backgroundColor:'cyan',
        justifyContent: 'center'
    },
    Shopimage: {
        flex: 2,
        padding: 6,
        paddingLeft: 20
    },
    imgstyle: {
        width: '100%',
        height: '100%',

    },
    Shopname: {
        flex: 3,
        paddingLeft: 20,
        flexDirection: 'column',
        padding: 10,
        justifyContent: 'space-evenly'
    },
    num: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 20
    },
    increament: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },


});
export default ShopProfile;