// Types
import * as types from './types';

export const setUser: types.BaseContact<types.User> = (__, action) => {
    return action.payload;
};
