// Core
import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../../tools/hooks';

// Types
// import { Message } from '../../messages/types';

export const initialState = {
    isOnline:    navigator.onLine,
    isLoggedIn:  false,
    isMessageId: '',
};

// Types
export type TogglersKeys = keyof typeof initialState;
type Options = {type: TogglersKeys, value: boolean | string, };

// Slice
export const toggrersSlice = createSlice({
    name:     'togglers',
    initialState,
    reducers: {
        togglerCreatorAction: (state, action: PayloadAction<Options>) => ({
            ...state,
            [ action.payload.type ]: action.payload.value,
        }),
        togglerMessage: (state, action: PayloadAction<TogglersKeys>) => ({
            ...state,
            [ action.payload.type ]: action.payload.value,
        }),
        resetTogglersToInitialAction: () => initialState,
    },
});

// Interfaces
const toggrersActions = toggrersSlice.actions;
export default toggrersSlice.reducer;

export const useTogglersRedux = () => {
    const dispatch = useDispatch();

    return {
        togglersRedux:          useSelector(({ togglers }) => togglers),
        setTogglerAction:       (options: Options) => void dispatch(toggrersActions.togglerCreatorAction(options)),
        resetTogglersToInitial: () => void dispatch(toggrersActions.resetTogglersToInitialAction()),
        changeMessage:          (_id: string) => void dispatch(toggrersActions.togglerMessage(_id)),
    };
};

// Used ./src/tools/helpers/makeRequest
export const togglerCreatorAction = toggrersActions.togglerCreatorAction;

