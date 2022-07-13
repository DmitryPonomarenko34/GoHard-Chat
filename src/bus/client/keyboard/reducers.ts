// Types
import * as types from './types';

export const setKeyboard: types.BaseContact<types.KeybordWords> = (__, action) => {
    return action.payload;
};
