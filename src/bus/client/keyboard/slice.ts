// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

const initialState = null;

export const keyboardSlice = createSlice<types.KeybordWordState, typeof reducers>({
    name: 'keyboard',
    initialState,
    reducers,
});

export const sliceName = keyboardSlice.name;
export const keyboardActions = keyboardSlice.actions;
export default keyboardSlice.reducer;
