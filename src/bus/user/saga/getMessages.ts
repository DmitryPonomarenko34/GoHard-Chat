// Core
import { SagaIterator } from '@redux-saga/core';
import { createAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';

// Slice
import { userActions, sliceName } from '../slice';

// Tools
import { makeRequest } from '../../../tools/utils';
import { API_URL, USER_ID } from '../../../init/constants';

// Action
export const getMessagesAction = createAction<string | undefined>(`${sliceName}/REGISTER_USER_ASYNC`);

// Types
import { User } from '../types';

// Saga
function* getMessages() {
    yield makeRequest<User>({
        fetchOptions: {
            successStatusCode: 201,
            fetch:             () => fetch(`${API_URL}/users/register`, {
                method:  'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            }),
        },
        succes: function* (result) {
            yield localStorage.setItem(USER_ID, result._id);
            yield put(userActions.setUser(result));
        },
    });
}

// Watcher
export function* watchGetMessages(): SagaIterator {
    yield takeLatest(getMessagesAction.type, getMessages);
}
