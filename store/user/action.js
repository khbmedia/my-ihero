import AsyncStorage from "@react-native-async-storage/async-storage";
import * as api from "../../api/Index";
export const USER = 'USER';
export const SET_CREDENTIAL = 'SET_CREDENTIAL';
export const SET_ERROR = 'SET_ERROR';

export const setCredential = (data) => {
    return { type: SET_CREDENTIAL, data: data };
}
export const setError = (data) => {
    return { type: SET_ERROR, data: data };
}
export const logout=(token)=>{
    return dispatch=>{
        api.User.logout(token).then(response=>{
            if(response.data.success){
                dispatch(setCredential(null));
                AsyncStorage.removeItem('data');
            }else{
                console.log(response.data.error);
            }
        })
        
    }
}
export const checkLogin = (credential) => {
    return dispatch => {
        api.User.checkLogin(credential).then(response => {
            if (response.data.success) {
                dispatch(setCredential(response.data.success));
                AsyncStorage.setItem('data', JSON.stringify(response.data.success));
            } else {
                dispatch(setError(response.data.error));
            }
        });
    }
}
export const setUser = (data) => {
    return { type: USER, data: data }
}
