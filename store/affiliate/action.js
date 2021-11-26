export const AFFILIATE = 'AFFILIATE';
import * as api from "../../api/Index";
export const setAffiliate = (data) => {
    return { type: AFFILIATE, data: data }
}
export const getWishlist = (token) => {
    return dispatch => {
        api.Item.getWishlist(token).then(response => {
            if (response.data.success) {
                console.log(response.data);
                //dispatch(setAffiliate(response.data.success.data));
            }
        })
    }

}