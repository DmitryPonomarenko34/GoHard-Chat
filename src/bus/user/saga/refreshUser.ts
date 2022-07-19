// Core
import { SagaIterator } from '@redux-saga/core';
import { createAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';

// Slice
import { userActions, sliceName } from '../slice';
import { togglerCreatorAction  } from '../../client/togglers';

// Tools
import { makeRequest } from '../../../tools/utils';

// Constant
import { API_URL } from '../../../init/constants';

// Action
export const refreshUserAction = createAction<string>(`${sliceName}/REFRESH_USER_ASYNC`);

// Types
import { User } from '../types';

// Saga
function* refreshUser({ payload: userId }: ReturnType<typeof refreshUserAction>) {
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
            yield put(userActions.setUser(result));
            yield put(togglerCreatorAction({ type: 'isLoggedIn', value: true }));
        },
        error: function* () {
            yield localStorage.clear();
            yield put(togglerCreatorAction({ type: 'isLoggedIn', value: false }));
        },
    });
}

// Watcher
export function* watchRefreshUser(): SagaIterator {
    yield takeLatest(refreshUserAction.type, refreshUser);
}
