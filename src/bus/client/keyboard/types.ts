// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type KeybordWords = string
export type KeybordWordsState = Array<KeybordWords> | null

// Contractss
export type BaseContact<T = any> = CaseReducer<KeybordWordsState, PayloadAction<T>>
