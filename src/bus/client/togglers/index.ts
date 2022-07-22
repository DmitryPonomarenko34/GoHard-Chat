// Core
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../../tools/hooks';

export const initialState = {
    isLoading:      false,
    isLoggedIn:     false,
    isUpperWord:    false,
    isRuLayout:     false,
    isKeyboardOpen: true,
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
    };
};

export const togglerCreatorAction = toggrersActions.togglerCreatorAction;

