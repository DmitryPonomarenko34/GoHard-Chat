// Core
import React, { FC } from 'react';

// Bus
import { useUser } from '../../../bus/user';

// Components
import { ErrorBoundary } from '../../components';

// Styles
import * as S from './styles';

const Main: FC = () => {
    const { user, logoutUser } = useUser();

    return (
        <S.Container>
            <p>
                Welcome to Shinoby-Chat:
                {
                    user && user.username
                }
            </p>
            <button onClick = { () => void logoutUser() }>
                Logout
            </button>
            <S.ScrollBox>
                <S.Chat>
                    <S.Message>
                        <S.UserName>Ninja San</S.UserName>
                        <S.UserMessage>skqpskqpskpqksp</S.UserMessage>
                        <S.DispatchTime></S.DispatchTime>
                    </S.Message>
                    <S.Message>
                        <S.UserName>Ninja San</S.UserName>
                        <S.UserMessage>skqpskqpskpqksp</S.UserMessage>
                        <S.DispatchTime></S.DispatchTime>
                    </S.Message>
                    <S.Message>
                        <S.UserName>Ninja San</S.UserName>
                        <S.UserMessage>skqpskqpskpqksp</S.UserMessage>
                        <S.DispatchTime></S.DispatchTime>
                    </S.Message>
                    <S.Message>
                        <S.UserName>Ninja San</S.UserName>
                        <S.UserMessage>skqpskqpskpqksp</S.UserMessage>
                        <S.DispatchTime></S.DispatchTime>
                    </S.Message>
                    <S.Message>
                        <S.UserName>Ninja San</S.UserName>
                        <S.UserMessage>skqpskqpskpqksp</S.UserMessage>
                        <S.DispatchTime></S.DispatchTime>
                    </S.Message>
                    <S.Message>
                        <S.UserName>Ninja San</S.UserName>
                        <S.UserMessage>skqpskqpskpqksp</S.UserMessage>
                        <S.DispatchTime></S.DispatchTime>
                    </S.Message>
                    <S.Message>
                        <S.UserName>Ninja San</S.UserName>
                        <S.UserMessage>skqpskqpskpqksp</S.UserMessage>
                        <S.DispatchTime></S.DispatchTime>
                    </S.Message>
                    <S.Message>
                        <S.UserName>Ninja San</S.UserName>
                        <S.UserMessage>skqpskqpskpqksp</S.UserMessage>
                        <S.DispatchTime></S.DispatchTime>
                    </S.Message>
                    <S.Message>
                        <S.UserName>Ninja San</S.UserName>
                        <S.UserMessage>skqpskqpskpqksp</S.UserMessage>
                        <S.DispatchTime></S.DispatchTime>
                    </S.Message>
                    <S.Message>
                        <S.UserName>Ninja San</S.UserName>
                        <S.UserMessage>skqpskqpskpqksp</S.UserMessage>
                        <S.DispatchTime></S.DispatchTime>
                    </S.Message>
                    <S.Message>
                        <S.UserName>Ninja San</S.UserName>
                        <S.UserMessage>skqpskqpskpqksp</S.UserMessage>
                        <S.DispatchTime></S.DispatchTime>
                    </S.Message>
                    <S.Message>
                        <S.UserName>Ninja San</S.UserName>
                        <S.UserMessage>skqpskqpskpqksp</S.UserMessage>
                        <S.DispatchTime></S.DispatchTime>
                    </S.Message>
                    <S.Message>
                        <S.UserName>Ninja San</S.UserName>
                        <S.UserMessage>skqpskqpskpqksp</S.UserMessage>
                        <S.DispatchTime></S.DispatchTime>
                    </S.Message>
                    <S.Message>
                        <S.UserName>Ninja San</S.UserName>
                        <S.UserMessage>skqpskqpskpqksp</S.UserMessage>
                        <S.DispatchTime></S.DispatchTime>
                    </S.Message>
                    <S.Message>
                        <S.UserName>Ninja San</S.UserName>
                        <S.UserMessage>skqpskqpskpqksp</S.UserMessage>
                        <S.DispatchTime></S.DispatchTime>
                    </S.Message>
                </S.Chat>
            </S.ScrollBox>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
