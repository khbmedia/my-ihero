import { ALL_ITEM,FAVORITE } from "./action"

const initialState={
    allItem:[],
    favorite:[],
}
const ItemReducer=(state=initialState,action)=>{
    switch(action.type){
        case ALL_ITEM:return {...state,allItem:action.data};
        case FAVORITE:return {...state,favorite:action.data};
        default:return state;
    }
}
export default ItemReducer;