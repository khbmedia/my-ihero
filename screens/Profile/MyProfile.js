import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    ImageBackground,
} from "react-native";
import { EvilIcons, AntDesign } from "@expo/vector-icons";
import {
    NativeBaseProvider,
    Input,
} from "native-base";
import Color from "../../constant/Color";
const MyProfile = ({ navigation }) => {
    return (
        <NativeBaseProvider>
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <TouchableOpacity
                                style={{
                                    position: "absolute",
                                    bottom: -40,
                                    alignSelf: "center",
                                }}
                            >
                                <ImageBackground
                                    source={{
                                        uri: "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
                                    }}
                                    style={styles.styleimg}
                                    borderRadius={100}
                                >
                                    <TouchableOpacity
                                        onPress={() => pickImage()}
                                        style={{
                                            backgroundColor: "#D8DADF",
                                            width: 35,
                                            height: 35,
                                            textAlign: "right",
                                            position: "absolute",
                                            bottom: 1,
                                            right: 1,
                                            borderRadius: 100,
                                            flex: 1,
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <ImageBackground
                                            onPress={() => pickImage()}
                                            style={{
                                                width: 23,
                                                height: 23,
                                            }}
                                            source={{
                                                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7nI57fSOhDQYHQ5mcHrAAJ_GJ-cmNc9Otva4xf-hhAIVlMCYsCsV_7h40cOzgGcKKtBk&usqp=CAU",
                                            }}
                                        ></ImageBackground>
                                    </TouchableOpacity>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, width: '100%', height: "100%", padding: 10 }}>

                            <View style={{ width: '100%', flexDirection: 'row', maxHeight: 50, backgroundColor: '#ffffff', alignItems: 'center', marginBottom: 10 }}>
                                <View style={{ width: "10%", height: '80%', alignItems: 'center', justifyContent: 'center', borderRightWidth: 1, borderRightColor: '#e6e6e6' }}>
                                    <AntDesign name="user" size={20} color="black" />
                                </View>
                                <View style={{ width: '90%', flexDirection: 'row' }}>
                                    <Input
                                        style={{
                                            borderColor: "#ffffff",
                                            backgroundColor: "#ffffff",
                                            borderRadius: 3,
                                        }}


                                        width='100%'
                                        placeholder="Enter First Name"
                                        height={12}
                                        keyboardType='default'

                                    />
                                </View>
                            </View>
                            <View style={{ width: '100%', flexDirection: 'row', maxHeight: 50, backgroundColor: '#ffffff', alignItems: 'center', marginBottom: 10 }}>
                                <View style={{ width: "10%", height: '80%', alignItems: 'center', justifyContent: 'center', borderRightWidth: 1, borderRightColor: '#e6e6e6' }}>
                                    <AntDesign name="user" size={20} color="black" />
                                </View>
                                <View style={{ width: '90%', flexDirection: 'row' }}>
                                    <Input
                                        style={{
                                            borderColor: "#ffffff",
                                            backgroundColor: "#ffffff",
                                            borderRadius: 3,
                                        }}

                                        width='100%'
                                        placeholder="Enter Last Name"
                                        height={12}
                                        keyboardType='default'
                                    />
                                </View>
                            </View>
                            <View style={{ width: '100%', flexDirection: 'row', maxHeight: 50, backgroundColor: '#ffffff', alignItems: 'center', marginBottom: 10 }}>
                                <View style={{ width: "10%", height: '80%', alignItems: 'center', justifyContent: 'center', borderRightWidth: 1, borderRightColor: '#e6e6e6' }}>
                                    <AntDesign name="mail" size={20} color="black" />
                                </View>
                                <View style={{ width: '90%' }}>
                                    <Input
                                        style={{
                                            borderColor: "#ffffff",
                                            backgroundColor: "#ffffff",
                                            borderRadius: 3,
                                        }}

                                        width='100%'
                                        placeholder="Enter Email"
                                        height={12}
                                        keyboardType='email-address'
                                    />
                                </View>
                            </View>
                            <View style={{ width: '100%', flexDirection: 'row', maxHeight: 50, backgroundColor: '#ffffff', alignItems: 'center', marginBottom: 10 }}>
                                <View style={{ width: "10%", height: '80%', alignItems: 'center', justifyContent: 'center', borderRightWidth: 1, borderRightColor: '#e6e6e6' }}>
                                    <AntDesign name="phone" size={20} color="black" />
                                </View>
                                <View style={{ width: '90%' }}>
                                    <Input
                                        style={{
                                            borderColor: "#ffffff",
                                            backgroundColor: "#ffffff",
                                            borderRadius: 3,
                                        }}

                                        width='100%'
                                        placeholder="Enter Phone Number"
                                        height={12}
                                        keyboardType='numeric'
                                    />
                                </View>
                            </View>
                            <View style={{ width: '100%', flexDirection: 'row', maxHeight: 50, backgroundColor: '#ffffff', alignItems: 'center', marginBottom: 10 }}>
                                <View style={{ width: "10%", height: '80%', alignItems: 'center', justifyContent: 'center', borderRightWidth: 1, borderRightColor: '#e6e6e6' }}>
                                    <EvilIcons name="location" size={24} color="black" />
                                </View>
                                <View style={{ width: '90%' }}>
                                    <Input
                                        style={{
                                            borderColor: "#ffffff",
                                            backgroundColor: "#ffffff",
                                            borderRadius: 3,
                                        }}
                                        width='100%'
                                        placeholder="EnterCountry"
                                        height={12}
                                        keyboardType='default'
                                    />
                                </View>
                            </View>
                            <View style={{ width: '100%', flexDirection: 'row', maxHeight: 50, backgroundColor: '#ffffff', alignItems: 'center', marginBottom: 10 }}>
                                <View style={{ width: "10%", height: '80%', alignItems: 'center', justifyContent: 'center', borderRightWidth: 1, borderRightColor: '#e6e6e6' }}>
                                    <EvilIcons name="location" size={24} color="black" />
                                </View>
                                <View style={{ width: '90%' }}>
                                    <Input
                                        style={{
                                            borderColor: "#ffffff",
                                            backgroundColor: "#ffffff",
                                            borderRadius: 3,
                                        }}
                                        width='100%'
                                        placeholder="Enter City/Province"
                                        height={12}
                                        keyboardType='default'
                                    />
                                </View>
                            </View>
                            <TouchableOpacity style={styles.BtnSave} onPress={() => UpdateDataUser()}>
                                <Text style={{ fontSize: 15, fontWeight: '500', color: 'white' }}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View >
        </NativeBaseProvider >
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
    header: {
        flex: 4,
        width: "100%",
        height: 120,
        backgroundColor: Color.bgPrimary,
        marginBottom: 40,
    },
    content: {
        flex: 10,
        width: "100%",
        paddingTop: 50,
    },
    styleimg: {
        alignSelf: "center",
        borderRadius: 50,
        width: 90,
        height: 90,
    },

    BtnSave: {
        width: '100%',
        flexDirection: 'row',
        minHeight: 40,
        backgroundColor: Color.bgPrimary,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    }
});
export default MyProfile;
