import React, { useState, useEffect } from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Product from '../Components/Product';
import Star from 'react-native-star-view';
import Datajson from '../Components/Datajson';
import { Tabs, NativeBaseProvider } from 'native-base';
const ListByShop = ({ navigation }) => {
    const [Data, setList] = useState([]);
    const funGetDataShop = async () => {
        // const response = await axios.get(Datajson);
        // console.log(response); 
    };
    useEffect(() => {
        setList(Datajson.data.success.data);
        
    }, []);
    return (
        <NativeBaseProvider>
            <Tabs align='center' colorScheme="warning">
                <Tabs.Bar  >
                    <Tabs.Tab>Brands</Tabs.Tab>
                    <Tabs.Tab>Categories</Tabs.Tab>
                    <Tabs.Tab>For Rents</Tabs.Tab>
                    <Tabs.Tab>For Sells</Tabs.Tab>
                </Tabs.Bar>
                <Tabs.Views>
                    <Tabs.View>
                        <ScrollView>
                            <View style={styles.Container}>
                                <Product Pro_List={Data} /> 
                            </View>
                        </ScrollView>
                    </Tabs.View>
                    <Tabs.View>
                        <ScrollView>
                            <View style={styles.Container}>
                                <Product Pro_List={Data}/> 
                            </View>
                        </ScrollView>
                    </Tabs.View>
                    <Tabs.View>
                        <ScrollView>
                            <View style={styles.Container}>
                                <Product Pro_List={Data}/> 
                            </View>
                        </ScrollView>
                    </Tabs.View>
                    <Tabs.View>
                        <ScrollView>
                            <View style={styles.Container}>
                                <Product Pro_List={Data} />
                            </View>
                        </ScrollView>
                    </Tabs.View>
                          
                </Tabs.Views>
            </Tabs>
        </NativeBaseProvider>

    )
}
const styles = StyleSheet.create({
    boxItem: {
        height: 220,
        width: '47%',
        borderRadius: 5,
        margin: 5,
        backgroundColor: '#fafafa'
    },
    menuBrand: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagestyle: {
        width: '100%',
        height: '100%'
    },
    Pro_image: {
        flex: 3,
        width: '100%'
    },
    Pro_detail: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 7
    },
    nameBrand: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    pro_price: {
        color: 'red',
        fontWeight: 'bold'
    },
    starStyle: {
        width: 100,
        height: 20,
        marginBottom: 20,
    },
    Container:{ 
        flex: 1, 
        flexDirection: 'row', 
        justifyContent:'space-between', 
        flexWrap: "wrap"  }
});
export default ListByShop;