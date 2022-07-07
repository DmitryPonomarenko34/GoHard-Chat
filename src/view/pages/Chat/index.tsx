// Core
import React, { FC, useEffect, useState } from 'react';

// Bus
import { useUser } from '../../../bus/user';
import { useMessages } from '../../../bus/messages';

// Components
import { ErrorBoundary } from '../../components';

// Styles
import * as S from './styles';

// Asset
import ninjaImg from '../../../assets/images/ninjaImg.jpg';

const Main: FC = () => {
    const { user, logoutUser } = useUser();
    const { messages, createMessage, getMessages } = useMessages();
    const [ messageText, setMessageText ] = useState('');

    useEffect(() => {
        getMessages();
    }, []);

    if (user === null || messages === null) {
        return <div>Spinner</div>;
    }

    return (
        <S.Container>
            <S.FlexWrap>
                <S.Title>
                    Welcome to Chat:
                    <S.AccentTitleWord>
                        {user.username}
                    </S.AccentTitleWord>
                </S.Title>
                <S.LogoutBtn onClick = { () => void logoutUser() }>
                    Logout
                </S.LogoutBtn>
            </S.FlexWrap>
            <S.ChatBox>
                <S.Chat>
                    {
                        messages
                            .map(({ _id, username, text, createdAt, updatedAt }) => {
                                const createdDate = new Date(createdAt).getTime();
                                const updatedDate = new Date(updatedAt).getTime();

                                const messageCreatedTime = new Date(createdAt).toLocaleTimeString();

                                return (
                                    <S.Message key = { _id } >
                                        <S.UserName>{username}</S.UserName>
                                        <S.UserMessage>{text}</S.UserMessage>
                                        <S.MessageFlexColumn>
                                            <S.DispatchTime dateTime = { createdAt }>
                                                {messageCreatedTime}
                                            </S.DispatchTime>
                                            {
                                                createdDate !== updatedDate ? <S.EditedText>edited</S.EditedText> : null
                                            }
                                        </S.MessageFlexColumn>
                                    </S.Message>
                                );
                            })
                            .reverse()
                    }
                    <S.Form onSubmit = { (event) => {
                        event.preventDefault();
                        createMessage({
                            text:     messageText,
                            username: user.username,
                        });
                        setMessageText('');
                    }  }>
                        <S.Input
                            type = 'text'
                            value = { messageText }
                            onChange = { (event) => setMessageText(event.target.value) }
                        />
                        <S.SubmitBtn type = 'submit'>send</S.SubmitBtn>
                    </S.Form>
                </S.Chat>
            </S.ChatBox>
            <S.DecorImg src = { ninjaImg } />
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
