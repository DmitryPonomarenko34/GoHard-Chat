// Core
import React, { FC } from 'react';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    username: string
    isLoading: boolean
    handleSubmitForm: (event: React.FormEvent<HTMLFormElement>, username: string) => void
    handleChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const RegistrationForm: FC<PropTypes> = ({ username, handleSubmitForm, handleChangeInput, isLoading }) => {
    return (
        <S.Container>
            <S.Form
                action = '#'
                onSubmit = { (event) => handleSubmitForm(event, username) }>
                <S.Label htmlFor = 'text'>
                    <S.LabelText>
                        Enter your NinjaName:
                    </S.LabelText>
                    <S.Input
                        name = 'text'
                        placeholder = 'Write your ninja name'
                        type = 'text'
                        value = { username }
                        onChange = { handleChangeInput }
                    />
                </S.Label>
                <S.SubmitBtn
                    disabled = { !username || isLoading }
                    type = 'submit'>
                    Submit
                </S.SubmitBtn>
            </S.Form>
        </S.Container>
    );
};
