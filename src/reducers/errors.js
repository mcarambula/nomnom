import { ERROR_API, RESET_ERROR } from '../actions/errors';

/* Reducer for managing classes part of the state */
export default function error (state = null, action) {
    switch(action.type) {
        case ERROR_API :
            return action.error;
        case RESET_ERROR :
            return false;
        default :
            return state;
    }
}
