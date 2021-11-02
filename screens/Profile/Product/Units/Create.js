import React, { useState, useEffect } from 'react'; 
import { NativeBaseProvider, Box,   Heading, VStack,  FormControl, Input,  Button} from 'native-base'; 
import {ActivityIndicator,View} from'react-native'; 
import axios from 'axios';
const CreateUnit = ({route,navigation }) => {  
  const [obj, setObj] = useState(route.params.ele);

  const [loading, setloading] = useState(false);
  const insertData = () => {
    if(obj==null)
    {
      setloading(true); 
      var fd=new FormData();
      fd.append("name",text); 
     
      console.log(fd);
      axios.post('https://depot25.dev.khb.asia/api/front-product-unit-store',fd,{headers:{
        'Content-Type':'application/json'
      }}).then(response=>{
            setloading(false);
            navigation.goBack(); 
            console.log('add');
      }).catch(err => {
        console.log(err)
        console.log(' error')
        
    }); 
    }
    else{
       
      var fd=new FormData();
      fd.append("name",text); 
     
      console.log(fd);
      axios.post('https://depot25.dev.khb.asia/api/front-product-unit-update/'+obj.id,fd,{headers:{
        'Content-Type':'application/json'
      }}).then(response=>{
            
            navigation.navigate('IndexUnits'); 
            console.log('Update', obj.id);
      }).catch(err => {
        console.log(err)
        console.log(' error')
        
    }); 
    }
   
}
const [text, setText] = useState("");
    return ( 
      <NativeBaseProvider>
        {loading ?
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <ActivityIndicator size="large" color="#0A8791" style={{ position: 'absolute', top: 200, }} />
          </View>
          :   
      (<Box flex={1} p={1}  w="98%"  mx='1%' justifyContent="center" bg="blue" >
        <Heading size="xl" color='#0A8791' marginBottom='5' textAlign='center' >Add Unit</Heading> 
        <VStack space={2} mt={5}>
          <FormControl>
            <FormControl.Label _text={{color: 'muted.700', fontSize: 'sm', fontWeight: '900' }}  >
                Unit
            </FormControl.Label>
            <Input sborder=' 0.2px solid gray' defaultValue={obj!=null ? obj.name :' ' } 
            placeholder='Enter Unit' onChangeText={text => setText(text)}/>
          </FormControl>
          <VStack  space={2}>
          <Button colorScheme="orange" _text={{color: 'white' }} onPress={insertData}  >
              Insert
          </Button>  
          </VStack>
        </VStack>
      </Box>
      )}
    </NativeBaseProvider>
    );
  }
export default CreateUnit;