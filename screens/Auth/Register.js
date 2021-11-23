import * as React from 'react';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
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
    Divider, 
} from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import {Pressable,ImageBackground} from 'react-native'
const Register = ({ navigation }) => {
    return (
        <NativeBaseProvider>
           <ImageBackground source={require('../Assets/Background/Authentication.jpg')} style={{flex:1,}}>
            <Box flex={1} p={1} w="93%" mx='auto' justifyContent="center"  >
                <Text style={{fontSize:29,fontWeight:'700' ,color: 'white',paddingVertical:20}}>Create Account</Text>
                <Text style={{fontSize:16,color:"#e6e6e6",paddingBottom:20}}>Enter Your Username ,Email and passworto sign up.
                </Text>
                <VStack space={2} mt={5}>
                    <FormControl>
                        <Input sborder=' 0.2px solid gray' placeholder='User Name' height={50}
                        InputLeftElement={<Icon size='sm' ml={1} size={7} color="gray.400" as={<AntDesign name="user" />} />}
                                   
                                   />
                    </FormControl>
                    <FormControl>
                    <Input type='email' sborder=' 0.2px solid gray' placeholder='Email' height={50}
                            InputLeftElement={<Icon size='sm' ml={1} size={7} color="gray.400" as={<MaterialCommunityIcons name="email-edit-outline"/>} />}
                         />
                    </FormControl>
                    <FormControl mb={5}>
                         <Input type='password' sborder=' 0.2px solid gray' placeholder='password' height={50}
                            InputLeftElement={<Icon size='sm' ml={1} size={7} color="gray.400" as={<Feather name="lock" />} />}
                         />

                    </FormControl>
                    <VStack space={2}>
                        <Button colorScheme="teal" _text={{ color: 'white' }} onPress={() => navigation.navigate('Profile')}>
                            Sign In
                        </Button>
                        <HStack justifyContent="center" alignItem='center'>
            <IconButton
              variant='unstyled'
              startIcon={
                <Icon as={< MaterialCommunityIcons name="facebook" />} color='muted.700' size='sm' /> }
            />
            <IconButton
              variant='unstyled'
              startIcon={
                <Icon as={< MaterialCommunityIcons name="google" />} color='muted.700' size="sm" /> }
            />
            <IconButton
              variant='unstyled'
              startIcon={
                <Icon as={< MaterialCommunityIcons name="github" />} color='muted.700' size="sm" /> }
            />
          </HStack>

                    </VStack>
                    <HStack justifyContent="center">
            <Text fontSize='sm' color='#e6e6e6' fontWeight={400}>Do you have any Account?. </Text> 
            <Pressable onPress={() => navigation.navigate('Login')}> 
              <Text style={{ color: 'cyan' }}>
                sign in
              </Text>
            </Pressable>
          </HStack>
                </VStack>
            </Box>
            </ImageBackground>
        </NativeBaseProvider>
    );
}
export default Register;