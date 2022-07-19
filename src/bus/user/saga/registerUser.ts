// Core
import { SagaIterator } from '@redux-saga/core';
import { createAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';

// Slice
import { userActions, sliceName } from '../slice';
import { togglerCreatorAction } from '../../client/togglers';

// Tools
import { makeRequest } from '../../../tools/utils';

// Constant
import { API_URL, USER_ID } from '../../../init/constants';

// Action
export const registerUserAction = createAction<string | undefined>(`${sliceName}/REGISTER_USER_ASYNC`);

// Types
import { User } from '../types';

// Saga
function* registerUser(callAction: ReturnType<typeof registerUserAction>) {
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
            yield put(togglerCreatorAction({ type: 'isLoggedIn', value: true }));
        },
    });
}

// Watcher
export function* watchRegisterUser(): SagaIterator {
    yield takeLatest(registerUserAction.type, registerUser);
}
