// Core
import React, { FC } from 'react';

// Styles
import * as S from './styles';

// Types
import { Message } from '../../../bus/messages/types';

type PropTypes = {
    isEditingMessage: boolean
    message: Message
    closeSelectedMessage: () => void
    changeSelectedMessage: (message: Message) => void
    handleRemoveMessage: (message: Message) => void
}

export const MessageInfoActions: FC<PropTypes>
    = ({
        changeSelectedMessage, closeSelectedMessage, handleRemoveMessage,
        isEditingMessage, message,
    }) => {
        return (
            <S.Container>
                <S.BtnsBox>
                    {
                        isEditingMessage ? (
                            <S.CloseBtn onClick = { closeSelectedMessage }>
                                Close
                            </S.CloseBtn>
                        ) : (
                            <S.BtnChangeMessage onClick = { () => changeSelectedMessage(message) }>
                                change
                            </S.BtnChangeMessage>
                        )
                    }
                    <S.BtnRemoveMessage onClick = { () => handleRemoveMessage(message) }>
                        remove
                    </S.BtnRemoveMessage>
                </S.BtnsBox>
            </S.Container>
        );
    };
