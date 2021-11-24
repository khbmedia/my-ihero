import React, { useState, useEffect, useReducer } from "react";
import {
	Text,
	View,
	ScrollView,
	StyleSheet,
} from "react-native";
import { NativeBaseProvider } from "native-base";
import Color from "../../constant/Color";
import { SafeAreaView } from "react-native-safe-area-context";
import AffiliateComponnent from "../Components/Affliate";
const Affiliate = ({ navigation }) => {
	const [Data, setData] = useState([1, 2, 3, 4, 5])
	return (
		<NativeBaseProvider>
			<View style={styles.container}>
				<View style={styles.content}>
					<SafeAreaView>
						<ScrollView
							showsVerticalScrollIndicator={false} >
							<View style={styles.Header}>
								<View style={styles.box}>
									<Text style={{ fontSize: 18, fontWeight: '700', color: Color.textPrimary }}>0 USD</Text>
									<Text style={{ fontSize: 14, fontWeight: '500', color: Color.textPrimary }}>TOTAL AMOUNTS</Text>
								</View>
								<View style={styles.box}>
									<Text style={{ fontSize: 18, fontWeight: '700', color: Color.textPrimary }}>0</Text>
									<Text style={{ fontSize: 14, fontWeight: '500', color: Color.textPrimary }}>TOTAL REFERRED</Text>
								</View>
							</View>
							<View
								style={{
									flex: 1,
									flexDirection: "column",
									justifyContent: "center",
								}}
							>
								<AffiliateComponnent />

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
	Header: {
		width: '100%',
		minHeight: 100,
		padding: 1,
		paddingVertical: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		//backgroundColor: 'cyan'

	},
	content: {
		flex: 10,
		width: "100%",
	},
	box: {
		width: '48%',
		height: 90,
		borderRadius: 5,
		backgroundColor: '#ffffff',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.18,
		shadowRadius: 1.0,
		elevation: 1,
		justifyContent: 'center',
		alignItems: 'center'

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
export default Affiliate;