import * as React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import log from '../Assets/Images/Brand/image1.png';
import { style } from "styled-system";
const Category = props => {
    return props.CategoryList.map
        (ele =>
            <TouchableOpacity style={props.CategoryList, styles.boxItem} key={ele.id}>
                <View style={styles.menuCategory}>
                    <View style={styles.img}>
                        <Image alt="PIC" source={{ uri: ele.icon }} style={styles.iconCategory} />
                        <Text style={styles.nameCategory}>{ele.name} </Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
}
const styles = StyleSheet.create({
    boxItem: { height: 100, width: '25%', borderRadius: 10, margin: 10, backgroundColor: '#d9d9d9' },
    menuCategory: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    nameCategory: { fontSize: 15, fontWeight: 'bold', color: 'black', alignItems:"center" },
    iconCategory: { width: '60%', height: '60%', },
    img: { 
        height: 100,
        width: '100%',
        justifyContent:'space-evenly',
        alignItems:'center', 

    },



});
export default Category;
