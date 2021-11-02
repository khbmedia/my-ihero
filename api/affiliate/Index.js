import axios from "axios";
axios.defaults.baseURL="https://ihero.dev.khb.asia/api";
const affiliateApi={
    getAffiliateByUserId:async ()=>{
        let result=await axios.get('/referal_log_affiliater');
        return result;
    },

}
export default affiliateApi;