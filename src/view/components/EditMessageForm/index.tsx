// Core
import React, { FC, useState } from 'react';

// Bus
import { useMessages } from '../../../bus/messages';
import { useSelectedMessage } from '../../../bus/client/selectedMessage';

// Styles
import * as S from './styles';

// Types
import { Message } from '../../../bus/messages/types';

export type PropTypes = {
    message: Message;
}

export const EditMessageForm: FC<PropTypes> = ({ message }) => {
    const [ inputValue, setinputValue ] = useState(message.text);
    const { changeMessage } = useMessages();
    const { closeSelectedMessage } = useSelectedMessage();

    const handleChangeMessage = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        changeMessage({ text: inputValue, _id: message._id });
        closeSelectedMessage();
    };

    return (
        <S.Container>
            <S.Form onSubmit = { handleChangeMessage }>
                <S.Input
                    type = 'text'
                    value = { inputValue }
                    onChange = { (event) => setinputValue(event.target.value) }
                />
                <S.SubmitBtn
                    disabled = { !inputValue || message.text === inputValue }
                    type = 'submit'>
                    send
                </S.SubmitBtn>
            </S.Form>
        </S.Container>
    );
};
