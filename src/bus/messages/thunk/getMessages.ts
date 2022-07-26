// Core
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

// Slice
import { messageActions, sliceName } from '../slice';

// Constant
import { API_URL } from '../../../init/constants';

// Action
const getMessagesAction = createAction(`${sliceName}/GET_MESSAGES_ASYNC`);

// Types
import { Messages } from '../types';

// Thunk
export const getMessages = createAsyncThunk(getMessagesAction.type, async (_, thunkApi): Promise<Messages> => {
    const thunkDispatch = thunkApi.dispatch;

    const response = await fetch(`${API_URL}/messages`, {
        method:  'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.status === 200) {
        const data: Messages = await response.json();

        thunkDispatch(messageActions.setMessages(data));

        return data;
    }

    return response.json();
});
