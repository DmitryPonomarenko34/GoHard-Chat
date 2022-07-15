// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type KeyboardRef = Array<any>
export type KeyboardRefState = KeyboardRef | null

// Contracts
export type BaseContact<T = any> = CaseReducer<KeyboardRefState, PayloadAction<T>>
