import * as React from "react"; 
import { View, StyleSheet, Text, TouchableOpacity,ImageBackground} from 'react-native';
import { useNavigation } from "@react-navigation/native";
const TabBrand = props => { 
    const navigation = useNavigation();
    return props.BrandList.map
        (ele =>
            <TouchableOpacity style={props.BrandList} key={ele.id} onPress={()=>navigation.navigate('ShopProfile')}> 
                <ImageBackground source={{ uri: ele.product_image[0].path  }} borderRadius={10} style={ {height: 130, marginHorizontal:20,marginVertical:10 } }>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', zIndex: 1, color: 'white' }}>{ele.name} </Text> 
                    </View>  
                </ImageBackground> 
            </TouchableOpacity>
        )
}
const styles = StyleSheet.create({
     imgbackground:{
        height: 130, 
     }


});
export default TabBrand;
