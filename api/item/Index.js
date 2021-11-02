import axios from "axios";
axios.defaults.baseURL="https://ihero.dev.khb.asia/api";
const itemApi={
    getMenuByRestaurantId:async (id)=>{
        let result=await axios.get('/home-front-resturant-menu/'+id);
        return result;
    },

}
export default itemApi;