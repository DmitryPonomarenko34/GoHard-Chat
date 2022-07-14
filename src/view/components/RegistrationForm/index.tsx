// Core
import React, { FC, useState } from 'react';

// Bus
import { useUser } from '../../../bus/user';

// Styles
import * as S from './styles';

export const RegistrationForm: FC = () => {
    const { registerUser } = useUser();

    const randomNumbers = () => Math.floor(1000 + (Math.random() * 9000));
    const [ username, setUsername ] = useState(`NINJA:${randomNumbers()}`);

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        return setUsername(event.target.value);
    };

    const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>, username: string) => {
        event.preventDefault();

        registerUser(username);
    };

    return (
        <S.Container>
            <S.Form
                action = '#'
                onSubmit = { (event) => void handleSubmitForm(event, username) }>
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
                    disabled = { !username }
                    type = 'submit'>
                    Submit
                </S.SubmitBtn>
            </S.Form>
        </S.Container>
    );
};
