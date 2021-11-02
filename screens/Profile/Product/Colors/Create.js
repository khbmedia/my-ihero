
import axios from 'axios';
import React, { useState } from 'react';
import {
  NativeBaseProvider,
  Box,
  Heading,
  VStack,
  FormControl,
  Button,
  Input
} from 'native-base';
import { StyleSheet,ActivityIndicator,View } from 'react-native';
const CreateColor = ({ route,navigation }) => {
  const [obj, setObj] = useState(route.params.ele);
 
  const [loading, setloading] = useState(false);
  const insertData = () => {
    if(obj==null)
    {
    setloading(true);
    var fd = new FormData();
    fd.append("name", text);
    fd.append("color_code", colorCode);

    axios.post('https://depot25.dev.khb.asia/api/front-product-color-store', fd, {
      headers: { 'Content-Type': 'application/json' }
    }).then(response => {
      setTimeout(
        ()=>
        {
          setloading(false);
          navigation.goBack();
        },2000
      );
    });
  }
  else {
    setloading(true);
    var fd = new FormData();
    fd.append("name", text);
    fd.append("color_code", colorCode);

    axios.post('https://depot25.dev.khb.asia/api/front-product-color-update/'+obj.id, fd, {
      headers: { 'Content-Type': 'application/json' }
    }).then(response => {
      setTimeout(
        ()=>
        {
          setloading(false);
          navigation.navigate('IndexColors');
          console.log(response);
        },3000
      );
    });
  }
  }
  const [text, setText] = useState(obj!=null?obj.name:'');
  const [colorCode, setCode] = useState(obj!=null?obj.color_code:'');
  return (
    
    <NativeBaseProvider>
      {loading ?
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <ActivityIndicator size="large" color="#0A8791" style={{ position: 'absolute', top: 200, }} />
          </View>
          :  
     ( <Box flex={1} p={1} w="98%" mx='1%' justifyContent="center" bg="blue" >
        <Heading size="xl" color='#0A8791' marginBottom='5' textAlign='center' >Add Color</Heading>
        <VStack space={2} mt={5}>
          <FormControl>
            <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: '900' }}  >
              Color Code
            </FormControl.Label>
            <Input sborder=' 0.2px solid gray' defaultValue={obj!=null ? obj.color_code :' ' } placeholder='Enter Video' onChangeText={colorCode => setCode(colorCode)} />
            <FormControl.Label _text={{ px: 2, color: 'muted.700', fontSize: 'lg', fontWeight: '900' }}  >
            name
            </FormControl.Label>
            <Input sborder=' 0.2px solid gray' defaultValue={obj!=null ? obj.name :'Do not have' } placeholder='Enter Name' onChangeText={text => setText(text)} />
       
          </FormControl>

          <VStack space={2}>
            <Button colorScheme="orange" _text={{ color: 'white' }} onPress={insertData}>
              Insert
            </Button>

          </VStack>

        </VStack>
      </Box>)}
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
})
export default CreateColor;
