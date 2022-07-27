// Core
import React, { FC } from 'react';

// Component
import { EditMessageForm, MessageInfoActions, MessageDateInfo } from '../../components';

// Bus
import { useSelectedMessage } from '../../../bus/client/selectedMessage';
import { useMessages } from '../../../bus/messages';
import { useUser } from '../../../bus/user';
import { useTogglersRedux } from '../../../bus/client/togglers';

// Styles
import * as S from './styles';

// Types
import { Message } from '../../../bus/messages/types';

type PropTypes = {
    editInputRef: React.RefObject<HTMLInputElement>
}

export const Chat: FC<PropTypes> = ({ editInputRef }) => {
    const { user } = useUser();
    const { togglersRedux } = useTogglersRedux();
    const { messages, deleteMessage  } = useMessages();
    const { selectedMessage, closeSelectedMessage, changeSelectedMessage } = useSelectedMessage();
    const { setTogglerAction } = useTogglersRedux();
    const messageTransformator = (message: Message) => ({
        createdDate:        new Date(message.createdAt).getTime(),
        updatedDate:        new Date(message.updatedAt).getTime(),
        messageCreatedTime: new Date(message.createdAt).toLocaleTimeString(),
        messageAuthor:      message.username === user?.username ? true : null,
        isEditingMessage:   selectedMessage?._id === message._id,
    });

    const handleRemoveMessage = (message: Message) => {
        // eslint-disable-next-line no-alert
        const isDelete = confirm('do you really want to delete messages');

        if (isDelete) {
            setTogglerAction({ type: 'isLoading', value: true });

            deleteMessage(message._id);
        }
    };

    const handleChangeMessage = (message: Message) => {
        changeSelectedMessage(message);
    };

    return (
        <S.Container>
            <S.Chat>
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
                                                messageId = { message._id }
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
