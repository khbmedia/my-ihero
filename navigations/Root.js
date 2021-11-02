import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import Tabs from "./Tab";
const RootStack = () => {
    return (
        <NavigationContainer>
            <Tabs/>
        </NavigationContainer>
    );
}
export default RootStack;