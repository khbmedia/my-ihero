import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { NativeBaseProvider, ScrollView } from "native-base";
import NotifcationComponent from '../Components/Notification'
const Notification = ({ navigation }) => {
	const [data, setDate] = React.useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
	return (
		<NativeBaseProvider>
			<View style={styles.container}>
				<View style={styles.container1}>
					<ScrollView
						style={{ flex: 1, width: "100%" }}
						showsVerticalScrollIndicator={false} >
						<View style={styles.container1_1}>
							<View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
								<Text style={{ fontSize: 21, fontWeight: '600' }}>Notification</Text>
							</View>
							<View style={{ width: '100%', flexDirection: 'column', justifyContent: 'space-between', padding: 5 }}>
								{data.map((element) => {
									return (
										<NotifcationComponent key={element} />
									)
								})
								}
							</View>
						</View>
					</ScrollView>
				</View>
			</View >
		</NativeBaseProvider >
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: '#0080ff',
	},
	container1: {
		flex: 1,
		width: "100%",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#f2f2f2",
		overflow: 'hidden',
	},
	container1_1: {
		flex: 1,
		width: "100%",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		paddingHorizontal: 5,
	},


});
export default Notification;