import AsyncStorage from "@react-native-async-storage/async-storage";
import * as api from "../../api/Index";
export const USER = 'USER';
export const SET_CREDENTIAL = 'SET_CREDENTIAL';
export const SET_ERROR = 'SET_ERROR';
export const SET_PROFILE = 'SET_PROFILE';

export const setCredential = (data) => {
    return { type: SET_CREDENTIAL, data: data };
}
export const setError = (data) => {
    return { type: SET_ERROR, data: data };
}
export const setProfile = (data) => {
    return { type: SET_PROFILE, data: data };
}
export const logout = (token) => {
    return dispatch => {
        api.User.logout(token).then(response => {
            if (response.data.success) {
                console.log('logout')
                AsyncStorage.removeItem('data');
                dispatch(setCredential(null));
            } else {
                console.log(response.data.error);
            }
        })
    }
}
export const getUserProfile = (token) => {
    return dispatch => {
        api.User.getUserProfile(token).then(response => {
            console.log('kjhgfd')
            if (response.data) {
                console.log(response.data)
                dispatch(setProfile(response.data.success));
            } else {
                console.log('error')
            }
        })
    }
}
export const UpdateUserProfile = (data, token) => {
    console.log('dl')
    return dispatch => {
        api.User.UpdateUserProfile(data, token).then(response => {
            if (response.data) {
                console.log(response)
            } else {
                console.log(response.data.error)
            }
        })
    }
}
export const checkLogin = (credential) => {
    return dispatch => {
        api.User.checkLogin(credential).then(response => {
            if (response.data.success) {
                console.log(response.data.success)
                dispatch(setCredential(response.data.success));
                AsyncStorage.setItem('data', JSON.stringify(response.data.success));
            } else {
                console.log('Error')
                dispatch(setError(response.data.error));
            }
        });
    }
}
export const setUser = (data) => {
    return { type: USER, data: data }
}
