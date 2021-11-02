import * as React from 'react';
import { View, Text, Image, ScrollView, Pressable, StyleSheet } from 'react-native';
import { Tabs, NativeBaseProvider, Center, Box, VStack, Button, Icon } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import Star from 'react-native-star-view';
import image1 from '../Assets/Images/Brand/image1.png';
import { Entypo, MaterialCommunityIcons, Ionicons, EvilIcons, FontAwesome5, AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';
const OrderDetail = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ScrollView style={{}}>
                <NativeBaseProvider>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', flexWrap: "wrap"  }}>
                        <View style={styles.menuBrand}>
                            <Box
                                rounded="lg"
                                minWidth="95%"
                                width="350"
                                height={170}
                                marginTop={5}
                            >
                                <Box flex={1} w="90%" mx='auto' justifyContent="center">
                                    <VStack space={1}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text style={{ fontSize: 16, marginBottom: 1, fontWeight: 'bold' }}>Order No: 11212</Text>
                                            <Text style={{ fontSize: 13, marginBottom: 10, fontWeight: 'bold' }}>03-12-21</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text style={{ fontSize: 16, marginBottom: 1 }}>Tracking No: <Text style={{ fontWeight: 'bold' }}>02223</Text></Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text style={{ fontSize: 16, marginBottom: 10 }}>Qty: <Text style={{ fontWeight: 'bold' }}>3</Text></Text>
                                            <Text style={{ fontSize: 16, marginBottom: 10 }}>Total Amount: <Text style={{ fontWeight: 'bold', color: 'red' }}>$123</Text></Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ top: 15, fontSize: 16, marginBottom: 10, color: 'blue' }}></Text>
                                            <Text style={{ top: 15, fontSize: 16, marginBottom: 10, color: 'green' }}>Deliverd</Text>
                                        </View>
                                    </VStack>
                                </Box>
                            </Box>
                        </View>
                    </View>
                    <View style={{flex:1,alignItems:'center'}}>
                        <View style={{ width: 370, flex: 1, flexDirection: 'row', justifyContent: 'center', flexWrap: "wrap" }}>
                            <View style={styles.img}>
                                <Image source={image1} style={styles.image1} />
                            </View>
                            <View style={styles.menuBrand}>
                                <Box
                                    bg="white"
                                    shadow={2}
                                    rounded="lg"
                                    minWidth="50%"
                                    width="100"
                                    height={170}
                                    marginTop={5}
                                >
                                    <Box flex={1} w="90%" mx='auto' justifyContent="center">
                                        <VStack space={1}>
                                            <View>
                                                <Text style={{ fontSize: 16, marginBottom: 1, fontWeight: 'bold' }}>Air JoyDen 2</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Text style={{ fontSize: 16, marginBottom: 10 }}>Category: <Text style={{ fontWeight: 'bold' }}>Shoes</Text></Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Text style={{ fontSize: 16}}>Color: <Text style={{ fontWeight: 'bold' }}>Red</Text></Text>
                                                <Text style={{ fontSize: 16 }}>Size: <Text style={{ fontWeight: 'bold' }}>L</Text></Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Text style={{ fontSize: 16, marginBottom: 10 }}>Qty: <Text style={{ fontWeight: 'bold' }}>3</Text></Text>
                                                <Text style={{ fontSize: 16, marginBottom: 10 }}>Total: <Text style={{ fontWeight: 'bold', color: 'red' }}>$123</Text></Text>
                                            </View>
                                        </VStack>
                                    </Box>
                                </Box>
                            </View>
                        </View>

                        <View style={{ width: 370, flex: 1, flexDirection: 'row', justifyContent: 'center', flexWrap: "wrap" }}>
                            <View style={styles.img}>
                                <Image source={image1} style={styles.image1} />
                            </View>
                            <View style={styles.menuBrand}>
                                <Box
                                    bg="white"
                                    shadow={2}
                                    rounded="lg"
                                    minWidth="50%"
                                    width="100"
                                    height={170}
                                    marginTop={5}
                                >
                                    <Box flex={1} w="90%" mx='auto' justifyContent="center">
                                        <VStack space={1}>
                                            <View>
                                                <Text style={{ fontSize: 16, marginBottom: 1, fontWeight: 'bold' }}>Air JoyDen 2</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Text style={{ fontSize: 16, marginBottom: 10 }}>Category: <Text style={{ fontWeight: 'bold' }}>Shoes</Text></Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Text style={{ fontSize: 16}}>Color: <Text style={{ fontWeight: 'bold' }}>Red</Text></Text>
                                                <Text style={{ fontSize: 16 }}>Size: <Text style={{ fontWeight: 'bold' }}>L</Text></Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Text style={{ fontSize: 16, marginBottom: 10 }}>Qty: <Text style={{ fontWeight: 'bold' }}>3</Text></Text>
                                                <Text style={{ fontSize: 16, marginBottom: 10 }}>Total: <Text style={{ fontWeight: 'bold', color: 'red' }}>$123</Text></Text>
                                            </View>
                                        </VStack>
                                    </Box>
                                </Box>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', flexWrap: "wrap" }}>
                            <View style={styles.menuBrand}>
                                <Box
                                    bg="white"
                                    shadow={2}
                                    rounded="lg"
                                    minWidth="95%"
                                    width="350"
                                    height={170}
                                    marginTop={5}
                                >
                                    <Box flex={1} w="90%" mx='auto' justifyContent="center">
                                        <VStack space={1}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 15 }}>Order Information</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                                                <Text style={{ fontSize: 16}}>Shopping Address: <Text style={{ fontWeight: 'bold', flexDirection: "row-reverse" }}>Phnom Penh, Stueng Mean Chey, 90St</Text></Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Text style={{ fontSize: 16}}>Payment Method: <Text style={{ fontWeight: 'bold' }}>Cash on Develivery</Text></Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Text style={{ fontSize: 16 }}>Deliver Method: <Text style={{ fontWeight: 'bold'}}>Delivery, 3 Days, $123</Text></Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Text style={{ fontSize: 16 }}>Total: <Text style={{ fontWeight: 'bold', color: 'red'}}>$123</Text></Text>
                                            </View>
                                        </VStack>
                                    </Box>
                                </Box>
                            </View>
                        </View>
                    </View>
                </NativeBaseProvider>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    image1: {
        width: '100%',
        height: '100%'
    },
    img: {
        height: 170,
        width: '50%',
        marginTop: 20,
        justifyContent: 'center',
        backgroundColor: 'green',
    },
    boxItem: {
        height: 220,
        width: '47%',
        margin: 5,
        backgroundColor: '#fafafa'
    },
    menuBrand: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
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
    }
});
export default OrderDetail;