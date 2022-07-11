// Core
import React, { FC, useEffect, useState } from 'react';

// Bus
import { useUser } from '../../../bus/user';
import { useMessages } from '../../../bus/messages';
import { useClientMessage } from '../../../bus/client/clientMessage';

// Components
import { ErrorBoundary } from '../../components';

// Styles
import * as S from './styles';

// Asset
import ninjaImg from '../../../assets/images/ninjaImg.jpg';

const Main: FC = () => {
    const { user, logoutUser } = useUser();
    const { messages, createMessage, getMessages, changeMessage, deleteMessage } = useMessages();
    const [ messageText, setMessageText ] = useState('');
    const [ clientMessageText, setClientMessageText ] = useState('');
    const { clientMessage, changeClientMessage, closeClientMessage } = useClientMessage();

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
                            .map((elem) => {
                                const createdDate = new Date(elem.createdAt).getTime();
                                const updatedDate = new Date(elem.updatedAt).getTime();

                                const messageCreatedTime = new Date(elem.createdAt).toLocaleTimeString();
                                const messageAuthor = elem.username === user.username ? true : null;

                                const isClientMessage = clientMessage?._id === elem._id;

                                return (
                                    <S.Message
                                        key = { elem._id }
                                        messageAuthor = { messageAuthor }>
                                        <S.ActionBox>
                                            <S.UserName messageAuthor = { messageAuthor }>{elem.username}</S.UserName>
                                            {
                                                messageAuthor && (
                                                    <S.BtnsBox>
                                                        {
                                                            isClientMessage ? (
                                                                <S.CloseBtn onClick = { () => {
                                                                    closeClientMessage();
                                                                }  }>
                                                                    Close
                                                                </S.CloseBtn>
                                                            ) : (
                                                                <S.BtnChangeMessage onClick = { () => {
                                                                    changeClientMessage(elem);
                                                                } }>
                                                                    change
                                                                </S.BtnChangeMessage>
                                                            )
                                                        }
                                                        <S.BtnRemoveMessage onClick = { () => {
                                                            deleteMessage(elem);
                                                        }  }>
                                                            remove
                                                        </S.BtnRemoveMessage>
                                                    </S.BtnsBox>
                                                )
                                            }
                                        </S.ActionBox>
                                        {
                                            isClientMessage && messageAuthor ? (
                                                <S.ChangeMessageForm
                                                    onSubmit = {
                                                        (event) => {
                                                            event.preventDefault();
                                                            changeMessage({ text: clientMessageText, _id: elem._id });
                                                            closeClientMessage();
                                                        }
                                                    }>
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
                                            ) : <S.UserMessage>{elem.text}</S.UserMessage>
                                        }
                                        <S.MessageFlexColumn>
                                            <S.DispatchTime dateTime = { elem.createdAt }>
                                                { messageCreatedTime }
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
