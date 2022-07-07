// Core
import { useDispatch } from 'react-redux';
import { SagaIterator } from '@redux-saga/core';
import { all, call } from 'redux-saga/effects';

// Watchers & Actions
import { fetchMessageAction, watchFetchMessage } from './createMessage';

export const useMessageSaga = () => {
    const dispatch = useDispatch();

    return {
        fetchMessage: () => void dispatch(fetchMessageAction(1)),
    };
};

export function* watchMessage(): SagaIterator {
    yield all([ call(watchFetchMessage) ]);
}
