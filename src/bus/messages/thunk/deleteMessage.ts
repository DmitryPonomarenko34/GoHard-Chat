// Core
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

// Slice
import { messageActions, sliceName } from '../slice';

// Constant
import { API_URL } from '../../../init/constants';

// Action
export const deleteMessageAction = createAction<Message>(`${sliceName}/GET_MESSAGES_ASYNC`);

// Types
import { Message } from '../types';

// Thunk
// eslint-disable-next-line max-len
export const deleteMessage = createAsyncThunk(deleteMessageAction.type, async (messageId: string, thunkApi): Promise<boolean> => {
    const thunkDispatch = thunkApi.dispatch;

    const response = await fetch(`${API_URL}/messages/${messageId}`, {
        method:  'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.status === 200) {
        const data: boolean = await response.json();

        thunkDispatch(messageActions.deleteMessage(messageId));

        return data;
    }

    return response.json();
});
