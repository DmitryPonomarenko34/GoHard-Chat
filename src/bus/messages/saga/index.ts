// Core
import { useDispatch } from 'react-redux';
import { SagaIterator } from '@redux-saga/core';
import { all, call } from 'redux-saga/effects';

// Watchers & Actions
import { getMessagesAction, watchGetMessages } from './getMessages';

export const useMessageSaga = () => {
    const dispatch = useDispatch();

    return {
        getMessages: () => void dispatch(getMessagesAction()),
    };
};

export function* watchMessage(): SagaIterator {
    yield all([ call(watchGetMessages) ]);
}
