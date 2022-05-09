import axios from "axios";
const API_URL = "https://dummyjson.com/";

class ProductService {
    allProducts() {
      return  axios.get(API_URL + 'products')
    }
}

export default new ProductService;