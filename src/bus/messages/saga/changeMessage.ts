// Core
import { SagaIterator } from '@redux-saga/core';
import { createAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';

// Slice
import { messageActions, sliceName } from '../slice';

// Tools
import { makeRequest } from '../../../tools/utils';
import { API_URL } from '../../../init/constants';

// Types
import { MessagePayload, Message } from '../types';

// Action
export const changeMessageAction = createAction<MessagePayload>(`${sliceName}/CHANGE_MESSAGES_ASYNC`);

// Saga
const changeMessage = (callAction: ReturnType<typeof changeMessageAction>) => makeRequest<Message>({
    fetchOptions: {
        successStatusCode: 200,
        fetch:             () => fetch(`${API_URL}/messages/${callAction.payload._id}`, {
            method:  'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(callAction.payload.text),
        }),
    },
    succes: function* (result) {
        yield console.log(result);
        yield put(messageActions.changeMessage(result));
    },
});

// Watcher
export function* watchchangeMessage(): SagaIterator {
    yield takeLatest(changeMessageAction.type, changeMessage);
}
