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
export const fetchUserAction = createAction<string>(`${sliceName}/FETCH_MESSAGES_ASYNC`);

// Types
import { User } from '../types';

// Saga
function* fetchUser(callAction: ReturnType<typeof fetchUserAction>) {
    const userId: string | null = yield localStorage.getItem(USER_ID);
    console.log('🚀 ~ file: fetchUser.ts ~ line 22 ~ function*fetchUser ~ userId', userId);

    if (userId) {
        yield makeRequest<User>({
            fetchOptions: {
                successStatusCode: 200,
                fetch:             () => fetch(`${API_URL}/users/refresh/${userId}`, {
                    method:  'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }),
            },
            succes: function* (result) {
                yield console.log(result);
                yield put(userActions.setUser(result));
            },
        });
    }

    if (userId === null) {
        yield makeRequest<User>({
            fetchOptions: {
                successStatusCode: 201,
                fetch:             () => fetch(`${API_URL}/users/register`, {
                    method:  'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username: callAction.payload }),
                }),
            },
            succes: function* (result) {
                yield localStorage.setItem(USER_ID, result._id);
                yield put(userActions.setUser(result));
            },
        });
    }
}


// Watcher
export function* watchFetchUser(): SagaIterator {
    yield takeLatest(fetchUserAction.type, fetchUser);
}
