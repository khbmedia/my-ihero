import { WITHDRAW } from "./action"

const initialState={
    data:null
}
const WithdrawReducer=(state=initialState,action)=>{
    switch(action.type){
        case WITHDRAW:return {...state,data:action.data};
        default:return state;
    }
}
export default WithdrawReducer;