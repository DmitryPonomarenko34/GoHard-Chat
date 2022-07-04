/* eslint-disable no-param-reassign */
// Types
import * as types from './types';

export const setUser: types.BaseContact<types.User> = (state, action) => {
    state = action.payload;
};
