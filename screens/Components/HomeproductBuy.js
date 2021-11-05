import * as React from "react";
import { Entypo } from '@expo/vector-icons';
import Star from 'react-native-star-view';
import { View, StyleSheet, Text, TouchableOpacity,Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { borderRadius } from "styled-system";
const HomeproductBuy = props => { 
    const navigation = useNavigation();
    const editColor = (ele) => {
          navigation.navigate("ShopProfile" );
    //       navigation.navigate("ProductStack",{ screen: "ProducDetail",params: {ele} 
    // });
        // // navigation.goBack();
        console.log('OUT'); 
    }
    return props.Pro_List.map
        (ele =>
            <TouchableOpacity style={props.Pro_List, styles.boxItem} key={ele.id} onPress={() => editColor(ele)} >
                <View style={styles.menuBrand}>
                    <View style={styles.Pro_image}>
                        <Image source={{url:ele.cover}} style={styles.imagestyle} />
                    </View>
                    <View style={styles.Pro_detail}>
                        <Text style={styles.nameBrand}>{ele.name}</Text>
                        <Text style={{fontSize:11,color:'gray'}}>{ele.city}</Text>
                        <Star score={4} style={styles.starStyle} />

                    </View>
                </View> 
            </TouchableOpacity>
        )
        }
const styles = StyleSheet.create({
    boxItem: {
        height: 205,
        width: 220,
        borderRadius: 9, 
        marginHorizontal:5,
        backgroundColor: '#fffFFF',
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
        alignItems: 'center'
    },
    imagestyle: {
        width: '100%',
        height: '90%',
        borderRadius:6,
        
    },
    Pro_image: {
        flex: 4,
        width: '100%',
        padding:3
    },
    Pro_detail: {
        flex: 2,
        width: '100%',
        flexDirection: 'column',
        paddingHorizontal: 7
    },
    nameBrand: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    pro_price: {
        color: 'red',
        fontWeight: 'bold'
    },
    starStyle: {
        width: 100,
        height: 20,
        
    }
    });
export default HomeproductBuy;
