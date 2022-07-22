// Types
import * as types from './types';

export const setMessages: types.BaseContact<types.Messages> = (__, action) => {
    return action.payload;
};

export const createMessage: types.BaseContact<types.Message> = (state, action) => {
    if (state === null) {
        return [ action.payload ];
    }

    return [ action.payload, ...state ];
};

export const changeMessage: types.BaseContact<types.Message> = (state, action) => {
    if (state === null) {
        return state;
    }

    return state.map((message) => message._id === action.payload._id ? action.payload : message);
};

export const deleteMessage: types.BaseContact<types.Message> = (state, action) => {
    if (state === null) {
        return state;
    }

    return state.filter((message) => message._id !== action.payload._id);
};

export const clearMessages: types.BaseContact<null> = () => {
    return null;
};
