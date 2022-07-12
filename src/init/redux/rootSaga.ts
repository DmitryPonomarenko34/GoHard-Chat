// Core
import { all } from 'redux-saga/effects';

// Tools
import { watchUser } from '../../bus/user/saga';
import { watchMessages } from '../../bus/messages/saga';

export function* rootSaga() {
    yield all([ watchUser(), watchMessages() ]);
}
