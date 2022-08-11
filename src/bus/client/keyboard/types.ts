// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type KeybordWords = {
    text: string
    mouseClickText: string
}

export type KeybordWordsState = {
    text: string
    mouseClickText: string
}

// Contractss
export type BaseContact<T = any> = CaseReducer<KeybordWordsState, PayloadAction<T>>
