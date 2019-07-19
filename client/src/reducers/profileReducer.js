import { GET_PROFILE, CLEAR_CURRENT_PROFILE, GET_PROFILE_BY_ID } from '../actions/types'

const initialState = {
    profile: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PROFILE:
            return {
                ...state,
                profile: action.payload
            }
        case CLEAR_CURRENT_PROFILE:
            return {
                ...state,
                profile: null
            }
        case GET_PROFILE_BY_ID:
            return {
                ...state,
                profile: action.payload
            }
        default:
            return state;
    }
}