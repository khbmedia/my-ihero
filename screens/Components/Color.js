// onPress={()=>deleteColor(ele.id)}//
import * as React from "react";
import { Entypo, AntDesign } from '@expo/vector-icons';
import { View, StyleSheet, Text, TouchableOpacity,Pressable } from 'react-native';
import { List,Modal,Button } from "native-base"; 
import axios from 'axios';
import { useState } from "react";
import { useNavigation } from "@react-navigation/native"; 
const Color = props => {
    const navigation= useNavigation();
    const [showModal, setShowModal] = useState(false) 
    const deleteColor=(ColorID)=>{
        axios.get('https://depot25.dev.khb.asia/api/front-product-color-destroy/'+ColorID)
            .then(res => {
                console.log(' success');
                console.log(ColorID); 
                setShowModal(false);
            })
            .catch(err => { 
                console.log(err)
            })
    }
   const [ColorID, setId]=useState(null);
   const editColor = (ele) => {
    navigation.navigate("ProductStack", { screen: "ColorsStack", params: { screen: 'CreateColors', params: { ele } } });
}
    return props.ColorList.map 
    (ele =>
            <TouchableOpacity style={styles.borderitem} key={ele.id}onPress={() => editColor(ele)}>
                <List.Item style={props.ColorList}>
                    <View style={styles.img}>
                        <View style={{backgroundColor:ele.color_code}} borderRadius={100}>
                            <Entypo name="dot-single" size={50} color={ele.color_code} /> 
                        </View>
                    </View>
                    <View style={styles.name}>
                        <Text style={styles.Textname}>{ele.name}</Text>
                        <Text style={styles.Textdate}>{ele.color_code}</Text>
                    </View>
                    <View style={styles.action}>
                        <TouchableOpacity  onPress={() => { setId(ele.id); setShowModal(true); }} >
                            <AntDesign name="close" size={25} color="red" />
                        </TouchableOpacity>
                        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                            <Modal.Content maxWidth="400px" style={{backgroundColor:'#060818'}}>
                            <Modal.CloseButton />
                            <Modal.Header style={{alignItems:'center'}}>
                            <AntDesign name="exclamationcircleo" size={60} color="#f8bb86" />
                            </Modal.Header>
                            <Modal.Body style={{alignItems:'center',}}>
                            <Text style={{color:'gray', fontSize:30, fontWeight:'700', paddingTop:15}}> Are You You ?</Text>
                            <Text style={{color:'gray', fontSize:16,  paddingTop:10}}> You won't be able to revert this!</Text>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button.Group variant="ghost" space={2}>
                                <Button
                                onPress={()=>
                                    {
                                        
                                        
                                        deleteColor(ColorID);
                                    }}
                                
                                >
                                    <Text style={{fontSize:'22', color:'#bfbfbf', fontWeight:'700'}}>Yes, delete it  </Text>
                                </Button>
                                <Button onPress={() => {
                                    setShowModal(false)
                                    }}>
                                <Text style={{fontSize:'22', color:'#bfbfbf', fontWeight:'700', paddingLeft:20}}>  Cancel</Text>
                                </Button>
                                
                                </Button.Group>
                            </Modal.Footer>
                            </Modal.Content>
                        </Modal>
                    </View>
                </List.Item> 
            </TouchableOpacity>
        )
}
const styles = StyleSheet.create({
    borderitem: {
        margin: 2,
        height: 100,
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor:'#f2f2f2',
        backgroundColor: '#f2f2f2'
    },
    img: {
        flex: 3,
        height: 100,
        width: '50%',
        marginLeft: -10,
        borderRightColor: 'gray',
        borderRightWidth: 0.6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    name:
    {
        flex: 4,
        width: '50%',
        height: 100,
        justifyContent: 'space-evenly',
        padding: 20

    },
    action: {

        paddingRight: 5,
        paddingTop: 3,
        height: 100,
    },
    Textname:
    {
        fontWeight: 'bold',
        fontSize: 20
    },
    image1: {
        width: '100%',
        height: '100%'
    },
    Textdate: {
        fontSize: 12,
        color: 'gray',
    },
});
export default Color; 