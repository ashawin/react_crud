import {
    PRODUCTS_SUCCESS,
    PRODUCTS_FAIL,
} from "../action/type";
const initialState={};
export default function (state = initialState, action) {
    const { type, payload } = action;
    console.log('prod1 23',payload)
    switch (type) {
        case PRODUCTS_SUCCESS:
            return {
                ...state,
                products:payload
            }
        case PRODUCTS_FAIL:
            return {
                ...state,
                products:null
            }
        default:
            return state

    }

}