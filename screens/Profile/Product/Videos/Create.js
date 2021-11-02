 
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
 
  Button,
 
} from 'native-base';
import { StyleSheet,ActivityIndicator,View } from 'react-native';
const CreateVideo = ({ navigation }) => {
  const [loading, setloading] = useState(false);
  const insertData = () => { 
    setloading(true);
      var fd=new FormData();
      fd.append("name",text); 
      axios.post('https://depot25.dev.khb.asia/api/front-product-video-store',fd,{headers:{
        'Content-Type':'application/json'
      }}).then(response=>{
        setTimeout(
          ()=>
          {
            setloading(false);
            navigation.goBack();
          },3000
        );
      }) .catch(err => { 
        console.log(err)
    }); 
  }
  const [text, setText] = useState("");
  return (
    <NativeBaseProvider>
      {loading ?
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <ActivityIndicator size="large" color="#0A8791" style={{ position: 'absolute', top: 200, }} />
          </View>
          : (
      <Box flex={1} p={1} w="98%" mx='1%' justifyContent="center" bg="blue" >
        <Heading size="xl" color='#0A8791' marginBottom='5' textAlign='center' >Add Videos</Heading>
        <VStack space={2} mt={5}>
          <FormControl>
            <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: '900' }}  >
              Video
            </FormControl.Label>
            <Input sborder=' 0.2px solid gray' placeholder='Enter Video' onChangeText={text => setText(text)} />
          </FormControl>

          <VStack space={2}>
            <Button colorScheme="orange" _text={{ color: 'white' }} onPress={insertData}   >
              Insert
            </Button>

          </VStack>

        </VStack>
      </Box>
          )}
    </NativeBaseProvider>
  );
}
export default CreateVideo;