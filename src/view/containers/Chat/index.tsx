// Core
import React, { FC, useEffect, useRef, useState } from 'react';

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
    const scrollLastMessage = useRef<null | HTMLDivElement>(null);

    const { user } = useUser();
    const { togglersRedux } = useTogglersRedux();
    const {
        messages, changeMessage,
        deleteMessage,
    } = useMessages();

    const {
        selectedMessage, closeSelectedMessage,
        changeSelectedMessage,
    } = useSelectedMessage();

    const [ inputValue, setinputValue ] = useState(() => selectedMessage?.text);

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

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setinputValue(event.target.value);
    };

    const handleSubmitMessage = (event: React.FormEvent<HTMLFormElement>, messageId?: string) => {
        event.preventDefault();
        changeMessage({ text: inputValue, _id: messageId });
        closeSelectedMessage();
    };

    const handleRemoveMessage = (message: Message) => {
        // eslint-disable-next-line no-alert
        const isDelete = confirm('do you really want to delete messages');

        if (isDelete) {
            deleteMessage(message);
        }
    };

    const handleChangeMessage = (message: Message) => {
        changeSelectedMessage(message);
    };

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
                                            isSending = { togglersRedux.isSending }
                                            message = { message }
                                        />
                                    )
                                }
                                {
                                    isEditingMessage && messageAuthor
                                        ? (
                                            <EditMessageForm
                                                editInputRef = { editInputRef }
                                                handleChangeInput = { handleChangeInput }
                                                handleSubmitMessage = { (event) => {
                                                    handleSubmitMessage(event, message._id);
                                                }  }
                                                inputValue = { inputValue ? inputValue : message.text }
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
