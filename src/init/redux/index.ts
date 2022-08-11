// Core
import { configureStore } from '@reduxjs/toolkit';

// Reducers
import togglers from '../../bus/client/togglers';
import selectedMessage from '../../bus/client/selectedMessage/slice';
import keyboard from '../../bus/client/keyboard/slice';

// Middleware
import { middleware } from './middleware';


export const store = configureStore({
    reducer: {
        togglers,
        selectedMessage,
        keyboard,
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>
