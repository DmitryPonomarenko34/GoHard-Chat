// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Icon
import iconNinja from '../../../assets/icons/userIcon.svg';

// Types
type PropTypes = {
    username: string;
    onClickLogout: () => void;
}

export const UserInfo: FC<PropTypes> = ({ username, onClickLogout }) => {
    return (
        <S.Container>
            <S.FlexWrap>
                <S.Title>
                    <img src = { iconNinja } />
                    <S.AccentTitleWord>
                        { username }
                    </S.AccentTitleWord>
                </S.Title>
                <S.LogoutBtn onClick = { onClickLogout }>
                    Logout
                </S.LogoutBtn>
            </S.FlexWrap>
        </S.Container>
    );
};
