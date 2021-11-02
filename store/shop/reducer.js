import { SHOP } from "./action"

const initialState={
    data:null
}
const ShopReducer=(state=initialState,action)=>{
    switch(action.type){
        case SHOP:return {...state,data:action.data}
    }
}
export default ShopReducer;