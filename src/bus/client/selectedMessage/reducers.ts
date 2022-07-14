// Types
import * as types from './types';

export const setSelectedMessage: types.BaseContact<types.SelectedMessage> = (__, action) => {
    return action.payload;
};

export const closeSelectedMessage = () => {
    return null;
};
