import { SHOP } from "./action"

const initialState={
    data:[]
}
const ShopReducer=(state=initialState,action)=>{
    switch(action.type){
        case SHOP:return {...state,data:action.data};
        default:return state;
    }
}
export default ShopReducer;