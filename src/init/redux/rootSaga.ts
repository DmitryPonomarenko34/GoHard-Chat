// Core
import { all } from 'redux-saga/effects';

// Tools
import { watchUser } from '../../bus/user/saga';

export function* rootSaga() {
    yield all([ watchUser() ]);
}
