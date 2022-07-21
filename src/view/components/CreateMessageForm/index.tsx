// Core
import React, { FC } from 'react';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    keyboardText: string
    handleKeyboard: () => void
    handleCreateMessage: (event: React.FormEvent<HTMLFormElement>) => void
    handleChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleOnKeyUp: (event: React.KeyboardEvent<HTMLInputElement>, bgColor?: string, borderColor?: string) => void
    handleOnKeyDown: (event: React.KeyboardEvent<HTMLInputElement>, bgColor?: string, borderColor?: string) => void
}

// Asset
import keyboardIcon from '../../../assets/icons/keyboard.png';

export const CreateMessageForm: FC<PropTypes>
    = ({
        keyboardText, handleKeyboard, handleCreateMessage,
        handleChangeInput, handleOnKeyUp, handleOnKeyDown,
    }) => {
        return (
            <S.Container>
                <S.Btn onClick = { handleKeyboard }>
                    <img src = { keyboardIcon } />
                </S.Btn>
                <S.Form
                    onSubmit = { handleCreateMessage }>
                    <S.Input
                        type = 'text'
                        value = { keyboardText }
                        onChange = { (event) => handleChangeInput(event) }
                        onKeyDown = { (event) => void handleOnKeyDown(event) }
                        onKeyUp = { (event) => void handleOnKeyUp(event) }
                    />
                    <S.SubmitBtn
                        disabled = { !keyboardText }
                        type = 'submit'>
                        send
                    </S.SubmitBtn>
                </S.Form>
            </S.Container>
        );
    };
