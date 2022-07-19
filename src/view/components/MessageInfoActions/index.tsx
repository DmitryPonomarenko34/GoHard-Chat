// Core
import React, { FC } from 'react';

// Bus
import { useSelectedMessage } from '../../../bus/client/selectedMessage';
import { useMessages } from '../../../bus/messages';
import { useUser } from '../../../bus/user';

// Styles
import * as S from './styles';

// Types
import { Message } from '../../../bus/messages/types';

type PropTypes = {
    message: Message
}

export const MessageInfoActions: FC<PropTypes> = ({ message }) => {
    const {
        deleteMessage,
    } = useMessages();

    const {
        changeSelectedMessage, closeSelectedMessage,
    } = useSelectedMessage();

    const {
        selectedMessage,
    } = useSelectedMessage();

    const { user } = useUser();

    const messageAuthor  = message.username === user?.username ? true : null;
    const isClientMessage = selectedMessage?._id === message._id;

    return (
        <S.Container>
            <S.UserName messageAuthor = { messageAuthor }>{message.username}</S.UserName>
            {
                messageAuthor && (
                    <S.BtnsBox>
                        {
                            isClientMessage ? (
                                <S.CloseBtn onClick = { () => void closeSelectedMessage() }>
                                    Close
                                </S.CloseBtn>
                            ) : (
                                <S.BtnChangeMessage onClick = { () => {
                                    changeSelectedMessage(message);
                                } }>
                                    change
                                </S.BtnChangeMessage>
                            )
                        }
                        <S.BtnRemoveMessage onClick = { () => {
                            // eslint-disable-next-line no-alert
                            const isDelete = confirm('do you really want to delete messages');

                            if (isDelete) {
                                deleteMessage(message);
                            }
                        }  }>
                            remove
                        </S.BtnRemoveMessage>
                    </S.BtnsBox>
                )
            }
        </S.Container>
    );
};
