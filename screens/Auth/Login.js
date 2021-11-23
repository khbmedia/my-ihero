import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { MaterialCommunityIcons, Feather, AntDesign } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { checkLogin } from '../../store/user/action';
import {
  NativeBaseProvider,
  Box,
  Text,
  VStack,
  FormControl,
  Input,
  Button,
  Icon,
  IconButton,
  HStack,
  Pressable
} from 'native-base';
import { ImageBackground } from 'react-native';
const HomeScreen = ({ navigation }) => { 
  const dispatch=useDispatch();
  const[email,setEmail]=useState(null);
  const[password,setPassword]=useState(null);
  return (
    <NativeBaseProvider>
      <ImageBackground source={require('../Assets/Background/Authentication.jpg')} style={{flex:1,}}>
        <Box flex={1} pt={10} w="90%" mx='auto' justifyContent="center">
        <Text style={{ color: '#fff', fontSize: 30, fontWeight: 'bold', paddingVertical: 10 }}>Welcome to</Text>
        <Text style={{ fontSize: 14, color: "#e6e6e6", paddingBottom: 20 }}>
          Enter Your Phone number or Email address for Sign in ,Enjoy your food</Text>
        <VStack space={2} mt={5}>
          <FormControl>
            <Input keyboardType="email-address" sborder=' 0.2px solid gray' placeholder='Email-Address'
            onChangeText={text=>setEmail(text)}
              InputLeftElement={<Icon size='sm' ml={2} size={6} color="gray.400" as={<AntDesign name="user" size={29} color="black" />} />} 
              autocomplete="off"
              color='#fff'
              height={50}
              autoCapitalize='none'
            />
          </FormControl>
          <FormControl mb={5}>
            <Input type="password" sborder=' 0.2px solid gray' placeholder='Password'
            autoCapitalize='none'
            color='#fff'
            height={50}
            onChangeText={text=>setPassword(text)}
              InputLeftElement={<Icon size='sm' ml={2} size={6} color="gray.400" as={<Feather name="lock" size={29} color="black" />} />} 
              autocomplete="off" />
            <Pressable onPress={() => navigation.navigate('ForgotPassword')} >
              <Text style={{ color: '#0A8791', fontWeight: '700', fontSize: 12 }} alignSelf="flex-end">
                Forget Password?
              </Text>
            </Pressable>

          </FormControl>
          <VStack space={2}>
            <Button colorScheme="teal" _text={{ color: 'white' }}onPress={() => {
              let fd=new FormData();
              fd.append("email",email);
              fd.append("password",password);
              fd.append("device","phone");
              dispatch(checkLogin(fd));
            }}>
              Log in
            </Button>

            <HStack justifyContent="center" alignItem='center'>
              <IconButton
                variant='unstyled'
                startIcon={
                  <Icon as={< MaterialCommunityIcons name="facebook" />} color='white' size='sm' />}
              />
              <IconButton
                variant='unstyled'
                startIcon={
                  <Icon as={< MaterialCommunityIcons name="google" />} color='white' size="sm" />}
              />
              <IconButton
                variant='unstyled'
                startIcon={
                  <Icon as={< MaterialCommunityIcons name="github" />} color='white' size="sm" />}
              />
            </HStack>
          </VStack>
          <HStack justifyContent="center">
            <Text fontSize='sm' color='#f2f2f2' fontWeight={400}>Don't you have any Account?. </Text>
            <Pressable onPress={() => navigation.navigate('Register')}>
              <Text style={{ color: 'cyan' }}>
                Register
              </Text>
            </Pressable>
          </HStack>
        </VStack>
      </Box>
      </ImageBackground>
     
    </NativeBaseProvider>
  );
}
export default HomeScreen;
