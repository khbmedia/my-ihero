import axios from "axios";
axios.defaults.baseURL="https://ihero.dev.khb.asia/api";
export const Affiliate={
    getAffiliateByUserId:async ()=>{
        let result=await axios.get('/referal_log_affiliater');
        return result;
    },
}
export const Item={
    getMenuByRestaurantId:async (shopId)=>{
        let result=await axios.get('/home-front-resturant-menu/'+shopId);
        return result;
    },
    getMenuCategoryByRestaurantId:async (shopId)=>{
        let result=await axios.get('/home-front-menu-category/'+shopId);
        return result;
    },
    setWishlist:async (data,token)=>{
    let result=await axios.post('/wishlist',data,{
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
            Accept: "application/json",
        },
        });
    return result;
    },
    removeWishlist:async (id,token)=>{
    let result=await axios.delete('/wishlist/'+id,null,{
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
            Accept: "application/json",
        },
        });
    return result;
    },
    getWishlist:async (token)=>{
    let result=await axios.get('/wishlist',null,{
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
            Accept: "application/json",
        },
        });
    return result;
    },
}
export const Notification={
    getNotificationByUserId:async (id)=>{
        let result=await axios.get('/get-notification/'+id);
        return result;
    },

}
export const Order={
    getOrderCustomer:async ()=>{
        let result=await axios.get('/customer/orderReport');
        return result;
    },
    createOrder:async (data,token)=>{
        let result=await axios.post('/home-front-restaurant-order',data,{
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
                Accept: "application/json",
            },
            });
        return result;
    },
    

}
export const Shop={
    getAllShop:async (sort='asc')=>{
        let result=await axios.get('/home-front-resturant-all?sort='+sort);
        return result;
    },
    getAllShopCategory:async ()=>{
        let result=await axios.get('home-front-resturant-categories');
        return result;
    },
    getShopById:async (shopId)=>{
        let result=await axios.get('/home-front-resturant/'+shopId);
        return result;
    },
    getTopRateShop:async ()=>{
        let result=await axios.get("/home-front-resturant");
        return result;
    }

}
export const Address={
    getProvinc:async ()=>{
        let result=await axios.get('/get-provinces');
        return result;
    },
    getDistrict:async ()=>{
        let result=await axios.get('/get-district');
        return result;
    },
    getCommunes:async ()=>{
        let result=await axios.get('/get-communes');
        return result;
    },
    getVillages:async ()=>{
        let result=await axios.get('/get-villages');
        return result;
    },
}
export const User={
    checkLogin:async (credential)=>{
        let result=await axios.post('/login',credential);
        return result;
    }
}