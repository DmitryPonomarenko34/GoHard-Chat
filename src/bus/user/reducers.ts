/* eslint-disable no-param-reassign */
// Types
import * as types from './types';

export const setUser: types.BaseContact<types.User> = (__, action) => {
    return {
        username: action.payload.username,
        _id:      action.payload._id,
    };
};
