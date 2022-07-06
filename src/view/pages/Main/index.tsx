// Core
import React, { FC } from 'react';

// Bus
import { useUser } from '../../../bus/user';

// Components
import { ErrorBoundary } from '../../components';

// Styles
import * as S from './styles';

// Asset
import ninjaImg from '../../../assets/images/ninjaImg.jpg';

const Main: FC = () => {
    const { user, logoutUser, getMessagesAction } = useUser();
    getMessagesAction();

    return (
        <S.Container>
            <S.FlexWrap>
                <S.Title>
                    Welcome to Chat:
                    {
                        user
                        && (
                            <S.AccentTitleWord>
                                {user.username}
                            </S.AccentTitleWord>
                        )
                    }
                </S.Title>
                <S.LogoutBtn onClick = { () => void logoutUser() }>
                    Logout
                </S.LogoutBtn>
            </S.FlexWrap>
            <S.Chat>
                <S.Message>
                    {
                        /// array
                    }
                    <S.UserName>Ninja San</S.UserName>
                    <S.UserMessage>skqpskqpskpqksp</S.UserMessage>
                    <S.DispatchTime dateTime = ''></S.DispatchTime>
                </S.Message>
            </S.Chat>
            <S.DecorImg src = { ninjaImg } />
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
