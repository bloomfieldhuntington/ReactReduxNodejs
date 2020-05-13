import { GET_EXAMPLE_DATA, GET_EXAMPLE_DATA_ERROR } from '../actions/types';

// Setting the state object
const initialState = {};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_EXAMPLE_DATA:
        return {
            ...state,
            payload
        }
        case GET_EXAMPLE_DATA_ERROR:
        return {
            ...state,
            payload: null
        }
        default:
        return state;
    }
}