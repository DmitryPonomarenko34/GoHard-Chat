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
        return [ action.payload ];
    }

    return state.map((elem) => elem._id === action.payload._id ? action.payload : elem);
};

export const deleteMessage: types.BaseContact<types.Message> = (state, action) => {
    if (state === null) {
        return [ action.payload ];
    }

    return state.filter((elem) => elem === action.payload ? action.payload : elem);
};
