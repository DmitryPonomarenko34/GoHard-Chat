// Core
import { SagaIterator } from '@redux-saga/core';
import { createAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';

// Slice
import { sliceName } from '../slice';
import { togglerCreatorAction  } from '../../client/togglers';

// Constant
import { USER_ID } from '../../../init';

// Action
export const logutUserAction = createAction<string>(`${sliceName}/LOGUT_USER_ASYNC`);

// Saga
function* logutUser() {
    yield localStorage.removeItem(USER_ID);
    yield put(togglerCreatorAction({ type: 'isLoggedIn', value: false }));
}

// Watcher
export function* watchLogutUser(): SagaIterator {
    yield takeLatest(logutUserAction.type, logutUser);
}
