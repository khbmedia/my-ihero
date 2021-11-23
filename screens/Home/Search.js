import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from "react-native";
import { NativeBaseProvider, List } from "native-base";
import { AntDesign, Ionicons, FontAwesome } from "@expo/vector-icons";
const Search = ({ navigation }) => {
    const [data, setDate] = React.useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
    const [ActiveList, setActiveList] = React.useState(1)
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
    );
};
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