import axios from "axios";
const API_URL = "https://dummyjson.com/auth/";


class AuthService {
    login(username, password) {
      return   axios.post(API_URL + 'login', { username, password }).then((response) => {
            console.log('this is test 6',response.data)
            if (response.data.token) {
                localStorage.setItem('user', response.data)
            }
            return response;
        })
    }
    logout() {
        localStorage.clear();
    }
    register(name, email, mobile) {
        axios.post(API_URL + 'signup', { name, email, mobile })
    }
}
export default new AuthService;