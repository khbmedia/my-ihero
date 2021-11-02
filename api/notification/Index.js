import axios from "axios";
axios.defaults.baseURL="https://ihero.dev.khb.asia/api";
const notificationApi={
    getNotificationByUserId:async (id)=>{
        let result=await axios.get('/get-notification/'+id);
        return result;
    },

}
export default notificationApi;