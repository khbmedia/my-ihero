import { CART } from "./action"

const initialState={
    data:null
}
const CARTReducer=(state=initialState,action)=>{
    switch(action.type){
        case CART:return {...state,data:action.data};
        default:return state;
    }
}
export default CARTReducer;