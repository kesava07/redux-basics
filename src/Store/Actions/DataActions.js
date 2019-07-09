import * as actionTypes from './ActionsTypes';
import Axios from 'axios';

export const fetchDataStart = () => ({
    type: actionTypes.START_FETCHING_DATA
});

export const fetchDataSuccess = (data) => ({
    type: actionTypes.FETCHING_DATA_SUCCESS,
    payLoad: data
});

export const fetchDataFailure = (error) => ({
    type: actionTypes.FETCHING_DATA_FAILURE,
    payLoad: error
});


export const fetchData = () => {
    return (dispatch, getStore) => {
        dispatch(fetchDataStart());
        Axios.get("https://jsonplaceholder.typicode.com/photos")
            .then(res => {
                dispatch(fetchDataSuccess(res.data))
            })
            .catch(err => {
                dispatch(fetchDataFailure(err))
            })
    }
}