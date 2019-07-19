import prazan from '../validation/prazan';

import { SET_CURRENT_USER } from '../actions/types';


const initialState = {
    isLogged: false,
    korisnik: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isLogged: !prazan(action.payload),
                korisnik: action.payload
            }
        default:
            return state;
    }
}