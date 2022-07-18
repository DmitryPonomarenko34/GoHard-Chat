// Types
import * as types from './types';

export const setKeyboard: types.BaseContact<types.KeybordWords> = (state, action) => {
    if (state === null) {
        return [ action.payload ];
    }

    return [ ...state, action.payload ];
};

export const resetKeyboard: types.BaseContact<types.KeybordWordsState> = (__, action) => {
    return action.payload;
};

export const deleteLastWord: types.BaseContact<types.KeybordWordsState> = (state) => {
    if (state === null) {
        return state;
    }

    return state.filter((word, index) => index !== state.length - 1 ? word : false);
};
