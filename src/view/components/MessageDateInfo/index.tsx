// Core
import React, { FC } from 'react';

// Styles
import * as S from './styles';

// Types
import { Message } from '../../../bus/messages/types';

type PropTypes = {
    message: Message
    createdDate: number
    updatedDate: number
    messageCreatedTime: string
}

export const MessageDateInfo: FC<PropTypes> = ({ message, createdDate, updatedDate, messageCreatedTime }) => {
    return (
        <S.Container>
            <S.DispatchTime dateTime = { message.createdAt }>
                { messageCreatedTime }
            </S.DispatchTime>
            {
                createdDate !== updatedDate
                    ? <S.EditedText>edited</S.EditedText>
                    : null
            }
        </S.Container>
    );
};
