import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import profileReducer from './profileReducer';
import carReducer from './carReducer';

export default combineReducers({
    authorization: authReducer,
    errors: errorReducer,
    profile: profileReducer,
    cars: carReducer
});