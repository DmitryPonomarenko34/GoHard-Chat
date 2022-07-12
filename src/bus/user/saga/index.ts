// Core
import { useDispatch } from 'react-redux';
import { SagaIterator } from '@redux-saga/core';
import { all, call } from 'redux-saga/effects';

// Watchers & Actions
import { refreshUserAction, watchRefreshUser } from './refreshUser';
import { registerUserAction, watchRegisterUser } from './registerUser';
import { logutUserAction, watchLogutUser } from './logoutUser';

// Tools
import { USER_ID } from '../../../init/constants';

export const useUserSaga = () => {
    const dispatch = useDispatch();
    const userId = localStorage.getItem(USER_ID);

    return {
        refreshUser: () => {
            if (userId) {
                dispatch(refreshUserAction(userId));
            }
        },
        registerUser: (userName: string) => void dispatch(registerUserAction(userName)),
        logoutUser:   () => {
            if (userId) {
                dispatch(logutUserAction(userId));
            }
        },
    };
};

export function* watchUser(): SagaIterator {
    yield all([ call(watchRefreshUser), call(watchRegisterUser), call(watchLogutUser) ]);
}
