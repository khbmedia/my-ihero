import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { List, NativeBaseProvider } from "native-base";
import { FontAwesome5,Feather } from '@expo/vector-icons';
const Invoice = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.childcard}> 
                   <Text style={{ color: 'white' }}>Total</Text>
                    <Text style={{ color: 'white', fontSize: 29, fontWeight: "bold" }}>$ 104,970.00</Text>
                </View>
                <View style={styles.childcard1}>
                    <View style={styles.paid}>
                        <Text style={{ color: 'white' }}>Paid</Text>
                        <Text style={{ color: 'white', fontSize: 23 }}>$ 2497,00</Text>
                    </View>
                    <View style={styles.unpaid}>
                        <Text style={{ color: 'white' }}>UnPaid</Text>
                        <Text style={{ color: 'white', fontSize: 23 }}>$ 497,00</Text>
                    </View>
                </View>
            </View>
            <View style={styles.card1}>
                <NativeBaseProvider>
                    <ScrollView >
                        <List borderColor='white' marginX='3'>
                            <TouchableOpacity  >
                                <List.Item   >
                                    <Text style={styles.textCenter1}>Invoice</Text>
                                </List.Item>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate("InvoiceDetail")}>
                                <List.Item style={styles.borderitem}>
                                    <FontAwesome5 style={styles.leftIcon} name="user" />
                                    <View>
                                        <Text style={styles.textCenter} >Dunh Vidou</Text>
                                        <Text style={styles.textdata} >2021 May 18  /  09:21 am</Text>
                                    </View>
                                    <Text style={styles.rightIcon}>- $190</Text>
                                </List.Item>
                            </TouchableOpacity> 
                            <TouchableOpacity onPress={() => navigation.navigate("InvoiceDetail")}>
                                <List.Item style={styles.borderitem}>
                                    <FontAwesome5 style={styles.leftIcon} name="user" />
                                    <View>
                                        <Text style={styles.textCenter} >Dunh Vidou</Text>
                                        <Text style={styles.textdata} >2021 May 18  /  09:21 am</Text>
                                    </View>
                                    <Text style={styles.rightIcon}>- $190</Text>
                                </List.Item>
                            </TouchableOpacity> 
                            <TouchableOpacity onPress={() => navigation.navigate("InvoiceDetail")}>
                                <List.Item style={styles.borderitem}>
                                    <FontAwesome5 style={styles.leftIcon} name="user" />
                                    <View>
                                        <Text style={styles.textCenter} >Dunh Vidou</Text>
                                        <Text style={styles.textdata} >2021 May 18  /  09:21 am</Text>
                                    </View>
                                    <Text style={styles.rightIcon}>- $190</Text>
                                </List.Item>
                            </TouchableOpacity> 
                            <TouchableOpacity onPress={() => navigation.navigate("InvoiceDetail")}>
                                <List.Item style={styles.borderitem}>
                                    <FontAwesome5 style={styles.leftIcon} name="user" />
                                    <View>
                                        <Text style={styles.textCenter} >Dunh Vidou</Text>
                                        <Text style={styles.textdata} >2021 May 18  /  09:21 am</Text>
                                    </View>
                                    <Text style={styles.rightIcon}>- $190</Text>
                                </List.Item>
                            </TouchableOpacity> 
                            <TouchableOpacity onPress={() => navigation.navigate("InvoiceDetail")}>
                                <List.Item style={styles.borderitem}>
                                    <FontAwesome5 style={styles.leftIcon} name="user" />
                                    <View>
                                        <Text style={styles.textCenter} >Dunh Vidou</Text>
                                        <Text style={styles.textdata} >2021 May 18  /  09:21 am</Text>
                                    </View>
                                    <Text style={styles.rightIcon}>- $190</Text>
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
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: "100%",
        height: '100%',
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0A8791',
        width: '100%'
    },
    card1: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    childcard: {
        flex: 2,
        justifyContent: 'center',
        alignItems: "center",
        width: '100%',
  
    },
    childcard1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: 'white',
    },
    paid: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    unpaid: {
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        borderLeftWidth: 1,
        borderLeftColor: 'white'
    },
    borderitem: {
        borderTopWidth: 2,
        borderTopColor: '#f2f2f2',
        borderBottomWidth: 2,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        height: 80,
        width: '100%',
        flex: 1,
        justifyContent: 'space-between',
    },
    leftIcon:
    {
        fontSize: 24,
        color: '#0A8791',
        marginLeft: 2,
        marginRight: 10
    },
    textdata: {
        color: 'gray',
        fontSize: 12,

    },
    textCenter1: {
        fontSize: 17,
        color: 'green',
        fontWeight: 'bold',
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 10,


    },
    textCenter: {
        fontSize: 16,
        fontWeight: '600'
    },
    rightIcon: {
        color: 'red',
        position: 'absolute',
        right: 10,
        top: 3,
        fontSize: 17,
        fontWeight: 'bold'
    }

});
export default Invoice;