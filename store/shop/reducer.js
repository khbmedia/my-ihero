import { SHOP, TOP_RATE } from "./action"
const initialState = {
    data: [],
    topRate: []
}
const ShopReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOP: return { ...state, data: action.data };
        case TOP_RATE: return { ...state, topRate: action.data };
        default: return state;
    }
}
export default ShopReducer;