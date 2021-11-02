import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons, Ionicons, EvilIcons, FontAwesome5, AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';
import { List, Icon, IconButton, NativeBaseProvider, Box, VStack, FormControl, Input, Button, HStack, Heading, Switch } from "native-base";
const MyProfile = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: '#fff', flex: 1, justifyContent: 'center', alignItems: 'center', color: 'white' }} >
            <View style={{ flex: 0.5, backgroundColor: '#fff', flexDirection: 'row', alignItems: 'flex-end' }}>
                <View style={{ flex: 4 }}>
                    <AntDesign name="left" size={24} color="#000000"
                        onPress={() => navigation.goBack()} />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <Text style={{fontSize:17, color:'#0A8791',fontWeight:'500'}}>Save</Text>
                </View>
            </View>

            <View style={{ backgroundColor: '#fff', width: '100%', flex: 1.2, justifyContent: 'center', alignItems: 'center', }} >
                <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYYSq18n-L2WyTypr6JzxmWP8_Vz9RqN97Pg&usqp=CAU' }}
                    style={{ width: 100, height: 100, borderRadius: 100 }} />
            </View>
            <View style={{
                backgroundColor: '#fff', width: '90%', flex: 3, borderRadius: 10, shadowColor: 'gray',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,
                elevation: 4,
                marginBottom:7
            }}>
                <NativeBaseProvider>
                    <ScrollView style={{ margin: 10 }} showsVerticalScrollIndicator={false}>
                        <List borderColor='#fff' >
                            <Text style={{ fontSize: 17, fontWeight: '600', paddingLeft: 10 ,color:'#737373'}}>My Account</Text>
                            <TouchableOpacity onPress={() => navigation.navigate("MyProfile")}>
                                <List.Item style={styles.borderitem} >
                                    <FontAwesome5 style={styles.leftIcon} name="user" />
                                    <Text style={styles.textCenter}>Profile</Text>
                                    <AntDesign style={styles.rightIcon} name="right" />
                                </List.Item>
                            </TouchableOpacity>
                            <TouchableOpacity  >
                                <List.Item style={styles.borderitem} >
                                    <FontAwesome5 style={styles.leftIcon} name="user" />
                                    <Text style={styles.textCenter}>My Product</Text>
                                    <AntDesign style={styles.rightIcon} name="right" />
                                </List.Item>
                            </TouchableOpacity>

                            <TouchableOpacity >
                                <List.Item style={styles.borderitem}>
                                    <AntDesign name="mail" style={styles.leftIcon} />
                                    <Text style={styles.textCenter} >Payment History</Text>
                                    <AntDesign style={styles.rightIcon} name="right" />

                                </List.Item>
                            </TouchableOpacity>
                            
                            <TouchableOpacity  >
                                <List.Item style={styles.borderitem}>
                                    <FontAwesome5 style={styles.leftIcon} name="history" />
                                    <Text style={styles.textCenter} >Notification </Text>
                                    <Switch size="sm" style={styles.rightIcon} isChecked='true' />
                                </List.Item>
                            </TouchableOpacity>
                            <TouchableOpacity   >
                                <List.Item style={styles.borderitem}>
                                    <FontAwesome5 style={styles.leftIcon} name="history" />
                                    <Text style={styles.textCenter} >Promote </Text>
                                    <Switch size="sm" style={styles.rightIcon} />
                                </List.Item>
                            </TouchableOpacity>
                            <TouchableOpacity  >
                                <List.Item style={styles.borderitem}>
                                    <FontAwesome5 style={styles.leftIcon} name="history" />
                                    <Text style={styles.textLogout}>Log Out </Text>
                                    <AntDesign style={styles.rightIcon} name="right" />
                                </List.Item>
                            </TouchableOpacity>

                        </List>
                    </ScrollView>
                </NativeBaseProvider>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    borderitem: {
        borderBottomWidth: 1,
        borderBottomColor:'#f2f2f2',
        height: 60,
        flex: 1,
        justifyContent: 'space-between',
    },
    leftIcon:
    {
        fontSize: 17,
        color: 'gray',
        marginLeft: 2,
        marginRight: 10
    },
    textCenter: {
        fontSize: 14,
        fontWeight: '400',
        color:'gray'
    },
    textLogout: {
        fontSize: 16,
        color: 'gray',
        fontWeight: '600'
    },
    rightIcon: {
        color: 'gray',
        position: 'absolute',
        right: 10,
        top: 3,
        fontSize: 24
    }
})
export default MyProfile;