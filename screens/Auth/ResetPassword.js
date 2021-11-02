import * as React from 'react';
import logo from '../../assets/logo.png';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
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
const ResetPassword = ({ Navigation }) => {
    return (
            <NativeBaseProvider>
      <Box flex={1} p={1}  w="85%" mx='auto' justifyContent="center"  >
      <Image source={logo} alt="depot25" size={"xl"}  width="100%" height="15%" />
      <Heading size="lg" color='#0A8791'>Reset password </Heading> 
      <VStack space={2} mt={5}>
        <FormControl>
          <FormControl.Label _text={{color: 'muted.700', fontSize: 'sm', fontWeight: 500}}  >
              Password
          </FormControl.Label>
          <Input type="password" border=' 0.2px solid gray' placeholder='Password' />
        </FormControl>
        <FormControl>
          <FormControl.Label _text={{color: 'muted.700', fontSize: 'sm', fontWeight: 500}}  >
              Comfirm Password
          </FormControl.Label>
          <Input type="password" border=' 0.2px solid gray' placeholder='comfirm password' />
        </FormControl>
        <VStack  space={2}>
        <Button colorScheme="orange"   _text={{color: 'white' }} >
            Send
        </Button>
        </VStack>
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
    </Box>
  </NativeBaseProvider>
    );
}
export default ResetPassword;

