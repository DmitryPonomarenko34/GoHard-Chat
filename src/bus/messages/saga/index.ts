// Core
import { useDispatch } from 'react-redux';
import { SagaIterator } from '@redux-saga/core';
import { all, call } from 'redux-saga/effects';

// Watchers & Actions
import { getMessagesAction, watchGetMessages } from './getMessages';
import { createMessageAction, watchCreateMessage } from './createMessage';

// Types
import { MessagePayload } from '../types';

export const useMessagesSaga = () => {
    const dispatch = useDispatch();

    return {
        getMessages:   () => void dispatch(getMessagesAction()),
        createMessage: (message: MessagePayload) => void dispatch(createMessageAction(message)),
    };
};

export function* watchMessages(): SagaIterator {
    yield all([
        call(watchGetMessages),
        call(watchCreateMessage),
    ]);
}
