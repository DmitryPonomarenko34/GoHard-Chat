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

type PropTypes = {
    onSubmitForm: (event: FormSubmitEvent, message?: Message) => void;
    onChangeInput: (event: FormChangeEvent) => void;
    inputValue: string;
}

export const SubmitForm: FC<PropTypes> = ({ onSubmitForm, onChangeInput, inputValue }) => {
    return (
        <S.Container>
            <S.Form onSubmit = { onSubmitForm }>
                <S.Input
                    type = 'text'
                    value = { inputValue }
                    onChange = { onChangeInput }
                />
                <S.SubmitBtn
                    disabled = { !inputValue }
                    type = 'submit'>send
                </S.SubmitBtn>
            </S.Form>
        </S.Container>
    );
};
