

import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native'; 
import { View, ScrollView,ActivityIndicator  } from 'react-native';
import axios from 'axios'
import TabBrand from '../Components/TabBrand'
const Brand = ({ navigation }) => {
    const [loading, setloading] = useState(true);
    const [posts, setPosts] = useState([])
    useEffect(() => {
        setTimeout(() => {
            axios.get('https://depot25.dev.khb.asia/api/front-product-brand-index')
                .then(res => {
                    setPosts(res.data.success.data)
                    setloading(false);
                })
                .catch(err => { console.log(err)
                })
        }, 2000); 
    })
    return (
        <ScrollView style={{ width: '100%', marginTop: 40 }}>
            <SafeAreaView>
                {loading ?
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size="large" color="#0A8791" style={{ position: 'absolute', top: 200, }} />
                    </View> 
                : (<TabBrand BrandList={posts}/>)}
            </SafeAreaView>

        </ScrollView>
    )
}
export default Brand;