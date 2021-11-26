import { CART } from "./action"

const initialState = {
    CartData: null
}
const CARTReducer = (state = initialState, action) => {
    switch (action.type) {
        case CART: return { ...state, CartData: action.data };
        default: return state;
    }
}
export default CARTReducer;