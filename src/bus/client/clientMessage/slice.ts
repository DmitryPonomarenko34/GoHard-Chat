// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

const initialState = null;

export const clientMessageSlice = createSlice<types.ClientMessageState, typeof reducers>({
    name: 'clientMessage',
    initialState,
    reducers,
});

export const sliceName = clientMessageSlice.name;
export const clientMessageActions = clientMessageSlice.actions;
export default clientMessageSlice.reducer;
