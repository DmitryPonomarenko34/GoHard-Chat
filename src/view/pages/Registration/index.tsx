// Core
import React, { FC } from 'react';

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
    const { user, fetchUser } = useUser();
    console.log('🚀 ~ file: index.tsx ~ line 20 ~ user', user);

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
                    fetchUser();
                } }>
                <S.Label htmlFor = 'text'>
                    <S.LabelText>
                        Enter your NinjaName:
                    </S.LabelText>
                    <S.Input
                        name = 'text'
                        placeholder = 'Write your ninja name'
                        type = 'text'
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
