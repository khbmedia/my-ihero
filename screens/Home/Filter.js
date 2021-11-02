import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native';
import { Feather, AntDesign, Ionicons } from '@expo/vector-icons';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import Datajson from '../Components/Datajson';
import TabBrand from '../Components/TabBrand'
const Brand = ({ navigation }) => {
    const [Data, setData] = useState([]);
    useEffect(() => {
        setData(Datajson.data.success.data);
    }, []);
    return (
        <View style={{ flex: 1, width: '100%' }}>
            <View style={{ flex: 1, width: '100%' }}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: "flex-end", backgroundColor: '#f2f2f2' }}>
                        <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 12 }}>
                            <AntDesign name="left" size={24} color="#008080"
                                onPress={() => navigation.goBack()} />
                        </View>
                        <View style={styles.title}>
                            <Text style={styles.titleContent}>Filter</Text>
                            </View>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'  }}>
                            <Feather name="search" size={24} color="#008080" />
                            <Feather name="upload" size={24} color="#008080" onPress={() => setModalVisible(true)} />
                        </View>
                    </View>
                </View>
            
            </View>
            <View style={{ flex: 8, backgroundColor: '#f2f2f2', width: '100%',paddingTop:10}}>
                <ScrollView style={{ width: '100%', }}>
                <Text style={{fontSize:16, paddingLeft:20 ,fontWeight:'600'}}>Near By Restourents</Text>
                <Text style={{fontSize:12, color:'gray', paddingLeft:20}}>200+ Restourents found near you</Text>
                    <SafeAreaView>
                        <TabBrand BrandList={Data} />
                    </SafeAreaView>
                </ScrollView>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    title: {
        flex: 1, 
        width:'100%',
        alignItems:'center'
       
    },
    titleContent:{
        fontSize:16,
        fontWeight:'600'
    }
})
export default Brand;