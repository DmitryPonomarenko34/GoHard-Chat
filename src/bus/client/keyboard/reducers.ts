// Types
import * as types from './types';

export const setKeyboard: types.BaseContact<types.KeybordWords> = (state, action) => {
    state.text += action.payload;
};

export const resetKeyboard: types.BaseContact<string> = (state, action) => {
    state.text = action.payload;
};

export const deleteLastWord: types.BaseContact<types.KeybordWordsState> = (state) => {
    state.text = state.text.substring(0, state.text.length - 1);
};
