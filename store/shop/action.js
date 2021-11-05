import * as api from "../../api/Index"
export const SHOP='SHOP';
export const getAllShop=()=>{
    return dispatch=>{
        api.Shop.getAllShop().then(response=>{
            if(response.data) dispatch({type:SHOP,data:response.data.success});
        });
    }
}