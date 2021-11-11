
import React, { useState, useRef } from 'react';
import Star from 'react-native-star-view';
import BottomSheet from 'react-native-gesture-bottom-sheet';
import { View, StyleSheet, Text, TouchableOpacity, Image,ImageBackground } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { AntDesign, Ionicons } from '@expo/vector-icons';
const ProductList = props => {
    const navigation = useNavigation();
    const ProductDetailScreen = (ele) => {
        navigation.navigate("ShopProfile");
    }
    const[Value,setVAlue]=useState(1);
    const[Price,setPrice]=useState(15);
    const bottomSheet = useRef();
    const decreament=()=>{
        if(Value>1){            
            setVAlue(Value-1);
        }
    }
    const increament=()=>{
        if(Value<10){ 
            setVAlue(Value+1); 
        }
    }
    return props.DataFood.map
        (ele =>
            <TouchableOpacity style={props.DataFood, styles.boxItem} key={ele.id} onPress={() => ProductDetailScreen(ele)} >
                <View style={styles.menuBrand}>
                    <View style={styles.Pro_image}>
                        <Image source={{ url: ele.image}} style={styles.imagestyle} />
                    </View>
                    <View style={styles.Pro_detail}>
                        <Text style={styles.nameBrand}>{ele.name}</Text>

                        <Text style={{ color: 'gray', fontSize: 12 }}>{ele.name}
                        </Text>
                        <View style={styles.aboutshop}>
                        <Text style={styles.pro_price}>$ {ele.price}</Text>
                        <TouchableOpacity  onPress={() => bottomSheet.current.show()}>
                        <Ionicons name="add-circle-sharp" size={34} color="#ff9900"   />
                        </TouchableOpacity>
                        </View>

                    </View>
                </View>
                <BottomSheet
                draggable={false}
                hasDraggableIcon
                ref={bottomSheet}
                height={400}>
                <View style={styles.content}>
                    <View style={styles.box1}>
                        <AntDesign name="up" size={24} color="black" />
                    </View>
                    <View style={styles.box2}>
                        <View style={styles.Shopimage}>
                            <ImageBackground source={{ uri: 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/12/cover-for-street-food-in-sydney.jpg' }}
                                style={styles.imgstyle}
                                borderRadius={10}>
                            </ImageBackground>
                        </View>
                        <View style={styles.Shopname}>
                            <Text style={{ fontSize: 15, color: "gray" }}>Golden Double</Text>
                            <Text style={{ fontSize: 15, color: 'gray' }}>Burger Muffin</Text>
                            <Text style={{ fontSize: 13, color: 'orange' }}>Mcdonald'S</Text>
                            <Text style={{ fontSize: 18, fontWeight: '500' }}>${Price*Value}.00 </Text>
                        </View>
                    </View>
                    <View style={styles.box3}>
                        <View style={styles.num}>
                            <Text style={{ fontSize: 20, fontWeight: '700' }}>Quantity</Text>
                        </View>
                        <View style={styles.increament}>
                        <TouchableOpacity onPress={()=>decreament()}>
                            <AntDesign name="minuscircle" size={40} color="orange" />
                            </TouchableOpacity>
                            <Text style={{ paddingHorizontal: 10, fontSize: 23 }}>{Value}</Text>
                            <TouchableOpacity onPress={()=>increament()}>
                            <Ionicons name="add-circle" size={50} color="orange" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.box4}></View>
                    <View style={styles.box5}>
                        <View style={{ backgroundColor: 'red', width: '90%', height: '40%', borderRadius: 10, backgroundColor: "#339966" }} >
                            <Text style={{ textAlign: 'center', paddingTop: 11, fontWeight: '600', fontSize: 16, color: 'white' }}
                                onPress={() => {bottomSheet.current.close() ,navigation.navigate("Cart")}} >
                                Add To Cart</Text>
                        </View>
                    </View>
                </View>
            </BottomSheet>
            </TouchableOpacity>
        )
}
const styles = StyleSheet.create({
    boxItem: {
        height: 90,
        width: '98%',
        borderRadius: 7,
        padding: 3,

        marginVertical: 2,
        marginHorizontal: 5,
        backgroundColor: '#fafafa',


        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
        elevation: 1,
    },
    menuBrand: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    imagestyle: {
        width: '100%',
        height: '95%',
        borderRadius: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    Pro_image: {
        flex: 1,
        width: '100%',

    },
    Pro_detail: {
        flex: 3,
        justifyContent: 'space-between',
        width: '100%',
        flexDirection: 'column',
        paddingVertical: 15,
        paddingHorizontal: 15
    },
    nameBrand: {
        fontSize: 16,
        fontWeight: 'bold',
        
    },
    pro_price: {
        color: 'red',
        fontWeight: 'bold',paddingTop:10
    },
    starStyle: {
        width: 80,
        height: 20,
        marginBottom: 20,
        bottom: 1,
        position: 'absolute'
    },
    aboutshop:{ 
        color: '#bfbfbf', 
        fontSize: 12, 
        justifyContent:'space-between',
        flexDirection:'row',
        padding:6
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
        justifyContent:'center'
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
export default ProductList;