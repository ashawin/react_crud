import {
  PRODUCTS_SUCCESS,
  PRODUCT_SUCCESS,
  PRODUCTS_FAIL,
  PRODUCT_FAIL,
} from "../action/type";
const initialState = {};
export default function (state = initialState, action) {
  const { type, payload } = action;
  console.log("prod1 23", payload);
  switch (type) {
    case PRODUCTS_SUCCESS:
      return {
        ...state,
        products: payload,
      };
    case PRODUCTS_FAIL:
      return {
        ...state,
        products: null,
      };
    case PRODUCT_SUCCESS:
      return {
        ...state,
        product: payload,
      };
    case PRODUCT_FAIL:
      return {
        ...state,
        product: null,
      };
    default:
      return state;
  }
}
