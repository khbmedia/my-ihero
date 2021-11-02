import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, Button, TouchableOpacity, ImageBackground } from 'react-native';
import { List, NativeBaseProvider, } from "native-base";
import image1 from '../../../Assets/Images/Brand/image1.png';
import { Feather, AntDesign } from '@expo/vector-icons';
import Datajson from '../../../Components/Datajson';
import ProfileProduct from '../../../Components/ProfileProduct';
import { FontAwesome } from '@expo/vector-icons';
const ListProduct = ({ navigation }) => {
    const [Data, getProfileProductData] = useState([]);
    useEffect(() => {
        getProfileProductData(Datajson.data.success.data);
        
    }, []);
    return (
        <View style={{ backgroundColor: 'white', flex: 1, justifyContent: 'center' }} >
            <View style={{ flex: 5, flexDirection: 'row', justifyContent: 'center', flexWrap: "wrap", alignItems: 'center' }} >
                <TouchableOpacity style={styles.boxItem} onPress={() => navigation.navigate("BrandsStack", { screen: "IndexBrand" })} >
                    <View style={styles.menuBrand}>
                        <FontAwesome name='tags' style={styles.iconBrand} />
                        <Text style={styles.nameBrand}> Brand</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boxItem} onPress={() => navigation.navigate("CategoriesStack", { screen: "IndexCategories" })} >
                    <View style={styles.menuBrand}>
                        <FontAwesome name='car' style={styles.iconBrand} />
                        <Text style={styles.nameBrand}> Category</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boxItem} onPress={() => navigation.navigate("VideosStack", { screen: "IndexVideos" })} >
                    <View style={styles.menuBrand}>
                        <FontAwesome name='video-camera' style={styles.iconBrand} />
                        <Text style={styles.nameBrand}> Video</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boxItem} onPress={() => navigation.navigate("UnitsStack", { screen: "IndexUnits" })}  >
                    <View style={styles.menuBrand}>
                        <FontAwesome name='th-list' style={styles.iconBrand} />
                        <Text style={styles.nameBrand}> Units</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boxItem} onPress={() => navigation.navigate("ColorsStack", { screen: "IndexColors" })} >
                    <View style={styles.menuBrand}>
                        <FontAwesome name='tint' style={styles.iconBrand} />
                        <Text style={styles.nameBrand}> Color</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boxItem}  >
                    <View style={styles.menuBrand}>
                        <FontAwesome name='shopping-bag' style={styles.iconBrand} />
                        <Text style={styles.nameBrand}> Product</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, justifContent: "center", paddingVertical: 5, alignSelf: "center", marginTop: 9, width: '98%', height: 50, shadowColor: 'gray', borderWidth: 0.4, salignItems: 'center', justifyContent: 'center' }}
            >
                <TouchableOpacity onPress={() => navigation.navigate("CreateProducts")}>
                    <View >
                        <FontAwesome style={{ textAlign: 'center' }} name="upload" size={24} color="#0A8791" />
                        <Text style={{ fontSize: 15, color: '#666666', textAlign: 'center' }}>Add New</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 9 }}>
                <NativeBaseProvider>
                    <Text style={{ fontSize: 17, paddingTop: 10 , textAlign:'center', fontWeight:'700', color:'#0A8791'}}>Product List</Text>
                    <ScrollView style={{
                        marginTop: 10
                    }}>
                        <List borderColor='transparent' >
                        <ProfileProduct ProfileProductList={Data}></ProfileProduct>
                        </List>
                    </ScrollView>
                </NativeBaseProvider>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    head:
    {
        backgroundColor: 'red'
    },
    textCenter1: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    borderitem: {
        margin: 2,
        height: 100,
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#f2f2f2',
    },
    img: {
        flex: 2,
        height: 100,
        width: '50%',
        backgroundColor: 'green',
        marginLeft: -10
    },
    name:
    {
        flex: 2,
        width: '50%',
        height: 100,
        justifyContent: 'center',
        padding: 10
    },
    action: {

        paddingRight: 5,
        paddingTop: 3,
        height: 100,
    },
    Textname:
    {
        fontWeight: '400',
        fontSize: 20,
        color: '#666666'
    },
    image1: {
        width: '100%',
        height: '100%'
    },
    Textdate: {
        fontSize: 12,
        color: 'gray',
    },
    btn_edit: {
    },
    Category: {
        flex: 1, flexDirection: 'row', flexWrap: "wrap", justifyContent: 'center', alignItems: 'center'
    },
    boxItem: {
        height: '50%', width: '32.3%', borderRadius: 1, marginHorizontal: 1, marginVertical: 1,
    },
    menuBrand: { flex: 1, justifyContent: 'center', alignItems: 'center', borderColor: '#cccccc', borderWidth: 0.4 },
    nameBrand: { fontSize: 15, fontWeight: 'bold', color: '#666666' },
    iconBrand: { fontSize: 24, color: "#0A8791" }

})
export default ListProduct;