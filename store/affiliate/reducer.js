import { AFFILIATE } from "./action"

const initialState={
    data:null
}
const AffiliateReducer=(state=initialState,action)=>{
    switch(action.type){
        case AFFILIATE:return {...state,data:action.data};
        default:return state;
    }
}
export default AffiliateReducer;