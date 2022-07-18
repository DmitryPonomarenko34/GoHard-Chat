// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type KeybordWords = string

export type KeybordWordsState = {
    text: KeybordWords
}

// Contractss
export type BaseContact<T = any> = CaseReducer<KeybordWordsState, PayloadAction<T>>
