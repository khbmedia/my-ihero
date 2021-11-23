import * as api from "../../api/Index";
export const USER='USER';
export const SET_CREDENTIAL='SET_CREDENTIAL';
export const setCredential=(data)=>{
    return {type:SET_CREDENTIAL,data:data};
}
export const checkLogin=(credential)=>{
    return dispatch=>{
        api.User.checkLogin(credential).then(response=>{
            if(response.data.success){
                dispatch(setCredential(data));
            }
        });
    }
}
export const setUser=(data)=>{
    return{type:USER,data:data}
}
