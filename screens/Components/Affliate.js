import * as React from "react";
import { Entypo, AntDesign } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Tabs, NativeBaseProvider, Box, VStack, Button } from 'native-base';
import axios from 'axios';
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
const AffiliateComponnent = (props) => {
	const navigation = useNavigation();

	return (
		<TouchableOpacity style={styles.borderitem}    >
			<View style={styles.menuBrand}>
				<Box bg="white" shadow={2} rounded="lg" width="99%" padding={3} mb={2} mx='auto' justifyContent="center" >
					<VStack space={1} height={90}>
						<View style={{ flex: 1, flexDirection: 'column' }} >
							<View style={{ flex: 1, width: '100%', flexDirection: 'row' }}>
								<View style={{ flex: 1, justifyContent: 'center' }}>
									<Text style={styles.title}>Customer Name</Text>
								</View>
								<View style={{ flex: 1 }}>
									<Text style={styles.data}>: Dunhvidou</Text>
								</View>
							</View>
							<View style={{ flex: 1, width: '100%', flexDirection: 'row' }}>
								<View style={{ flex: 1 }}>
									<Text style={styles.title}>Restaurant Name</Text>
								</View>
								<View style={{ flex: 1 }}>
									<Text style={styles.data}>: 00000001</Text>
								</View>
							</View>
							<View style={{ flex: 1, width: '100%', flexDirection: 'row' }}>
								<View style={{ flex: 1 }}>
									<Text style={styles.title}>Due Amount</Text>
								</View>
								<View style={{ flex: 1 }}>
									<Text style={styles.data}>: 90</Text>
								</View>
							</View>
							<View style={{ flex: 1, width: '100%', flexDirection: 'row' }}>
								<View style={{ flex: 1 }}>
									<Text style={styles.title}>Invoice ID	</Text>
								</View>
								<View style={{ flex: 1 }}>
									<Text style={styles.data}>: ok</Text>
								</View>
							</View>
						</View>
					</VStack>
				</Box>

			</View>
		</TouchableOpacity>
	)
}
const styles = StyleSheet.create({
	menuBrand: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	title: {
		fontSize: 16,
		marginBottom: 1,
		fontWeight: '500',
		paddingRight: 40
	},
	data: {
		fontSize: 16,
		marginBottom: 1,
		fontWeight: '400',
		color: '#737373',
		justifyContent: 'center'
	},
});
export default AffiliateComponnent;