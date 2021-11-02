import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, Text, TouchableOpacity } from 'react-native';
import {
  NativeBaseProvider,
  Box,
  Heading,
  VStack,
  FormControl,
  Input,} from 'native-base';
import axios from "axios";
import * as ImagePicker from 'expo-image-picker'; 
const CreateCategory =({navigation})=>{
  const [image, setImage] = useState(null);
  const [name,setName]=useState(null);
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
  const uploadImage = () => {
    if (image != null) {
      const fileToUpload = image;
      const data = new FormData();
      data.append('icon', fileToUpload);
      data.append('name',name);
      axios.post('https://depot25.dev.khb.asia/api/front-product-category-store',data,{
          headers:{
              'Content-Type':'multipart/form-data'
          }
      }).then(response=>{
        console.log(response.data);
      })
      
    } 
  };
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
      <Box flex={1} p={1} w="95%" h="70%" mx='2' justifyContent="center" shadow={2} >
            {/* <Box
      bg="white"
      shadow={2}
      rounded="lg"
      maxWidth="90%"
    > */}
        <Heading size="lg" color='#0A8791' marginBottom='7' textAlign='center' >Add Category</Heading>
        <VStack space={2} mt={5}>
          <FormControl mb={5} >
            {image && <Image source={{ uri: image }} style={{ marginHorizontal: 70, borderRadius: 100, marginBottom: 40, width: 200, height: 200 }}  />}
            <TouchableOpacity onPress={pickImage}>
              <View style={{  width: "100%", paddingVertical: 10, backgroundColor: '#0A8791',marginBottom:20}} borderRadius={5}>
                <Text style={{ textAlign: "center", color: "#ffffff" }}>Browse File</Text>
              </View>
            </TouchableOpacity>
            <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}>
              Category Name
            </FormControl.Label>
            <Input border=' 0.2px solid gray' placeholder='Enter Name' onChangeText={text=>setName(text)}/>
          </FormControl>
          <VStack space={2}>
            <TouchableOpacity onPress={uploadImage} style={{ width: "100%", paddingVertical: 10, backgroundColor: '#0A8791', }} borderRadius={5}>
              <Text style={{ textAlign: "center", color: "#ffffff" }}>Insert</Text>
            </TouchableOpacity>
          </VStack>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}
export default CreateCategory;
