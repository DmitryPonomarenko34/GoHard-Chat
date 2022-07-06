// Core
import React, { FC, useState } from 'react';

// Bus
import { useUser } from '../../../bus/user';

// Components
import { ErrorBoundary } from '../../components';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

//Asset
import NinjaIcon from '../../../assets/icons/ninja-mask.svg';

const Registration: FC<PropTypes> = () => {
    const { registerUser } = useUser();

    const random = () => Math.floor(1000 + (Math.random() * 9000));
    const [ username, setUsername ] = useState(`NINJA:${random()}`);

    return (
        <S.Container>
            <S.DecorIcon
                alt = 'decor ninja icon'
                src = { NinjaIcon }
            />
            <S.Title>
                <S.TitleAccentWord>
                    Ninja
                </S.TitleAccentWord>
                Registration
            </S.Title>
            <S.Form
                action = '#'
                onSubmit = { (event) => {
                    event.preventDefault();
                    registerUser(username);
                }  }>
                <S.Label htmlFor = 'text'>
                    <S.LabelText>
                        Enter your NinjaName:
                    </S.LabelText>
                    <S.Input
                        name = 'text'
                        placeholder = 'Write your ninja name'
                        type = 'text'
                        value = { username }
                        onChange = { (event) => setUsername(event.target.value) }
                    />
                </S.Label>
                <S.SubmitBtn
                    type = 'submit'>
                    Submit
                </S.SubmitBtn>
            </S.Form>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Registration />
    </ErrorBoundary>
);
