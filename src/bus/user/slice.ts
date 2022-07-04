// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

const initialState = null;

export const userSlice = createSlice<types.UserState, typeof reducers>({
    name: 'user',
    initialState,
    reducers,
});

export const sliceName = userSlice.name;
export const userActions = userSlice.actions;
export default userSlice.reducer;
