import * as React from "react";
import { Feather, AntDesign } from '@expo/vector-icons';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { List,Modal,Button } from "native-base"; 
import axios from 'axios';
import { useState } from "react"; 
const Video = props => {  
    const [showModal, setShowModal] = useState(false)
    const deleteColor=(id)=>{
        axios.get('https://depot25.dev.khb.asia/api/front-product-video-destroy/'+id)
            .then(res => {
                console.log('You has Delete Video in Id'+id);
                setShowModal(false)
            })
            .catch(err => {
                console.log(' success');
                console.log(err)
            })
    }
    const [VideoId, setId]=useState(null);
    return props.VideoList.map
        (ele =>
            <TouchableOpacity style={styles.borderitem} key={ele.id}>
                <List.Item style={props.VideoList}>
                    <View style={styles.name}>
                        <Text style={styles.Textname}>{ele.name}</Text>
                        <Text style={styles.Textdate}>{ele.created_at}</Text>
                    </View>
                    <View style={styles.action}>
                        <TouchableOpacity  onPress={() => { setId(ele.id); setShowModal(true);} }>
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
                                <Button  onPress={()=> {   deleteColor(VideoId); }}  >
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
        height: 70,
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#f2f2f2',
        backgroundColor: '#f2f2f2'
    },

    name:
    {
        flex: 4,
        width: '50%',
        height: 100,
        justifyContent: 'center',
        padding: 10

    },
    action: {

        paddingRight: 5,
        paddingTop: 3,
        height: 70,
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
export default Video;
 