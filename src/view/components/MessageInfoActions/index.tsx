// Core
import React, { FC } from 'react';

// Bus
import { useSelectedMessage } from '../../../bus/client/selectedMessage';
import { useMessages } from '../../../bus/messages';

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
        changeSelectedMessage, selectedMessage, closeSelectedMessage,
    } = useSelectedMessage();

    return (
        <S.Container>
            <S.BtnsBox>
                {
                    selectedMessage?._id === message._id ? (
                        <S.CloseBtn onClick = { () => void closeSelectedMessage() }>
                            Close
                        </S.CloseBtn>
                    ) : (
                        <S.BtnChangeMessage onClick = { () => void changeSelectedMessage(message) }>
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
        </S.Container>
    );
};
