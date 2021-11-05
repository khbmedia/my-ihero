import { ALL_ITEM,FAVORITE,TOP_RATE } from "./action"

const initialState={
    allItem:[],
    favorite:[],
    topRate:[]
}
const ItemReducer=(state=initialState,action)=>{
    switch(action.type){
        case ALL_ITEM:return {...state,allItem:action.data};
        case FAVORITE:return {...state,favorite:action.data};
        case TOP_RATE:return {...state,topRate:action.data};
        default:return state;
    }
}
export default ItemReducer;