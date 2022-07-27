// Core
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

// Bus
import { togglerCreatorAction } from '../../client/togglers';

// Slice
import { sliceName, userActions } from '../slice';

// Action
export const refreshUserAction = createAction(`${sliceName}/REFRESH_USER_ASYNC`);

// Types
import { User } from '../types';

// Constant
import { API_URL } from '../../../init';

// Thunk
export const refreshUser = createAsyncThunk(refreshUserAction.type, async (userId: string, thunkApi): Promise<User> => {
    const thunkDispatch = thunkApi.dispatch;

    const response = await fetch(`${API_URL}/users/refresh/${userId}`, {
        method:  'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.status === 200) {
        const data: User = await response.json();

        thunkDispatch(userActions.setUser(data));
        thunkDispatch(togglerCreatorAction({ type: 'isLoggedIn', value: true }));

        return data;
    }

    localStorage.clear();
    thunkDispatch(togglerCreatorAction({ type: 'isLoading', value: false }));
    thunkDispatch(togglerCreatorAction({ type: 'isLoggedIn', value: false }));

    return response.json();
});
