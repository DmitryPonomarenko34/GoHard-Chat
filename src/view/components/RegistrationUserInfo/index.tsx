// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

//Asset
import NinjaIcon from '../../../assets/icons/ninja-mask.svg';

export const RegistrationUserInfo: FC<PropTypes> = () => {
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
