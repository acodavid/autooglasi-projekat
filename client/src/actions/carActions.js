import axios from 'axios';
import { GET_ERRORS, GET_CARS, GET_CAR, CLEAR_ERRORS, DELETE_CAR } from './types';

export const postCar = (car, history) => dispatch => {
    dispatch(clearErrors());
    axios.post('/api/objave', car)
        .then(res => {
            history.push('/cars')
        })
        .catch(eror => {
            dispatch({
                type: GET_ERRORS,
                payload: eror.response.data
            })
        })
}

export const updateCar = (car, id, history) => dispatch => {
    dispatch(clearErrors());
    axios.put(`/api/objave/update/${id}`, car)
        .then(res => {
            history.push('/cars')
        })
        .catch(eror => {
            dispatch({
                type: GET_ERRORS,
                payload: eror.response.data
            })
        })
}

export const getCars = () => dispatch => {
    axios.get('/api/objave')
        .then(res => {
            dispatch({
                type: GET_CARS,
                payload: res.data
            })
        })
        .catch(eror => {
            dispatch({
                type: GET_CARS,
                payload: null
            })
        })
}

export const getCarByID = id => dispatch => {
    axios
        .get(`/api/objave/${id}`)
        .then(res =>
            dispatch({
                type: GET_CAR,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_CAR,
                payload: null
            })
        );
};

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    };
};

export const addQuestion = (carId, questionData) => dispatch => {
    //dispatch(clearErrors());
    axios
        .post(`/api/objave/pitanja/${carId}`, questionData)
        .then(res =>
            dispatch({
                type: GET_CAR,
                payload: res.data
            })
        )
        .catch(eror =>
            dispatch({
                type: GET_ERRORS,
                payload: eror.response.data
            })
        );
};

export const deleteQuestion = (carId, pitanjeId) => dispatch => {
    axios
        .delete(`/api/objave/pitanja/${carId}/${pitanjeId}`)
        .then(res =>
            dispatch({
                type: GET_CAR,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

export const deleteCar = (carId, history) => dispatch => {
    axios
        .delete(`/api/objave/${carId}`)
        .then(res => {
            dispatch({
                type: DELETE_CAR,
                payload: carId
            })
            history.push('/cars')
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );

};