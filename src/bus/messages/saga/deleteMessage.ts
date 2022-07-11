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
import { Message } from '../types';

// Action
export const deleteMessageAction = createAction<Message>(`${sliceName}/DELETE_MESSAGE_ASYNC`);

// Saga
const deleteMessage = (callAction: ReturnType<typeof deleteMessageAction>) => makeRequest<Message>({
    fetchOptions: {
        successStatusCode: 200,
        fetch:             () => fetch(`${API_URL}/messages/${callAction.payload._id}`, {
            method:  'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        }),
    },
    succes: function* (result) {
        console.log(result);
        yield put(messageActions.deleteMessage(result));
    },
});

// Watcher
export function* watchDeleteMessage(): SagaIterator {
    yield takeLatest(deleteMessageAction.type, deleteMessage);
}
