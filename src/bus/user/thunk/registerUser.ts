// Core
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

// Bus
import { togglerCreatorAction } from '../../client/togglers';

// Slice
import { sliceName, userActions } from '../slice';

// Action
export const registerUserAction = createAction(`${sliceName}/REGISTER_USER_ASYNC`);

// Types
import { User } from '../types';

// Hooks
// import { useAppDispatch } from '../../../tools/hooks';

// Constant
import { API_URL, USER_ID } from '../../../init';

// eslint-disable-next-line max-len
export const registerUser = createAsyncThunk(registerUserAction.type, async (username: string, thunkApi): Promise<User> => {
    const thunkDispatch = thunkApi.dispatch;

    const response = await fetch(`${API_URL}/users/register`, {
        method:  'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: username }),
    });

    if (response.status === 201) {
        const data: User = await response.json();

        localStorage.setItem(USER_ID, data._id);
        thunkDispatch(userActions.setUser(data));
        thunkDispatch(togglerCreatorAction({ type: 'isLoggedIn', value: true }));

        return data;
    }

    return response.json();
});
