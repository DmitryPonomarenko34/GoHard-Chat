import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import {
    useSelector as useReduxSelector,
    TypedUseSelectorHook,
    useDispatch,
} from 'react-redux';
import { RootState } from '../../init/redux';

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const useAppDispatch: () => ThunkDispatch<RootState, void, AnyAction> = useDispatch;
