// Core
import React, { FC, useEffect, useState } from 'react';

// Bus
import { useUser } from '../../../bus/user';
import { useMessages } from '../../../bus/messages';
import { useClientMessage } from '../../../bus/client/clientMessage';

// Components
import { ErrorBoundary } from '../../components';

// Asset
import ninjaImg from '../../../assets/images/ninjaImg.jpg';

// Styles
import * as S from './styles';

// Types
import { Message } from '../../../bus/messages/types';


const Main: FC = () => {
    const { user, logoutUser } = useUser();
    const { messages, createMessage, getMessages, changeMessage, deleteMessage } = useMessages();
    const { clientMessage, changeClientMessage, closeClientMessage } = useClientMessage();

    const [ messageText, setMessageText ] = useState('');
    const [ clientMessageText, setClientMessageText ] = useState('');

    useEffect(() => {
        getMessages();
    }, []);

    if (user === null || messages === null) {
        return <div>Spinner</div>;
    }

    const messageTransformator = (message: Message) => ({
        createdDate:        new Date(message.createdAt).getTime(),
        updatedDate:        new Date(message.updatedAt).getTime(),
        messageCreatedTime: new Date(message.createdAt).toLocaleTimeString(),
        messageAuthor:      message.username === user.username ? true : null,
        isClientMessage:    clientMessage?._id === message._id,
    });

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
                        messages.map((message) => {
                            const {
                                createdDate, updatedDate,
                                isClientMessage,
                                messageAuthor, messageCreatedTime,
                            } = messageTransformator(message);

                            return (
                                <S.Message
                                    key = { message._id }
                                    messageAuthor = { messageAuthor }>
                                    <S.ActionBox>
                                        <S.UserName messageAuthor = { messageAuthor }>{message.username}</S.UserName>
                                        {
                                            messageAuthor && (
                                                <S.BtnsBox>
                                                    {
                                                        isClientMessage ? (
                                                            <S.CloseBtn onClick = { () => void closeClientMessage() }>
                                                                Close
                                                            </S.CloseBtn>
                                                        ) : (
                                                            <S.BtnChangeMessage onClick = { () => {
                                                                changeClientMessage(message);
                                                            } }>
                                                                change
                                                            </S.BtnChangeMessage>
                                                        )
                                                    }
                                                    <S.BtnRemoveMessage onClick = { () => void deleteMessage(message) }>
                                                        remove
                                                    </S.BtnRemoveMessage>
                                                </S.BtnsBox>
                                            )
                                        }
                                    </S.ActionBox>
                                    {
                                        isClientMessage && messageAuthor ? (
                                            <S.ChangeMessageForm
                                                onSubmit = { (event) => {
                                                    event.preventDefault();
                                                    changeMessage({ text: clientMessageText, _id: message._id });
                                                    closeClientMessage();
                                                } }>
                                                <S.ChangeMessageInput
                                                    placeholder = 'enter a change message'
                                                    type = 'text'
                                                    value = { clientMessageText }
                                                    onChange = { (event) => {
                                                        setClientMessageText(event.target.value);
                                                    } }
                                                />
                                                <S.ChangeMessageBtn>Submit</S.ChangeMessageBtn>
                                            </S.ChangeMessageForm>
                                        ) : (
                                            <S.UserMessage>
                                                {message.text}
                                            </S.UserMessage>
                                        )
                                    }
                                    <S.MessageFlexColumn>
                                        <S.DispatchTime dateTime = { message.createdAt }>
                                            { messageCreatedTime }
                                        </S.DispatchTime>
                                        {
                                            createdDate !== updatedDate ? (
                                                <S.EditedText>edited</S.EditedText>
                                            ) : null
                                        }
                                    </S.MessageFlexColumn>
                                </S.Message>
                            );
                        })
                            .reverse()
                    }
                </S.Chat>
            </S.ChatBox>
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
                    onChange = { (event) => void setMessageText(event.target.value) }
                />
                <S.SubmitBtn type = 'submit'>send</S.SubmitBtn>
            </S.Form>
            <S.DecorImg src = { ninjaImg } />
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
