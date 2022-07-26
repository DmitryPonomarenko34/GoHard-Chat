// Core
import { configureStore } from '@reduxjs/toolkit';

// Reducers
import togglers from '../../bus/client/togglers';
import user from '../../bus/user/slice';
import messages from '../../bus/messages/slice';
import selectedMessage from '../../bus/client/selectedMessage/slice';
import keyboard from '../../bus/client/keyboard/slice';
// import __entityName__ from '../../bus/__entityName__/slice';

// Middleware
import { middleware } from './middleware';


export const store = configureStore({
    reducer: {
        togglers,
        user,
        messages,
        selectedMessage,
        keyboard,
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>
