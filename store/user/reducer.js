import { SET_CREDENTIAL, SET_ERROR, USER } from "./action"

const initialState={
    data:null,
    userData:null,
    error:null
}
const UserReducer=(state=initialState,action)=>{
    switch(action.type){
        case USER:return {...state,data:action.data};
        case SET_CREDENTIAL:return {...state,userData:action.data};
        case SET_ERROR:return {...state,error:action.data};
        default:return state;
    }
}
export default UserReducer;