// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
import { Message } from '../../../bus/messages/types';

export type FormSubmitEvent = React.FormEvent<HTMLFormElement>;
export type FormChangeEvent = React.ChangeEvent<HTMLInputElement>;

export type FormPropTypes = {
    onSubmitForm: (event: FormSubmitEvent, message?: Message, username?: string) => void;
    onChangeInput: (event: FormChangeEvent, message?: Message) => void;
    inputValue: string;
    message?: Message
}

export const SubmitForm: FC<FormPropTypes> = ({ onSubmitForm, onChangeInput, inputValue, message }) => {
    return (
        <S.Container>
            <S.Form onSubmit = { onSubmitForm }>
                <S.Input
                    type = 'text'
                    value = { inputValue }
                    onChange = { (event) => onChangeInput(event, message) }
                />
                <S.SubmitBtn
                    disabled = { !inputValue }
                    type = 'submit'>
                    send
                </S.SubmitBtn>
            </S.Form>
        </S.Container>
    );
};
