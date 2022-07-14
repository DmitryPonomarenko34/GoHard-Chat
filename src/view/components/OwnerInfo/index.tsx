// Core
import React, { FC } from 'react';

// Bus
import { useUser } from '../../../bus/user';

// Styles
import * as S from './styles';

// Icon
import iconNinja from '../../../assets/icons/userIcon.svg';

export const UserInfo: FC = () => {
    const {
        user,
        logoutUser,
    } = useUser();

    return (
        <S.Container>
            <S.FlexWrap>
                <S.Title>
                    <img src = { iconNinja } />
                    <S.AccentTitleWord>
                        {user?.username }
                    </S.AccentTitleWord>
                </S.Title>
                <S.LogoutBtn onClick = { logoutUser }>
                    Logout
                </S.LogoutBtn>
            </S.FlexWrap>
        </S.Container>
    );
};
