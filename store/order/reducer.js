import { ORDER } from "./action"

const initialState={
    data:null
}
const OrderReducer=(state=initialState,action)=>{
    switch(action.type){
        case ORDER:return {...state,data:action.data}
    }
}
export default OrderReducer;