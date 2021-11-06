import * as api from "../../api/Index";
export const ALL_ITEM='ITEM';
export const FAVORITE='FAVORITE';
export const getAllItem=(data)=>{
    return{type:ALL_ITEM,data:data}
}
export const getFavorite=(token)=>{
    return dispatch=>{
        api.Item.getWishlist(token).then(response=>{
            if(response.data.success){
                dispatch({type:FAVORITE,data:response.data.success});
            }
        })
    }
}
