// Types
import * as types from './types';
import { Message } from '../../messages/types';

export const setSelectedMessage: types.BaseContact<Message> = (__, action) => {
    return action.payload;
};

export const closeSelectedMessage = () => {
    return null;
};
