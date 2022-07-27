// Core
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

// Slice
import { messageActions, sliceName } from '../slice';

// Types
import { Message, MessageUpdatePayload } from '../types';

// Constant
import { API_URL } from '../../../init/constants';
import { togglerCreatorAction } from '../../client/togglers';

// Action
export const changeMessageAction = createAction(`${sliceName}/CHANGE_MESSAGE_ASYNC`);

// Thunk
// eslint-disable-next-line max-len
export const changeMessage = createAsyncThunk(changeMessageAction.type, async (updateMessageInfo: MessageUpdatePayload, thunkApi): Promise<Message> => {
    const thunkDispatch = thunkApi.dispatch;

    const response = await fetch(`${API_URL}/messages/${updateMessageInfo._id}`, {
        method:  'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: updateMessageInfo.text }),
    });

    if (response.status === 200) {
        const data: Message = await response.json();

        thunkDispatch(messageActions.changeMessage(data));
        thunkDispatch(togglerCreatorAction({ type: 'isLoading', value: false }));

        return data;
    }

    return response.json();
});
