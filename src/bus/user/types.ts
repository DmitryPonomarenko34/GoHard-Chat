// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type User = {
    username: string;
    _id: string;
}
export type UserState = User | null

// Contracts
export type BaseContact<T = any> = CaseReducer<UserState, PayloadAction<T>>
