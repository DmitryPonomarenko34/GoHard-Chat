// Types
import * as types from './types';

export const setKeyboard: types.BaseContact<types.KeybordWord> = (__, action) => {
    return action.payload;
};
