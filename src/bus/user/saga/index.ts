// Core
import { useDispatch } from 'react-redux';
import { SagaIterator } from '@redux-saga/core';
import { all, call } from 'redux-saga/effects';

// Watchers & Actions
import { fetchUserAction, watchFetchUser } from './fetchUser';

export const useUserSaga = () => {
    const dispatch = useDispatch();

    return {
        fetchUser: (message: string) => void dispatch(fetchUserAction(message)),
    };
};

export function* watchUser(): SagaIterator {
    yield all([ call(watchFetchUser) ]);
}
