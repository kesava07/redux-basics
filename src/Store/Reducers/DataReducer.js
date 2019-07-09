import * as actionTypes from '../Actions/ActionsTypes';

const initialState = {
    data: [],
    loading: false,
    error: null
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.START_FETCHING_DATA:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCHING_DATA_SUCCESS:
            return {
                ...state,
                data: action.payLoad.slice(0, 50),
                loading: false
            }
        case actionTypes.FETCHING_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payLoad
            }
        default: return state;
    }
};

export default dataReducer;