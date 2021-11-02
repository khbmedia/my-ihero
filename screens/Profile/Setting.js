import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import { EvilIcons, FontAwesome5, AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';
import { List, NativeBaseProvider,VStack, Button, Switch } from "native-base";
const Setting = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: 'red', flex: 1, justifyContent: 'center', alignItems: 'center', color: 'white' }} >
      
      <View style={{ backgroundColor: 'white', width: '100%', flex: 3 }} >
        <NativeBaseProvider>
          <ScrollView>
            <View>
                <Text style={styles.textTitle}>General Setting</Text>
                <List>
                    <TouchableOpacity onPress={() => navigation.navigate("ProductStack", { screen: "ProducStack", params: { screen: 'IndexProducts', }, })} >
                        <List.Item style={styles.borderitem} >
                        <FontAwesome5 style={styles.leftIcon} name="user" />
                        <Text style={styles.textCenter}>Edit Profile</Text>
                        <AntDesign style={styles.rightIcon} name="right" />
                        </List.Item>
                    </TouchableOpacity>
                </List>
                <List>
                    <TouchableOpacity onPress={() => navigation.navigate("ProductStack", { screen: "ProducStack", params: { screen: 'IndexProducts', }, })} >
                        <List.Item style={styles.borderitem} >
                        <FontAwesome5 style={styles.leftIcon} name="key" />
                        <Text style={styles.textCenter}>Change Password</Text>
                        <AntDesign style={styles.rightIcon} name="right" />
                        </List.Item>
                    </TouchableOpacity>
                </List>
                <List>
                    <TouchableOpacity onPress={() => navigation.navigate("ProductStack", { screen: "ProducStack", params: { screen: 'IndexProducts', }, })} >
                        <List.Item style={styles.borderitem} >
                        <FontAwesome5 style={styles.leftIcon} name="flag" />
                        <Text style={styles.textCenter}>Change Lanuage</Text>
                        <AntDesign style={styles.rightIcon} name="right" />
                        </List.Item>
                    </TouchableOpacity>
                </List>
                <List>
                    <TouchableOpacity onPress={() => navigation.navigate("ProductStack", { screen: "ProducStack", params: { screen: 'IndexProducts', }, })} >
                        <List.Item style={styles.borderitem} >
                        <FontAwesome5 style={styles.leftIcon} name="map" />
                        <Text style={styles.textCenter}>Change Location</Text>
                        <AntDesign style={styles.rightIcon} name="right" />
                        </List.Item>
                    </TouchableOpacity>
                </List>
            </View>
            <View>
                <Text style={styles.textTitle}>Notifcations</Text>
                <List>
                    <TouchableOpacity onPress={() => navigation.navigate("ProductStack", { screen: "ProducStack", params: { screen: 'IndexProducts', }, })} >
                        <List.Item style={styles.borderitem} >
                        <FontAwesome5 style={styles.leftIcon} name="bell" />
                        <Text style={styles.textCenter}>Push Notification</Text>
                        <Switch style={styles.rightIcon} colorScheme="red" name="right"  />
                        </List.Item>
                    </TouchableOpacity>
                </List>
                <List>
                    <TouchableOpacity onPress={() => navigation.navigate("ProductStack", { screen: "ProducStack", params: { screen: 'IndexProducts', }, })} >
                        <List.Item style={styles.borderitem} >
                        <FontAwesome5 style={styles.leftIcon} name="bell" />
                        <Text style={styles.textCenter}>Order Notification</Text>
                        <Switch style={styles.rightIcon} colorScheme="red" name="right"  />
                        </List.Item>
                    </TouchableOpacity>
                </List>
            </View>
            <View>
                <Text style={styles.textTitle}>About</Text>
                <List>
                    <TouchableOpacity onPress={() => navigation.navigate("ProductStack", { screen: "ProducStack", params: { screen: 'IndexProducts', }, })} >
                        <List.Item style={styles.borderitem} >
                        <FontAwesome5 style={styles.leftIcon} name="book" />
                        <Text style={styles.textCenter}>Term Condition</Text>
                        <AntDesign style={styles.rightIcon} name="right" />
                        </List.Item>
                    </TouchableOpacity>
                </List>
            </View>
          </ScrollView>
        </NativeBaseProvider>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    textTitle:{
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 20,
        marginLeft: 15,
        marginBottom: 20
    },  
  borderitem: {
    height: 45,
    flex: 1,
  },
  leftIcon:
  {
    fontSize: 24,
    color: '#0A8791',
    marginLeft: 2,
    marginRight: 10
  },
  textCenter: {
    fontSize: 16,
    fontWeight: '600'
  },
  textLogout: {
    fontSize: 15,
    color: 'red',
    fontWeight: '800'
  },
  rightIcon: {
    color: '#0A8791',
    position: 'absolute',
    justifyContent: 'center',
    right: 10,
    fontSize: 24
  }
})
export default Setting;

