// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// Types
import { Message } from '../../messages/types';

// State
export type SelectedMessage = Message
export type SelectedMessageState = SelectedMessage | null

// Contracts
export type BaseContact<T = any> = CaseReducer<SelectedMessageState, PayloadAction<T>>
