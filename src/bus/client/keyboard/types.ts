// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type KeybordWord = string
export type KeybordWordState = KeybordWord | null

// Contractss
export type BaseContact<T = any> = CaseReducer<KeybordWordState, PayloadAction<T>>
