import { combineReducers } from 'redux'

import {FETCH_USER_PENDING, FETCH_USER_SUCCESS, FETCH_USER_ERROR} from '../actions/actions';

const initialState = {
    pending: false,
    user: {},
    error: null
}

export function userReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_USER_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                pending: false,
                user: action.payload
            }
        case FETCH_USER_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export const getUser = state => state.user;
export const getUserPending = state => state.pending;
export const getUserError = state => state.error;

const rootReducer = combineReducers({
    userReducer
  })
  
  export default rootReducer
