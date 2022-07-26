// Core
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

// Slice
import { messageActions, sliceName } from '../slice';

// Types
import { Message, MessagePayload } from '../types';

// Constant
import { API_URL } from '../../../init/constants';

// Action
export const createMessageAction = createAction(`${sliceName}/CREATE_MESSAGES_ASYNC`);

// Thunk
// eslint-disable-next-line max-len
export const createMessage = createAsyncThunk(createMessageAction.type, async (messageInfo: MessagePayload, thunkApi): Promise<Message> => {
    const thunkDispatch = thunkApi.dispatch;

    const response = await fetch(`${API_URL}/messages`, {
        method:  'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: messageInfo.text, username: messageInfo.username }),
    });

    if (response.status === 201) {
        const data: Message = await response.json();

        thunkDispatch(messageActions.createMessage(data));

        return data;
    }

    return response.json();
});
