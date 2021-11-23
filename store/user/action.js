export const USER='USER';
export const LOGIN='LOGIN';

export const checkLogin=(credential)=>{
    return dispatch=>{
        
        api.Shop.getAllShop().then(response=>{
            if(response.data) dispatch({type:LOGIN,credential:credential});
        });
    }
}
export const setUser=(data)=>{
    return{type:USER,data:data}
}
