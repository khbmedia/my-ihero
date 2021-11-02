import axios from "axios";
axios.defaults.baseURL="https://ihero.dev.khb.asia/api";
const orderApi={
    getOrderCustomer:async ()=>{
        let result=await axios.get('/customer/orderReport');
        return result;
    },

}
export default orderApi;