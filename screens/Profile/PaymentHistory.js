import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { List, NativeBaseProvider, Box, Button } from "native-base";
// import StepIndicator from 'react-native-step-indicator';
import { flex } from 'styled-system';
const History = ({ navigation }) => {

    return (
        <View style={{ backgroundColor: 'white', width: '100%', flex: 1, justifyContent: 'center' }} >
            
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
        fontSize: 17,
        color: 'red',
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
})
export default History;

// const labels = ["Cart","Delivery Address","Order Summary","Payment Method","Track"];
// const customStyles = {
//   stepIndicatorSize: 25,
//   currentStepIndicatorSize:30,
//   separatorStrokeWidth: 2,
//   currentStepStrokeWidth: 3,
//   stepStrokeCurrentColor: '#fe7013',
//   stepStrokeWidth: 3,
//   stepStrokeFinishedColor: '#fe7013',
//   stepStrokeUnFinishedColor: '#aaaaaa',
//   separatorFinishedColor: '#fe7013',
//   separatorUnFinishedColor: '#aaaaaa',
//   stepIndicatorFinishedColor: '#fe7013',
//   stepIndicatorUnFinishedColor: '#ffffff',
//   stepIndicatorCurrentColor: '#ffffff',
//   stepIndicatorLabelFontSize: 13,
//   currentStepIndicatorLabelFontSize: 13,
//   stepIndicatorLabelCurrentColor: '#fe7013',
//   stepIndicatorLabelFinishedColor: '#ffffff',
//   stepIndicatorLabelUnFinishedColor: '#aaaaaa',
//   labelColor: '#999999',
//   labelSize: 13,
//   currentStepLabelColor: '#fe7013'
// }


// constructor() {
//     this.state = {
//         currentPosition: 0
//     }
// }

// render() {
//   return (
//     <StepIndicator
//          customStyles={customStyles}
//          currentPosition={this.state.currentPosition}
//          labels={labels}
//     />
//   )
// }
