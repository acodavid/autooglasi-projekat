import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER } from './types';
import axios from 'axios';

//REGISTER
export const registerUser = (korisnik, history) => dispatch => {

    axios.post('/api/korisnici/register', korisnik)
        .then(res => {
            history.push('/post-register');
        })
        .catch(eror => {
            dispatch({
                type: GET_ERRORS,
                payload: eror.response.data
            });
        });

};

//LOGIN
export const loginUser = (korisnik) => dispatch => {
    axios.post('/api/korisnici/login', korisnik)
        .then(res => {
            //Local storrage <- token
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            //Token -> header auth
            setAuthToken(token);
            //decode token -> get korisnik
            const decoded = jwt_decode(token);
            //current user
            dispatch(setCurrentUser(decoded));
        })
        .catch(eror => {
            dispatch({
                type: GET_ERRORS,
                payload: eror.response.data
            });
        })
};

//logged user
export const setCurrentUser = (decoded) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
};

//LOGOUT
export const logoutUser = () => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));

}

