// Types
import * as types from './types';

export const setMessage: types.BaseContact<types.Messages> = (state, action) => {
    return action.payload;
};
