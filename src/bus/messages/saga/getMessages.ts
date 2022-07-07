// Core
import { SagaIterator } from '@redux-saga/core';
import { createAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';

// Slice
import { messageActions, sliceName } from '../slice';

// Tools
import { makeRequest } from '../../../tools/utils';
import { API_URL } from '../../../init/constants';

// Action
export const getMessagesAction = createAction(`${sliceName}/GET_MESSAGES_ASYNC`);

// Types
import { Messages } from '../types';

// Saga
const getMessages = () => makeRequest<Messages>({
    fetchOptions: {
        successStatusCode: 200,
        fetch:             () => fetch(`${API_URL}/messages`, {
            method:  'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }),
    },
    succes: function* (result) {
        yield put(messageActions.setMessage(result));
    },
});

// Watcher
export function* watchGetMessages(): SagaIterator {
    yield takeLatest(getMessagesAction.type, getMessages);
}
