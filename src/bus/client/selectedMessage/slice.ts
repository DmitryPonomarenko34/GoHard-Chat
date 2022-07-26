// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

const initialState = null;

export const SelectedMessageSlice = createSlice<types.SelectedMessageState, typeof reducers>({
    name: 'selectedMessage',
    initialState,
    reducers,
});

export const sliceName = SelectedMessageSlice.name;
export const SelectedMessageActions = SelectedMessageSlice.actions;
export default SelectedMessageSlice.reducer;
