
import { View, Text, StyleSheet, ScrollView, Image, Button, TouchableOpacity, ActivityIndicator, } from 'react-native';
import { List, NativeBaseProvider, } from "native-base";
import Category from '../../../Components/Category';
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { FontAwesome } from '@expo/vector-icons';

const ListProduct = ({ navigation }) => {
    const [loading, setloading] = useState(true);
    const [posts, setPosts] = useState([])
    useEffect(() => {
        setTimeout(() => {
            axios.get('https://depot25.dev.khb.asia/api/front-product-category-index')
                .then(res => {
                    setPosts(res.data.success.data)
                    setloading(false);
                    // console.log(res.data.succes);
                })
                .catch(err => {
                    console.log(err)
                })
        }, 3000);
    })

    return (
        <View style={{ backgroundColor: 'white', width: '100%', flex: 1, justifyContent: 'center' }} >

            <NativeBaseProvider>
                <TouchableOpacity style={{ borderRadius: 10, alignItems: 'center' }} onPress={() => navigation.navigate("CreateCategories")}>
                    <View style={{ borderColor: 'gray', borderWidth: 0.3, marginTop: 13, width: '98%', }}>
                        <FontAwesome style={{ textAlign: 'center' }} name="upload" size={24} color="#0A8791" />
                        <Text style={{ fontSize: 15, color: '#666666', textAlign: 'center' }}>Add New</Text>
                    </View>
                </TouchableOpacity>
                <ScrollView  >
                    <List borderColor='white'  >
                        {loading ?
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,position:'relative', paddingTop:200}}>
                            <ActivityIndicator size="large" color="#0A8791"/>
                        </View>
                            :
                            (<Category CategoryList={posts} />)
                        }
                    </List>
                </ScrollView>
            </NativeBaseProvider>
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


    btn_edit: {
    }
})
export default ListProduct;