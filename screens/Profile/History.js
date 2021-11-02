import * as React from 'react';
import { View, Text, StyleSheet, ScrollView , TouchableOpacity  } from 'react-native';
import {  FontAwesome5,FontAwesome  } from '@expo/vector-icons';
import { List, NativeBaseProvider } from "native-base";
const History = ({ Navigation }) => {
    return (
        <View style={{ backgroundColor: 'white', width: '100%', flex: 1, justifyContent: 'center' }} >
            <NativeBaseProvider>
                <ScrollView style={{}}>
                    <List borderColor='white'  marginX='3' >
                        <TouchableOpacity  >
                            <List.Item   >
                                <Text style={styles.textCenter1}>History</Text>
                            </List.Item>
                        </TouchableOpacity>
                        <List.Item style={styles.borderitem}>
                            <FontAwesome5 style={styles.leftIcon} name="user" />
                            <View>
                                <Text style={styles.textCenter} >Dunh Vidou</Text>
                                <Text style={styles.textdata} >2021 May 18  /  09:21 am</Text>
                            </View>
                            <FontAwesome name="trash-o" style={styles.rightIcon} />
                        </List.Item>
                        <List.Item style={styles.borderitem}>
                            <FontAwesome5 style={styles.leftIcon} name="user" />
                            <View>
                                <Text style={styles.textCenter} >Dunh Vidou</Text>
                                <Text style={styles.textdata} >2021 May 18  /  09:21 am</Text>
                            </View>
                            <FontAwesome name="trash-o" style={styles.rightIcon} />
                        </List.Item>
     
                        <List.Item style={styles.borderitem}>
                            <FontAwesome5 style={styles.leftIcon} name="user" />
                            <View>
                                <Text style={styles.textCenter} >Kakada Keo</Text>
                                <Text style={styles.textdata} >2021 May 18  /  09:34 pm</Text>
                            </View>
                                <FontAwesome name="trash-o" style={styles.rightIcon} />
                        </List.Item>
                        <List.Item style={styles.borderitem}>
                            <FontAwesome5 style={styles.leftIcon} name="user" />
                            <View>
                                <Text style={styles.textCenter} >Vann Sovey</Text>
                                <Text style={styles.textdata} >2021 May 18  /  02:14 pm</Text>
                            </View>
                            <FontAwesome name="trash-o" style={styles.rightIcon} />
                        </List.Item>
                        <List.Item style={styles.borderitem}>
                            <FontAwesome5 style={styles.leftIcon} name="user" />
                            <View>
                                <Text style={styles.textCenter} >Yem Rahang</Text>
                                <Text style={styles.textdata} >2021 May 18  /  09:21 am</Text>
                            </View>
                            <FontAwesome name="trash-o" style={styles.rightIcon} />
                        </List.Item>
                        <List.Item style={styles.borderitem}>
                            <FontAwesome5 style={styles.leftIcon} name="user" />
                            <View>
                                <Text style={styles.textCenter} >Pisey</Text>
                                <Text style={styles.textdata} >2021 May 18  /  09:34 pm</Text>
                            </View>
                            <FontAwesome name="trash-o" style={styles.rightIcon} />
                        </List.Item>
                        <List.Item style={styles.borderitem}>
                            <FontAwesome5 style={styles.leftIcon} name="user" />
                            <View>
                                <Text style={styles.textCenter} >San ChanThea</Text>
                                <Text style={styles.textdata} >2021 May 18  /  02:14 pm</Text>
                            </View>
                            <FontAwesome name="trash-o" style={styles.rightIcon} />
                        </List.Item>
                        <List.Item style={styles.borderitem}>
                            <FontAwesome5 style={styles.leftIcon} name="user" />
                            <View>
                                <Text style={styles.textCenter} >San ChanThea</Text>
                                <Text style={styles.textdata} >2021 May 18  /  02:14 pm</Text>
                            </View>
                            <FontAwesome name="trash-o" style={styles.rightIcon} />
                        </List.Item>
                        <List.Item style={styles.borderitem}>
                            <FontAwesome5 style={styles.leftIcon} name="user" />
                            <View>
                                <Text style={styles.textCenter} >San ChanThea</Text>
                                <Text style={styles.textdata} >2021 May 18  /  02:14 pm</Text>
                            </View>
                            <FontAwesome name="trash-o" style={styles.rightIcon} />
                        </List.Item>
                        <List.Item style={styles.borderitem}>
                            <FontAwesome5 style={styles.leftIcon} name="user" />
                            <View>
                                <Text style={styles.textCenter} >San ChanThea</Text>
                                <Text style={styles.textdata} >2021 May 18  /  02:14 pm</Text>
                            </View>
                            <FontAwesome name="trash-o" style={styles.rightIcon} />
                        </List.Item>
                        <List.Item style={styles.borderitem}>
                            <FontAwesome5 style={styles.leftIcon} name="user" />
                            <View>
                                <Text style={styles.textCenter} >San ChanThea</Text>
                                <Text style={styles.textdata} >2021 May 18  /  02:14 pm</Text>
                            </View>
                            <FontAwesome name="trash-o" style={styles.rightIcon} />
                        </List.Item>
                        <List.Item style={styles.borderitem}>
                            <FontAwesome5 style={styles.leftIcon} name="user" />
                            <View>
                                <Text style={styles.textCenter} >San ChanThea</Text>
                                <Text style={styles.textdata} >2021 May 18  /  02:14 pm</Text>
                            </View>
                            <FontAwesome name="trash-o" style={styles.rightIcon} />
                        </List.Item>
                        <List.Item style={styles.borderitem}>
                            <FontAwesome5 style={styles.leftIcon} name="user" />
                            <View>
                                <Text style={styles.textCenter} >San ChanThea</Text>
                                <Text style={styles.textdata} >2021 May 18  /  02:14 pm</Text>
                            </View>
                            <FontAwesome name="trash-o" style={styles.rightIcon} />
                        </List.Item>
                       

                    </List>
                </ScrollView>
            </NativeBaseProvider>
        </View>
    )
}
const styles = StyleSheet.create({
    borderitem: {
        borderTopWidth: 2,
        borderTopColor: '#f2f2f2',
        borderBottomWidth: 2,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        height: 80,
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
        fontSize: 27,
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
        color: 'black',
        position: 'absolute',
        right: 10,
        top: 3,
        fontSize: 24
    }
})
export default History;