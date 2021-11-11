import * as React from "react";
import { View, StyleSheet, Text, TouchableOpacity,ImageBackground } from 'react-native';
const TabShop = props => { 
    return props.ShopList.map
    (ele =>
        <TouchableOpacity style={props.ShopList, styles.borderitem} key={ele.id}>
            <ImageBackground source={{ uri: ele.logo_company }} borderRadius={2} style={{ height: 160, width: '100%' }}>
                <View style= {styles.boxtext}>
                    <Text style={ styles.shopName}>{ele.name}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    borderitem: {
        width: '48%',
        marginBottom: 5,
        margin: 3
    },
    boxtext:{ flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
     }, 
     shopName:{
         fontSize: 25, fontWeight: 'bold', zIndex: 1, color: 'black'
        }
    });
export default TabShop;