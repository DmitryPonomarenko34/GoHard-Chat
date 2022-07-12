// Types
import * as types from './types';

export const setClientMessage: types.BaseContact<types.ClientMessage> = (__, action) => {
    return action.payload;
};

export const closeClientMessage = () => {
    return null;
};
