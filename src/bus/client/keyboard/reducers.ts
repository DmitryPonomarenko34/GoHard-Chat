// Types
import * as types from './types';

export const setKeyboard: types.BaseContact<types.KeybordWords> = (state, action) => {
    if (state === null) {
        return action.payload;
    }

    return action.payload;
};

export const resetKeyboard: types.BaseContact<types.KeybordWordsState> = (__, action) => {
    return action.payload;
};

export const deleteLastWord: types.BaseContact<types.KeybordWordsState> = (state) => {
    if (state === null) {
        return state;
    }

    return state[ state.length - 1 ];
};
