import axios from 'axios';
import { GET_EXAMPLE_DATA, GET_EXAMPLE_DATA_ERROR} from './types';

// Get example data from server.js
export const getExampleData = () => async dispatch => {

    try {
        // Try to get data from server
        const res = await axios.get('/example');
        // If yes, Store in in the redux state
        dispatch({
            type: GET_EXAMPLE_DATA,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: GET_EXAMPLE_DATA_ERROR
        })
    }

}
