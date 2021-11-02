import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'; 
const Homecategory = props => {
    const navigation = useNavigation();
    return props.CategoryList.map
        (ele =>
            <TouchableOpacity style={props.CategoryList, styles.boxItem} key={ele.id} 
            onPress={() => navigation.navigate("Category")}>
                <View style={styles.menuCategory}>
                    <View style={styles.img}>
                        <Image alt="PIC" source={{ uri: ele.icon }} style={styles.iconCategory} />
                    </View>
                </View>
            </TouchableOpacity>
        )
}
const styles = StyleSheet.create({
    boxItem: { height: 65, width: 65, borderRadius: 100, margin: 3, backgroundColor: '#d9d9d9' },
    menuCategory: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    nameCategory: { fontSize: 15, fontWeight: 'bold', color: 'black', alignItems:"center" },
    iconCategory: { width: '60%', height: '60%', },
    img: { 
        height: '100%',
        width: '100%',
        justifyContent:'space-evenly',
        alignItems:'center', 

    },



});
export default Homecategory;
