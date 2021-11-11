import { ALL_ITEM,FAVORITE,CATEGORIES,ITEM_BY_CATEGORY } from "./action"

const initialState={
    allItem:[],
    categories:[],
    favorite:[],
    itemByCategory:[]
}
const ItemReducer=(state=initialState,action)=>{
    switch(action.type){
        case ALL_ITEM:return {...state,allItem:action.data.data};
        case CATEGORIES:return {...state,categories:action.data};
        case FAVORITE:return {...state,favorite:action.data.data};
        case ITEM_BY_CATEGORY:return {...state,itemByCategory:action.data.data};
        default:return state;
    }
}
export default ItemReducer;