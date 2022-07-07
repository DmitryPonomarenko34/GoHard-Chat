// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type Messages = Array<{
    _id: string,
    username: string,
    text: string,
    createdAt: string,
    updatedAt: string,
}>

export type Message = {
    _id: string,
    username: string,
    text: string,
    createdAt: string,
    updatedAt: string,
}

export type MessagesState = Messages | null

// Contracts
export type BaseContact<T = any> = CaseReducer<MessagesState, PayloadAction<T>>
