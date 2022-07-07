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
