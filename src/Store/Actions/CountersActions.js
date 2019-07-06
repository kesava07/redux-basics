

import * as actionTypes from './ActionsTypes';

export const increment = () => ({
    type: actionTypes.INCREMENT_COUNT
})

export const decrement = () => ({
    type: actionTypes.DECREMENT_COUNT
});

export const addCounter = (count) => ({
    type: actionTypes.ADD_COUNTER,
    payload: count
});

export const subCounter = (count) => ({
    type: actionTypes.SUB_COUNTER,
    payload: count
})