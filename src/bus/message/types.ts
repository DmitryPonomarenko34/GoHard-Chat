// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type Message = {
    _id: string,
    username: string,
    text: string,
    createdAt: string,
    updatedAt: string,
}

export type MessageState = Message | null

// Contracts
export type BaseContact<T = any> = CaseReducer<MessageState, PayloadAction<T>>
