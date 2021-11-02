
import * as React from 'react';
import { } from 'react-native';
import { TouchableOpacity, Keyboard } from 'react-native';
import { View, Text, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import {
    NativeBaseProvider,
    VStack,
    Input,
    Icon,

    List
} from 'native-base';
import { Ionicons, AntDesign } from '@expo/vector-icons';
const Search = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flex: 1, shadowColor: 'red', borderBottomWidth: 2, borderBottomColor: '#e6e6e6', justifyContent: 'flex-end', alignItems: 'flex-end', flexDirection: 'row' }}>
                    <View style={{ flex: 1, bottom: 15 }}>
                        <AntDesign name="left" size={24} color="black" onPress={() => navigation.goBack()} />
                    </View>
                    <View style={{ flex: 5, position: 'absolute', bottom: 1, width: '90%' }}>
                        <SafeAreaView>
                            <NativeBaseProvider style={{ backgroundColor: 'red' }} onPress={Keyboard.dismiss}>
                                <VStack space={2} width="100%">
                                    <VStack width="100%" >
                                        <Input
                                            borderRadius={10}
                                            placeholder="Search" variant="filled" width='90%'
                                            InputLeftElement={<Icon size='sm' ml={2} size={5} color="gray.400" as={<Ionicons name="ios-search" />} />}
                                            InputLeftElement={<Icon size='sm' ml={2} size={5} color="gray.400" as={<Ionicons name="ios-search" />} />}
                                            autocomplete="off"
                                            InputRightElement={
                                                <Ionicons name="options" size={24} color="black" style={{ paddingRight: 12 }} />
                                            } />
                                    </VStack>
                                </VStack>
                            </NativeBaseProvider>
                        </SafeAreaView>
                    </View>
                    <View style={{ flex: 1, paddingTop: 12 }}>
                    </View>
                </View>
            </View>
            <View style={styles.content}>
                <ScrollView style={
                    { width: '100%' }}>
                    <NativeBaseProvider>
                        <ScrollView style={{ marginHorizontal: 20, marginVertical: 10 }} showsVerticalScrollIndicator={false}>
                            <List borderColor='#f2f2f2' >
                                <Text style={{ fontSize: 17, fontWeight: '500', paddingLeft: 10 }}>History</Text>
                                <TouchableOpacity onPress={() => navigation.navigate("UserProfile")}>
                                    <List.Item style={styles.borderitem} >
                                        <Text style={styles.textCenter}>Profile</Text>
                                        <AntDesign style={styles.rightIcon} name="close" />
                                    </List.Item>
                                </TouchableOpacity>
                                <TouchableOpacity  >
                                    <List.Item style={styles.borderitem} >
                                        <Text style={styles.textCenter}>My Product</Text>
                                        <AntDesign style={styles.rightIcon} name="close" />
                                    </List.Item>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => navigation.navigate("PaymentHistory")}>
                                    <List.Item style={styles.borderitem}>
                                        <Text style={styles.textCenter} >Payment History</Text>
                                        <AntDesign style={styles.rightIcon} name="close" />

                                    </List.Item>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate("UserProfile")}>
                                    <List.Item style={styles.borderitem} >
                                        <Text style={styles.textCenter}>Profile</Text>
                                        <AntDesign style={styles.rightIcon} name="close" />
                                    </List.Item>
                                </TouchableOpacity>
                                <TouchableOpacity  >
                                    <List.Item style={styles.borderitem} >
                                        <Text style={styles.textCenter}>My Product</Text>
                                        <AntDesign style={styles.rightIcon} name="close" />
                                    </List.Item>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => navigation.navigate("PaymentHistory")}>
                                    <List.Item >
                                        <Text style={styles.viewmore} >View more</Text>
                                        <AntDesign name="down" size={24} style={styles.viewmore} />


                                    </List.Item>
                                </TouchableOpacity>


                            </List>
                        </ScrollView>
                    </NativeBaseProvider>


                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
    },
    header: {
        flex: 1,
        width: '100%',
    },
    content: {
        flex: 6,
    },
    borderitem: {
        borderBottomWidth: 1,
        color: 'gray',
        height: 50,
        flex: 1,
        justifyContent: 'space-between',
    },
    leftIcon:
    {
        fontSize: 17,
        color: '#339966',
        marginLeft: 2,
        marginRight: 10
    },
    textCenter: {
        fontSize: 15,
        fontWeight: '500',
        color: 'gray'
    },
    textLogout: {
        fontSize: 15,
        color: '#ff8566',
        fontWeight: '500'
    },
    rightIcon: {
        color: 'gray',
        position: 'absolute',
        right: 10,
        top: 3,
        fontSize: 17
    },
    viewmore: {
        color: '#ff6600',
        paddingRight: 7,
        fontSize: 17,
        fontWeight: '600'
    }
});
export default Search;