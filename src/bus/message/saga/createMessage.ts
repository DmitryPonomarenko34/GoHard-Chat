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
export const fetchMessageAction = createAction<number>(`${sliceName}/FETCH_MESSAGES_ASYNC`);

// Types
import { Message } from '../types';

// Saga
const fetchMessage = (callAction: ReturnType<typeof fetchMessageAction>) => makeRequest<Message>({
    callAction,
    fetchOptions: {
        successStatusCode: 201,
        fetch:             () => fetch(`${API_URL}/messages`, {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        }),
    },
    succes: function* (result) {
        yield console.log(result);
        yield put(messageActions.setMessage(result));
    },
});

// Watcher
export function* watchFetchMessage(): SagaIterator {
    yield takeLatest(fetchMessageAction.type, fetchMessage);
}
