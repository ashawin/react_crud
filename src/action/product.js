import {
    PRODUCTS_SUCCESS,
    PRODUCTS_FAIL,
    SET_MESSAGE
} from "./type";
import productService from "../services/product-service";
export const allProducts = () => (dispatch) => {
    return productService.allProducts().then(
        (response) => {
         
            dispatch({
                type: PRODUCTS_SUCCESS,
                payload: response.data.products
            })
            return Promise.resolve();

        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            dispatch({
                type: PRODUCTS_FAIL,
            });
            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });
            return Promise.reject();

        })
}