// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

const initialState = null;

export const keyboardRefSlice = createSlice<types.KeyboardRefState, typeof reducers>({
    name: 'keyboardRef',
    initialState,
    reducers,
});

export const sliceName = keyboardRefSlice.name;
export const keyboardRefActions = keyboardRefSlice.actions;
export default keyboardRefSlice.reducer;
