import * as actionTypes from '../Actions/ActionsTypes';

const initialState = {
    count: 0,
    title: "Counter"
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + 1
            };
        case actionTypes.DECREMENT_COUNT:
            return {
                ...state,
                count: state.count - 1
            };
        case actionTypes.ADD_COUNTER:
            return {
                ...state,
                count: state.count + action.payload
            };
        case actionTypes.SUB_COUNTER:
            return {
                ...state,
                count: state.count - action.payload
            };
        default: return state;
    }
};

export default counterReducer;