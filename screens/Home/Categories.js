import React, { useState, useEffect } from 'react'
import { View,  ScrollView, ActivityIndicator, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import TabCategory from '../Components/TabCategory'; 
const Category = ({ navigation }) => {
    const [loading, setloading] = useState(true);
    const [posts, setPosts] = useState([])
    useEffect(() => {
        setTimeout(() => {
            axios.get('https://depot25.dev.khb.asia/api/front-product-category-index')
                .then(res => {
                    setPosts(res.data.success.data)
                    setloading(false);
                })
                .catch(err => { console.log(err) })
        }, 2000);
    })
    return ( 
        <SafeAreaView style={{marginTop:100}}>
            {loading ?
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color="#0A8791" style={styles.ActivityIndicator} />
                </View>
                : ( 
                    <ScrollView>
                        <View style={styles.rootItem}>
                            <View style={styles.wrapItem}>
                                <TabCategory CategoryList={posts}/>
                            </View>
                        </View>
                    </ScrollView>
                     )}
        </SafeAreaView>
 ) }
const styles = StyleSheet.create({
    boxItem: { 
        height: 100, 
        width: '30%', 
        borderRadius: 5, 
        margin:3, 
        backgroundColor: '#d9d9d9' , 
        alignItems:'center'},
    menuBrand: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' },
    nameBrand: { 
        fontSize: 15, 
        fontWeight: 'bold', 
        color: 'black' },
    iconBrand: { 
        fontSize: 24, 
        color: "#0A8791" },
    rootItem:{
        backgroundColor: '#f2f2f2', 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        margin: 2 
    },
    ActivityIndicator:{ 
        position: 'absolute', 
        top: 200, },
    wrapItem:{ 
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'center', 
        flexWrap: "wrap", 
        alignItems: 'center' 
    } 
});
export default Category;