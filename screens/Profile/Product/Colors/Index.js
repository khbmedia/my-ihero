
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator, } from 'react-native';
import { List, NativeBaseProvider, } from "native-base";
import { FontAwesome } from '@expo/vector-icons';
import Color from '../../../Components/Color';
import axios from 'axios'
import React, { useState, useEffect } from 'react'

const ListColor = ({ navigation }) => {
    const [loading, setloading] = useState(true);
    const [posts, setPosts] = useState([])
    useEffect(() => {
        setTimeout(() => {
            axios.get('https://depot25.dev.khb.asia/api/front-product-color-index')
                .then(res => {
                    setPosts(res.data.success.data)
                    setloading(false);
                   
                })
                .catch(err => {
                    console.log(err)
                })
        }, 3000);
    })
    
    return (
        <View style={{ backgroundColor: 'white', width: '100%', flex: 1, justifyContent: 'center' }} >

            <NativeBaseProvider>
                <TouchableOpacity style={{ borderRadius: 10, alignItems: 'center' }} onPress={() => navigation.navigate("CreateColors",{ele:null})}>
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
                            (<Color ColorList={posts} />)
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
export default ListColor;