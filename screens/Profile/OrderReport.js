import React, { useState, useEffect, useReducer } from "react";
import {
	View,
	ScrollView,
	StyleSheet,
} from "react-native";
import { Tabs, NativeBaseProvider } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import Report from "../Components/Report";
const OrderReport = ({ navigation }) => {
	const [Data, setData] = useState([1, 2, 3, 4, 5])
	return (
		<NativeBaseProvider>
			<View style={styles.container}>
				<View style={styles.content}>
					<SafeAreaView>
						<ScrollView
							showsVerticalScrollIndicator={false} >
							<View
								style={{
									flex: 1,
									flexDirection: "column",
									justifyContent: "center",
								}}
							>
								<Report />

							</View>
						</ScrollView>
					</SafeAreaView>
				</View>
			</View>
		</NativeBaseProvider>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
	},

	content: {
		flex: 10,
		width: "100%",
		paddingTop: 10
	},
	addnew: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#ff5500",
		borderRadius: 5,
		height: 35,
	},
});
export default OrderReport;