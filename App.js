import * as React from "react";
import { Text, View } from "react-native";
import RootStack from "./navigations/Root";
import DataFetcing from "./screens/Components/DataFetcing";
const App = () => {
    return (
        <RootStack />
    );
}
export default App;

// import * as React from 'react';
// import { View, useWindowDimensions } from 'react-native';
// import { TabView, SceneMap } from 'react-native-tab-view';

// const FirstRoute = () => (
//   <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
// );

// const SecondRoute = () => (
//   <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
// );
// const three = () => (
//   <View style={{ flex: 1, backgroundColor: 'red' }} />
// );
// const four  = () => (
//   <View style={{ flex: 1, backgroundColor: 'red' }} />
// ); 
// const renderScene = SceneMap({
//   first: FirstRoute,
//   second: SecondRoute,
//   three: three,
//   four: four,
//   five: four,
// });

// export default function TabViewExample() {
//   const layout = useWindowDimensions();

//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState([
//     { key: 'first', title: 'First' },
//     { key: 'second', title: 'Second' },
//     { key: 'three', title: 'Three' },
//     { key: 'four', title: 'Four' },
//     { key: 'five', title: 'Five' },
//   ]);

//   return (
//     <TabView
//       navigationState={{ index, routes }}
//       renderScene={renderScene}
//       onIndexChange={setIndex}
//       Scrollable={true}
//       initialLayout={{ width: layout.width }}
//     />
//   );
// }
