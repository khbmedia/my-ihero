import { NOTIFICATION } from "./action"

const initialState={
    data:null
}
const NotificationReducer=(state=initialState,action)=>{
    switch(action.type){
        case NOTIFICATION:return {...state,data:action.data};
        default:return state;
    }
}
export default NotificationReducer;