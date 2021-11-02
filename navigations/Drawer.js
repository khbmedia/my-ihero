import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProductCrud from "./ProductCrud";
import CategoryCrud from "./CategoryCrud";
import UnitCrud from "./UnitCrud";
import ColorCrud from "./ColorCrud";
import VideoCrud from "./VideoCrud";
import Home from "./Home";
const RootDrawer = createDrawerNavigator();
const Drawer = () => {
    return (
        
        <RootDrawer.Navigator>
            <RootDrawer.Screen name="Home" component={ Home}/>
                <RootDrawer.Screen name="Product" component={ProductCrud} />
                <RootDrawer.Screen name="Category" component={CategoryCrud} />
                <RootDrawer.Screen name="Color" component={ColorCrud} />
                <RootDrawer.Screen name="Unit" component={UnitCrud }/>
                <RootDrawer.Screen name="Video" component={VideoCrud }/>
            </RootDrawer.Navigator>
    )
}
export default Drawer;