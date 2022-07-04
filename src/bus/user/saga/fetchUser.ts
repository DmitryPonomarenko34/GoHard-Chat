// Core
import { SagaIterator } from '@redux-saga/core';
import { createAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';

// Slice
import { userActions, sliceName } from '../slice';

// Tools
import { makeRequest } from '../../../tools/utils';
import { API_URL } from '../../../init/constants';

// Action
export const fetchUserAction = createAction<number>(`${sliceName}/FETCH_MESSAGES_ASYNC`);

// Types
import { User } from '../types';

// Saga
const fetchUser = (callAction: ReturnType<typeof fetchUserAction>) => makeRequest<User>({
    callAction,
    fetchOptions: {
        successStatusCode: 200,
        fetch:             () => fetch(`${API_URL}/user`, {
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

// Watcher
export function* watchFetchUser(): SagaIterator {
    yield takeLatest(fetchUserAction.type, fetchUser);
}
