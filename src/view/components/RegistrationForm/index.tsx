// Core
import React, { FC } from 'react';

// Styles
import * as S from './styles';

// Types
import { FormPropTypes } from '../ChatForm';

export const RegistrationForm: FC<FormPropTypes> = ({ onSubmitForm, inputValue, onChangeInput }) => {
    return (
        <S.Container>
            <S.Form
                action = '#'
                onSubmit = { onSubmitForm }>
                <S.Label htmlFor = 'text'>
                    <S.LabelText>
                        Enter your NinjaName:
                    </S.LabelText>
                    <S.Input
                        name = 'text'
                        placeholder = 'Write your ninja name'
                        type = 'text'
                        value = { inputValue }
                        onChange = { onChangeInput }
                    />
                </S.Label>
                <S.SubmitBtn
                    disabled = { !inputValue }
                    type = 'submit'>
                    Submit
                </S.SubmitBtn>
            </S.Form>
        </S.Container>
    );
};
