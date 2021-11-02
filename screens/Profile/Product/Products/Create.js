import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { NativeBaseProvider, Box, Heading, VStack, FormControl, Input, } from 'native-base';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome } from '@expo/vector-icons';
const CreateProduct = ({ navigation }) => {
    const [image, setImage] = useState(null);
    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result);
        if (!result.cancelled) {
            setImage(result.uri);
        }
    };
    return (
        <NativeBaseProvider>
            <Box flex={1} p={1} w="98%" mx='1' justifyContent="center"  >
                <Heading size="lg" color='#0A8791' marginBottom='7' textAlign='center' >Add Brand</Heading>
                <VStack space={2} mt={2}>
                    <View style={{ marginBottom: 50 }}> 
                        <ScrollView >
                            <FormControl mb={4} >
                                {image && <Image source={{ uri: image }} style={{ marginHorizontal: 110, borderRadius: 100, marginBottom: 20, width: 150, height: 150 }} />}
                                <TouchableOpacity onPress={pickImage}>
                                    <View style={{backgroundColor:'#d9d9d9', width: "100%",   marginBottom: 20,borderWidth:0.2, borderColor:'#0A8791'}} borderRadius={2} >
                                    <FontAwesome style={{ textAlign: 'center' }} name="upload" size={24} color="#0A8791" />
                                        <Text style={{ textAlign: "center", color: "#000000" }}>Browse File</Text>
                                    </View>
                                </TouchableOpacity>
                                <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}>
                                    Product Name
                                </FormControl.Label>
                                <Input border=' 0.2px solid gray' placeholder=' Name' height={10} />
                                <View style={{ fle: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
                                    <View style={{ width: '48%', marginHorizontal: 4 }}>
                                        <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}>
                                            Category
                                        </FormControl.Label>
                                        <Input border=' 0.2px solid gray' placeholder=' Category' height={10} />
                                    </View>
                                    <View style={{ width: '48%' }}>
                                        <FormControl.Label
                                            _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}>
                                            Brand
                                        </FormControl.Label>
                                        <Input border=' 0.2px solid gray' placeholder=' Brand' height={10} />
                                    </View>

                                    <View style={{ width: '48%', marginHorizontal: 3 }}>
                                        <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}>
                                            Videos
                                        </FormControl.Label>
                                        <Input border=' 0.2px solid gray' placeholder=' Videos' height={10} />
                                    </View>
                                    <View style={{ width: '48%' }}>
                                        <FormControl.Label
                                            _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}>
                                            Unit
                                        </FormControl.Label>
                                        <Input border=' 0.2px solid gray' placeholder=' Unit' height={10} />
                                    </View>
                                </View>
                                <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}>
                                    Shop
                                </FormControl.Label>
                                <Input border=' 0.2px solid gray' placeholder=' Shop' height={10} />

                            </FormControl>
                            <VStack space={2}>
                                <TouchableOpacity style={{ width: "100%", paddingVertical: 10, backgroundColor: '#0A8791', }} borderRadius={5}>
                                    <Text style={{ textAlign: "center", color: "#ffffff" }}>Insert</Text>
                                </TouchableOpacity>
                            </VStack>
                        </ScrollView>
                    </View>
                </VStack>
            </Box>
        </NativeBaseProvider>

    );
}
export default CreateProduct;
