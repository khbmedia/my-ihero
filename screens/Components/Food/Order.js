
import * as React from "react";
import Star from 'react-native-star-view';
import { Entypo, MaterialCommunityIcons, Ionicons, EvilIcons, FontAwesome5, AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { Tabs, NativeBaseProvider, Center, Box, VStack, Button, Icon } from 'native-base';
import { useNavigation } from "@react-navigation/native";
import { ImageBackground } from "react-native";

const ProductList = props => {
    const navigation = useNavigation();
    return props.ListFood.map
        (ele =>
            <TouchableOpacity style={props.ListFood} key={ele.id} onPress={() => ProductDetailScreen(ele)} >
                <Box
                    bg="white"
                    shadow={2}
                    rounded="lg"
                    minWidth="95%"
                    width="100%"
                    height={140}
                    p={3}
                    mt={3} >
                    <VStack space={1}>
                        <View style={styles.container}>
                            <View style={styles.container_content1}>
                                <View style={styles.container_content1_left}>
                                    <Image source={{ url: ele.product_image[0].path }} style={styles.imagestyle} />
                                </View>
                                <View style={styles.container_content1_right}>
                                    <Text style={styles.nameProduct}>{ele.name}                  <Text style={{ color: 'red', }}>${ele.product_variation[0].product_variation_condition[0].price_in_unit}</Text></Text>
                                    <Text style={styles.dateProduct}>{ele.created_at.split('T')[0]}</Text>
                                </View>
                            </View>
                            <View style={styles.container_content2}>
                                <View style={styles.btn}>
                                    <Text style={{color:'#fff'}}>Reorder</Text>
                                </View>
                                <View style={styles.btn1}></View>
                                <View style={styles.btn3}>
                                    <Text style={{color:'#fff'}}>Get Help</Text>

                                </View>
                            </View>
                        </View>
                    </VStack>
                </Box>

            </TouchableOpacity>
        )
}
const styles = StyleSheet.create({
    imagestyle: {
        width: '100%',
        height: '100%',
        borderRadius: 10

    },
    container: {
        flex: 1,
        flexDirection: 'column',
        width: '100%'
    },
    container_content1: {
        flex: 2,
        width: '100%',
        flexDirection: 'row',

    },
    container_content2: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        flexDirection: 'row',
        alignItems: 'center', textAlignVertical: 'center',
 
        marginTop:6
    },
    btn: {
        flex: 2,
        backgroundColor: '#0A8791',
        width: 140,
        height: '90%',
        borderRadius: 10,
        justifyContent:'center',
        alignItems:'center'
    },
    btn3: {
        flex: 2,
        backgroundColor: '#737373',
        width: 140,
        height: '90%',
        borderRadius: 6,
        justifyContent:'center',
        alignItems:'center'
    },
    btn1: {
        flex: 1,
        width: 120,
        height: '40%',
        
    },

    container_content1_left: {
        flex: 1,
        width: '100%',

    },
    container_content1_right: {
        flex: 2,
        width: '100%',
        justifyContent: 'space-evenly',

    },
    nameProduct: {
        color: 'black',
        fontSize: 17,
        fontWeight: '400', paddingHorizontal: 20
    },
    dateProduct: {
        color: 'gray',
        fontSize: 13, paddingHorizontal: 20
    }


});
export default ProductList;