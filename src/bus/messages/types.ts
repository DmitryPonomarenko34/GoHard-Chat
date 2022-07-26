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

export type Messages = Array<Message>

export type MessagesState = Messages | null

// Contracts
export type BaseContact<T = any> = CaseReducer<MessagesState, PayloadAction<T>>

// Payloads
export type MessagePayload = {
    username: string;
    text: string;
}

export type MessageUpdatePayload = {
    _id: string;
    text: string;
}
