
import * as React from 'react';
import { } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import {
    NativeBaseProvider,
    List
} from 'native-base';
import { Dimensions } from 'react-native';
import {
    Input
} from 'native-base';
import Color from '../../constant/Color';
import { AntDesign, Feather } from '@expo/vector-icons';
const Search = ({ navigation }) => {
    const width = Dimensions.get("window").width;
    React.useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <NativeBaseProvider>
                    <View style={{ width: width, alignItems: 'center', height: '100%', justifyContent: 'center', flexDirection: 'row' }}>
                        {/*<AntDesign style={{ fontSize: 25, color: 'white' }} name="left" />*/}
                        <Input
                            variant="outline"
                            placeholder="Search your course name here..."
                            //px={3}
                            height={9}
                            width="90%"
                            borderRadius={5}
                            bg="white"
                        />
                    </View>
                </NativeBaseProvider>
            ),
            headerTintColor: Color.textPrimary,
            title: "Restaurants",
            headerStyle: {
                backgroundColor: Color.bgPrimary
                , elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
            }
        })
    }, []);
    return (
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