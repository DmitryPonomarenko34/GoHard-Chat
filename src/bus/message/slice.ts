// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

const initialState = null;

export const messageSlice = createSlice<types.MessageState, typeof reducers>({
    name: 'message',
    initialState,
    reducers,
});

export const sliceName = messageSlice.name;
export const messageActions = messageSlice.actions;
export default messageSlice.reducer;
