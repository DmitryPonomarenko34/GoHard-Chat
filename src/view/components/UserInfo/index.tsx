// Core
import React, { FC } from 'react';

// Styles
import * as S from './styles';

//Asset
import NinjaIcon from '../../../assets/icons/ninja-mask.svg';

export const RegistrationUserInfo: FC = () => {
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
        </S.Container>
    );
};
