// Core
import React, { FC, useEffect, useRef } from 'react';

// Component
import { EditMessageForm, MessageInfoActions, MessageDateInfo } from '../../components';

// Bus
import { useSelectedMessage } from '../../../bus/client/selectedMessage';
import { useMessages } from '../../../bus/messages';
import { useUser } from '../../../bus/user';

// Styles
import * as S from './styles';

// Types
import { Message } from '../../../bus/messages/types';

export const Chat: FC = () => {
    const scrollLastMessage = useRef<null | HTMLDivElement>(null);

    const { user } = useUser();

    const {
        messages,
    } = useMessages();

    const {
        selectedMessage,
    } = useSelectedMessage();

    useEffect(() => {
        if (scrollLastMessage.current) {
            scrollLastMessage.current.scrollIntoView({ behavior: 'auto', block: 'end', inline: 'nearest' });
        }
    }, [ messages ]);

    const messageTransformator = (message: Message) => ({
        createdDate:        new Date(message.createdAt).getTime(),
        updatedDate:        new Date(message.updatedAt).getTime(),
        messageCreatedTime: new Date(message.createdAt).toLocaleTimeString(),
        messageAuthor:      message.username === user?.username ? true : null,
        isEditingMessage:   selectedMessage?._id === message._id,
    });

    return (
        <S.Container>
            <S.Chat ref = { scrollLastMessage }>
                {
                    messages?.map((message) => {
                        const {
                            createdDate, updatedDate,
                            isEditingMessage,
                            messageAuthor, messageCreatedTime,
                        } = messageTransformator(message);

                        return (
                            <S.Message
                                key = { message._id }
                                messageAuthor = { messageAuthor }>
                                <S.UserName messageAuthor = { messageAuthor }>{message.username}</S.UserName>
                                {
                                    messageAuthor
                                    && (
                                        <MessageInfoActions message = { message } />
                                    )
                                }
                                {
                                    isEditingMessage && messageAuthor
                                        ? (
                                            <EditMessageForm message = { message } />
                                        )
                                        : (
                                            <S.UserMessage>
                                                {message.text}
                                            </S.UserMessage>
                                        )
                                }
                                <MessageDateInfo
                                    createdDate = { createdDate }
                                    message = { message }
                                    messageCreatedTime = { messageCreatedTime }
                                    updatedDate = { updatedDate }
                                />
                            </S.Message>
                        );
                    })
                }
            </S.Chat>
        </S.Container>
    );
};
