// Types
import * as types from './types';

export const setKeyboardRef: types.BaseContact<types.KeyboardRef> = (__, action) => {
    return action.payload;
};
