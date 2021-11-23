import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
// import Pic from '../Assets/Images/Brand/image1.png'
import { MaterialCommunityIcons } from '@expo/vector-icons';
const CourseByCategory = ({ props }) => {
	return (
		<TouchableOpacity style={styles.RootNotification}>
			<View style={{ minWidth: 50, height: '100%' }}>
				{/* <Image source={Pic} style={styles.ImgStyle} /> */}
			</View>
			<View style={{ width: "80%" }}>
				<Text style={styles.Detail}>
					There are Reere are several reasons behind React Native’s global success</Text>
				<Text style={styles.Date}> 2 min ago</Text>
			</View>
			<TouchableOpacity style={{ minWidth: 20, backgroundColor: 'green' }}>
				<MaterialCommunityIcons name="dots-vertical" style={styles.Option} />
			</TouchableOpacity>
		</TouchableOpacity>
	);
};
const styles = StyleSheet.create({
	Option: {
		position: 'absolute',
		color: '#000000',
		fontSize: 26
	},
	RootNotification: {
		minHeight: 20,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'flex-start',
		marginBottom: 20,
		borderBottomColor: '#e6e6e6',
		borderBottomWidth: 0.5
	},
	ImgStyle: {
		width: 50,
		height: 50,
		borderRadius: 50
	},
	Date: {
		fontSize: 12,
		fontWeight: '300',
		color: 'gray'
	},
	Detail: {
		fontSize: 15,
		fontWeight: '400',
		color: '#333333',
		padding: 5
	}
});
export default CourseByCategory;