import {
  PRODUCTS_SUCCESS,
  PRODUCTS_FAIL,
  SET_MESSAGE,
  PRODUCT_SUCCESS,
  PRODUCT_FAIL,
} from "./type";
import productService from "../services/product-service";
export const allProducts = () => (dispatch) => {
  return productService.allProducts().then(
    (response) => {
      dispatch({
        type: PRODUCTS_SUCCESS,
        payload: response.data.products,
      });
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
    }
  );
};
export const getSingleProduct = (id) => (dispatch) => {
    
  return productService.getProductById(id).then(
    (response) => {
      dispatch({
        type: PRODUCT_SUCCESS,
        payload: response.data,
      });
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
        type: PRODUCT_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};
