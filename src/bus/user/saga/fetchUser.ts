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
export const fetchUserAction = createAction(`${sliceName}/FETCH_MESSAGES_ASYNC`);

// Types
import { User } from '../types';

// Saga
function* fetchUser() {
    const userId: string | null = yield localStorage.getItem(USER_ID);
    console.log('🚀 ~ file: fetchUser.ts ~ line 22 ~ function*fetchUser ~ userId', userId);

    if (userId) {
        yield makeRequest<User>({
            fetchOptions: {
                successStatusCode: 200,
                fetch:             () => fetch(`${API_URL}/users/refresh/:userId`, {
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

    // yield makeRequest<User>({
    //     fetchOptions: {
    //         successStatusCode: 200,
    //         fetch:             () => fetch(`${API_URL}/user`, {
    //             method:  'GET',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //         }),
    //     },
    //     succes: function* (result) {
    //         yield console.log(result);
    //         yield put(userActions.setUser(result));
    //     },
    // });
}


// Watcher
export function* watchFetchUser(): SagaIterator {
    yield takeLatest(fetchUserAction.type, fetchUser);
}
