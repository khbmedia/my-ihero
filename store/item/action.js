export const ALL_ITEM='ITEM';
export const TOP_RATE='TOP_RATE';
export const FAVORITE='FAVORITE';
export const getAllItem=(data)=>{
    return{type:ALL_ITEM,data:data}
}
export const getTopRate=(data)=>{
    return{type:TOP_RATE,data:data}
}
export const getFavorite=(data)=>{
    return{type:FAVORITE,data:data}
}