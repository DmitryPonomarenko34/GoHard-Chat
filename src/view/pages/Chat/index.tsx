// Core
import React, { FC, useEffect, useRef } from 'react';

// Bus
import { useUser } from '../../../bus/user';
import { useMessages } from '../../../bus/messages';
import { useClientMessage } from '../../../bus/client/clientMessage';

// Components
import { ErrorBoundary, UserInfo, SubmitForm, Keyboard } from '../../components';

// Style
import * as S from './styles';

// Hook
import { useHandlerForm } from '../../../tools/hooks/customHandlerHook';

// Types
import { Message } from '../../../bus/messages/types';

const ChatPage: FC = () => {
    const scrollLastMessage = useRef<null | HTMLDivElement>(null);

    const {
        user,
        logoutUser,
    } = useUser();

    const {
        messages,
        getMessages, deleteMessage,
    } = useMessages();

    const {
        clientMessage,
        changeClientMessage, closeClientMessage,
    } = useClientMessage();

    const {
        messageState,
        handleChangeMessage, handleClientTextInput,
        handleCreateMessage, handleTextInput,
    } = useHandlerForm();

    // const { keyboard } = useKeyboard();

    useEffect(() => {
        getMessages();
    }, []);

    useEffect(() => {
        if (scrollLastMessage.current) {
            scrollLastMessage.current.scrollIntoView({ behavior: 'auto', block: 'end', inline: 'nearest' });
        }
    }, [ messages ]);

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
            <UserInfo
                username = { user.username }
                onClickLogout = { logoutUser }
            />
            <S.ChatBox>
                <S.Chat ref = { scrollLastMessage }>
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
                                            <SubmitForm
                                                inputValue = { messageState.tempEditedMessageText }
                                                onChangeInput = { handleClientTextInput }
                                                onSubmitForm = { (event) => handleChangeMessage(event, message) }
                                            />
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
                    }
                </S.Chat>
            </S.ChatBox>
            <S.FormBox>
                <SubmitForm
                    inputValue = { messageState.messageText }
                    onChangeInput = { handleTextInput }
                    onSubmitForm = { handleCreateMessage }
                />
            </S.FormBox>
            <Keyboard/>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <ChatPage />
    </ErrorBoundary>
);
