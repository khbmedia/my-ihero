import { AFFILIATE } from "./action"

const initialState = {
    affiliateData: null
}
const AffiliateReducer = (state = initialState, action) => {
    switch (action.type) {
        case AFFILIATE: return { ...state, affiliateData: action.data };
        default: return state;
    }
}
export default AffiliateReducer;