import * as React from "react";
import { View, StyleSheet, Text, ScrollView,ImageBackground  } from 'react-native';
const Category = props => {
    return (
        <View style={{flex: 1, height: 100, width: '100%', marginVertical: 10}}>
            <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            >
                {props.CategoryImages.map(ele=>{
                    return(
                    <View style={styles.Category, props.CategoryImages}>
                        <ImageBackground source={ele.image} borderRadius={50}  style={{height:80 , width: 80, margin:10,marginTop:10 }}>
                        </ImageBackground>
                    </View>);
                })}
            </ScrollView>
        </View>
)}
const styles = StyleSheet.create({
    Category: {
        width: 10,
    }
});
export default Category;