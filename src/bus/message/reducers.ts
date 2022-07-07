// Types
import * as types from './types';

export const setMessage: types.BaseContact<types.Message> = (state, action) => {
    return {
        ...state,
        _id:       action.payload._id,
        username:  action.payload.username,
        text:      action.payload.text,
        createdAt: action.payload.createdAt,
        updatedAt: action.payload.updatedAt,
    };
};
