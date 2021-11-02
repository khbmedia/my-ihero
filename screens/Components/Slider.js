import * as React from "react";
import { View, StyleSheet, Text, ScrollView,ImageBackground } from 'react-native';
const Slider=props=>{
    return(
    <View style={{flex: 1, height: 210, width: '100%', marginVertical: 10}}>
    <ScrollView
    horizontal
    pagingEnabled
    showsHorizontalScrollIndicator={false}
    >
        {props.Images.map(ele=>{
            return(
            <View style={styles.slide, props.Images}>
                <ImageBackground source={ele.image} borderRadius={10}  style={{height:200 , minWidth:'100%',width:362,margin:6,marginTop:10 }}>
                </ImageBackground>
            </View>);
        })}
    </ScrollView>
    </View>)
}
const styles = StyleSheet.create({
    slide:{
        flex: 1, 
        width: 370, 
        alignItems: 'center', 
        marginRight: 5, 
        borderRadius: 15
    }
});
export default Slider;