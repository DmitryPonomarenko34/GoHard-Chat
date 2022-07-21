// Core
import React, { FC } from 'react';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    editInputRef: React.RefObject<HTMLInputElement>
    messageText: string
    inputValue: string
    handleChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmitMessage: (event: React.FormEvent<HTMLFormElement>) => void
}

export const EditMessageForm: FC<PropTypes>
= ({ messageText, inputValue, handleChangeInput, handleSubmitMessage, editInputRef }) => {
    return (
        <S.Container>
            <S.Form onSubmit = { (event) => handleSubmitMessage(event) }>
                <S.Input
                    ref = { editInputRef }
                    type = 'text'
                    value = { inputValue }
                    onChange = { handleChangeInput }
                />
                <S.SubmitBtn
                    disabled = { !inputValue || messageText === inputValue }
                    type = 'submit'>
                    send
                </S.SubmitBtn>
            </S.Form>
        </S.Container>
    );
};
