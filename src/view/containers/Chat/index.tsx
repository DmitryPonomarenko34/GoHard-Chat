// Core
import React, { FC } from 'react';
import { useMutation, useQuery } from '@apollo/client';

// Component
import { EditMessageForm, MessageInfoActions, MessageDateInfo } from '../../components';

// Bus
import { useSelectedMessage } from '../../../bus/client/selectedMessage';
import { useTogglersRedux } from '../../../bus/client/togglers';

// Schema
import { DELETE_MESSAGE, GET_MESSAGES } from '../../../bus/messages/schema';

// Styles
import * as S from './styles';

// Types
import { Message, Messages } from '../../../bus/messages/types';

type PropTypes = {
    editInputRef: React.RefObject<HTMLInputElement>
    ownername: string
}

export const Chat: FC<PropTypes> = ({ editInputRef, ownername }) => {
    const { togglersRedux, setTogglerAction } = useTogglersRedux();
    const { selectedMessage, closeSelectedMessage, changeSelectedMessage } = useSelectedMessage();
    const { data: messagesData, refetch: refetchMesages } = useQuery<Messages>(GET_MESSAGES, { pollInterval: 4000 });
    const [ deleteMessage ] = useMutation<string>(DELETE_MESSAGE, { onCompleted() {
        refetchMesages();
    } });
    const messageTransformator = (message: Message) => ({
        createdDate:        new Date(Number(message.createdAt)).getTime(),
        updatedDate:        new Date(Number(message.updatedAt)).getTime(),
        messageCreatedTime: new Date(Number(message.createdAt)).toLocaleTimeString(),
        messageAuthor:      message.username === ownername ? true : null,
        isEditingMessage:   selectedMessage?.id === message.id,
    });

    const handleRemoveMessage = (message: Message) => {
        // eslint-disable-next-line no-alert
        const isDelete = confirm('do you really want to delete messages');

        if (isDelete) {
            setTogglerAction({ type: 'isLoading', value: true });

            deleteMessage({ variables: { deleteMessageId: message.id }});
        }
    };

    const handleChangeMessage = (message: Message) => {
        changeSelectedMessage(message);
    };

    return (
        <S.Container>
            <S.Chat>
                {
                    messagesData?.getMessages.map((message) => {
                        const {
                            createdDate, updatedDate,
                            isEditingMessage,
                            messageAuthor, messageCreatedTime,
                        } = messageTransformator(message);

                        return (
                            <S.Message
                                key = { message.id }
                                messageAuthor = { messageAuthor }>
                                <S.UserName messageAuthor = { messageAuthor }>
                                    {message.username}
                                </S.UserName>
                                {
                                    messageAuthor
                                        && (
                                            <MessageInfoActions
                                                changeSelectedMessage = { handleChangeMessage }
                                                closeSelectedMessage = { closeSelectedMessage }
                                                handleRemoveMessage = { handleRemoveMessage }
                                                isEditingMessage = { isEditingMessage }
                                                isSending = { togglersRedux.isLoading }
                                                message = { message }
                                            />
                                        )
                                }
                                {
                                    isEditingMessage && messageAuthor
                                        ? (
                                            <EditMessageForm
                                                editInputRef = { editInputRef }
                                                messageId = { message.id }
                                                messageText = { message.text }
                                            />
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
