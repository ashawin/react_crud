import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE
} from "./type";
import authService from "../services/auth-service";
export const register = (name, email, mobile) => (dispatch) => {
    return authService.register(name, email, mobile).then(
        (response) => {
            dispatch({
                type: REGISTER_SUCCESS,
            });
            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message
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
                type: REGISTER_FAIL,
            });
            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });
            return Promise.reject();

        })
}


export const login = (username, password)=> (dispatch) => {
    console.log('this is test1')
    
    return authService.login(username, password).then(
        
        ({data}) => {
            console.log('user data',data)
            
            
            dispatch({
                type: LOGIN_SUCCESS,
                payload: data 
            })
          
        }),
        (error) => {
            const message =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
            dispatch({
              type: LOGIN_FAIL,
            });
            dispatch({
              type: SET_MESSAGE,
              payload: message,
            });
            return Promise.reject();
          }
}


export const logout = (dispatch) => {
    return authService.logout();
    dispatch({
        type: LOGOUT,
    });
}