import { ITEM } from "./action"

const initialState={
    data:null
}
const ItemReducer=(state=initialState,action)=>{
    switch(action.type){
        case ITEM:return {...state,data:action.data}
    }
}
export default ItemReducer;