// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// Types
import { Message } from '../../messages/types';

// State
export type ClientMessage = Message
export type ClientMessageState = ClientMessage | null

// Contracts
export type BaseContact<T = any> = CaseReducer<ClientMessageState, PayloadAction<T>>
