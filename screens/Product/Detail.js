import React, { useState} from 'react'; 
import { View, Text, Image, ScrollView, StyleSheet,ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Swiper from 'react-native-swiper'
const DetailByCategory = ({ route,navigation }) => {
    const [obj, setObj] = useState(route.params.ele);
    console.log('Product Detail');
    const [ImageGalery, setImg] = useState(obj.product_image[1].path.split(','));
    const AddToCart = (obj) => {
        // console.log(obj)
        // navigation.navigate("Cart",{obj});  
         navigation.navigate("OrderStack", { screen: "Cart" , params :{obj} }) 
        console.log("send");
    }
    return (
        <ScrollView>
            <View>
                <View style={styles.imageContainer}>
                <Swiper style showsButtons={false} showsPagination={true} autoplay={true} > 
                {ImageGalery.map(ele=>{
                    return ( 
                    <ImageBackground source={{uri:ele}} style={styles.slide1} borderRadius={6} style={styles.imagegalary}>
                        
                    </ImageBackground>)
                    }   
                )}
                </Swiper>
                    {/* <Image style={{ width: '100%', height: 250, justifyContent: 'center' }} source={{uri:obj.product_image[0].path}} /> */}
                </View>
                <View style={styles.descriptionContainer}>
                    <View>
                        <Text style={{ fontSize: 23, fontWeight: 'bold' }}>{obj.name}</Text>
                        <Text style={{ fontSize: 13 }}>Phnom Penh - 3min ago</Text>
                        <Text style={{ fontSize: 23, fontWeight: 'bold', color: 'red' }}> 
                            ${obj.product_variation[0].product_variation_condition[0].price_in_unit}
                        </Text>
                    </View>
                    <View>
                        <Ionicons style={{ top: 0, left: -5, zIndex: 90000 }} name="cart" size={50} color="red"  
                         onPress={() => AddToCart(obj)}/>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', 
                    borderBottomColor: 'grey', borderBottomWidth: 0.3 ,backgroundColor:'#e6e6e6'}}>
                    <Image style={styles.profile}
                        source={{ uri: 'https://iconape.com/wp-content/png_logo_vector/user-circle.png', }}
                    />
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>User Name</Text>
                        <Text style={{ fontSize: 16 }}>Tel: 098625481</Text>
                    </View>
                </View>
                <View style={styles.productDescription}>
                        <Text style={{ fontSize: 17, fontWeight: '500' }}> Description </Text>
                        <View>
                            <Text style={styles.textProduct}> Categories: {obj.category_product.name}</Text>
                            <Text style={styles.textProduct}> Brand: {obj.product_brand.name}</Text>
                        </View>
                        <View style={styles.textDescription}>
                            <Text>{obj.description}</Text>
                        </View>
                    </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    imageContainer: {
        alignItems: 'center',
        flex: 1,
        height:350
    },
    imagegalary:{
        height:350
    },
    descriptionContainer: {
        paddingLeft: 10,
        justifyContent: 'space-between',
        textAlign: 'justify',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        borderBottomColor: 'grey'  , 
        borderBottomWidth: 0.3, 
        marginTop: 10,
        backgroundColor:'#e6e6e6'
    },
    profile: {
        minWidth: '20%',
        width: 80,
        height: 80,
        justifyContent: 'center',
        backgroundColor:'#e6e6e6'
    },
    productDescription: {
        left: 10,
        flexDirection:'column',
        fontSize:16,
        backgroundColor:'#e6e6e6'
    },
    textProduct: {
        fontSize: 14,
        
    },
    textDescription: {
       textAlign:'center',
       padding:4
    },
    slide1: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center', 
      
       
        borderRadius: 10
    },
    slide2: {
        height:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
         
        borderRadius: 10
    },
    slide3: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
       
        borderRadius: 10
    },
});
export default DetailByCategory;