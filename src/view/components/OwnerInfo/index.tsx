// Core
import React, { FC } from 'react';

// Styles
import * as S from './styles';

// Icon
import iconNinja from '../../../assets/icons/userIcon.svg';

// Types
type PropTypes = {
    username: string
    handleLogoutUser: () => void;
}

export const UserInfo: FC<PropTypes> = ({ username, handleLogoutUser }) => {
    return (
        <S.Container>
            <S.FlexWrap>
                <S.Title>
                    <img src = { iconNinja } />
                    <S.AccentTitleWord>
                        {username }
                    </S.AccentTitleWord>
                </S.Title>
                <S.LogoutBtn onClick = { handleLogoutUser }>
                    Logout
                </S.LogoutBtn>
            </S.FlexWrap>
        </S.Container>
    );
};
