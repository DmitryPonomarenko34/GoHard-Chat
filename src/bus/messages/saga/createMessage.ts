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
import { Message, MessagePayload } from '../types';

// Action
export const createMessageAction = createAction<MessagePayload>(`${sliceName}/CREATE_MESSAGES_ASYNC`);

// Saga
const createMessage = (callAction: ReturnType<typeof createMessageAction>) => makeRequest<Message>({
    fetchOptions: {
        successStatusCode: 201,
        fetch:             () => fetch(`${API_URL}/messages`, {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(callAction.payload),
        }),
    },
    succes: function* (result) {
        yield console.log(result);
        yield put(messageActions.createMessage(result));
    },
});

// Watcher
export function* watchCreateMessage(): SagaIterator {
    yield takeLatest(createMessageAction.type, createMessage);
}
