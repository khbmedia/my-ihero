import * as React from "react";
import RootStack from "./navigations/Root";
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import ShopReducer from "./store/shop/reducer";
import ItemReducer from "./store/item/reducer";
import UserReducer from "./store/user/reducer";
const App = () => {
    const rootReducer = combineReducers({
        shops: ShopReducer,
        items: ItemReducer,
        users: UserReducer,
    });
    const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
    return (
        <Provider store={store}>
            <RootStack />
        </Provider>
    );
}
export default App;