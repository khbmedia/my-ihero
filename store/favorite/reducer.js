import { FAVORITE } from "./action"

const initialState={
    data:null
}
const FavoriteReducer=(state=initialState,action)=>{
    switch(action.type){
        case FAVORITE:return {...state,data:action.data}
    }
}
export default FavoriteReducer;