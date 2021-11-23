import * as React from 'react';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import {ImageBackground} from 'react-native';
import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  IconButton,
  HStack,
  Image,
  Divider
} from 'native-base'; 
const ForgotPassword = ({ navigation }) => {
    return (
    <NativeBaseProvider>
        <ImageBackground source={require('../Assets/Background/Authentication.jpg')} style={{flex:1,}}>
      <Box flex={1} p={1}  w="94%" mx='auto' justifyContent="center"  > 
      <Text style={{fontSize:28,fontWeight:'600',color:'#009678',paddingVertical:20}}> Forget password</Text>
      <VStack space={2} mt={5}>
      <Text fontSize="13px" paddingBottom='5' color='white'>Please enter your email , we’ll send you  how to reset your password</Text>
        <FormControl>
        <Input sborder=' 0.2px solid gray' placeholder='Email Or Username' height={50}
        color='white'
          InputLeftElement={<Icon size='sm' ml={2} size={7} color="gray.400" as={<MaterialCommunityIcons name="email-edit-outline"/>} />}
        />
        </FormControl>
        <VStack  space={2}>
        <Button colorScheme="teal"   _text={{color: 'white' }} >
            Send
        </Button>
        </VStack>
        <HStack justifyContent="center">
          <Text style={{ fontWeight:'bold', fontSize: 12,color:"#e6e6e6"}}  onPress={() => navigation.goBack() }>
            Go Back
          </Text>
        </HStack>
      </VStack>
    </Box>
    </ImageBackground>
  </NativeBaseProvider>
    );
}
export default ForgotPassword;