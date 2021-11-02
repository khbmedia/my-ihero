import * as React from 'react';
import { MaterialCommunityIcons, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Image, Box, Stack, Heading,Text, View } from "native-base";
import { TouchableOpacity } from 'react-native';
const ProductCart=(props)=>{
    
    return(
        <TouchableOpacity onPress={props.onPress}>
            <Box
                bg="white"
                shadow={1}
                rounded="lg"
                width={200}
                height={260}
                marginTop={5}
            >
                <Image source={{ uri: props.image }} alt={props.name} resizeMode="cover" height={150} roundedTop="md" />
                <View>
                    <Stack space={4} p={[4, 4, 8]}>
                        <Heading size={["md", "lg", "md"]} noOfLines={2}>
                            {props.name}
                        </Heading>
                       
                    </Stack>
                </View>
                <View style={{justifyContent: 'space-between', alignItems:'center', textAlign: 'justify', flex: 1, flexDirection: 'row', padding: 10}}>
                        <Text fontSize="lg" bold lineHeight={[5, 5, 7]} noOfLines={[4, 4, 2]} color="red.600">
                            {props.price}
                        </Text>
                        <Ionicons name="cart" size={30} color="red"/>
                </View>
            </Box>
        </TouchableOpacity>
    );
}
export default ProductCart;