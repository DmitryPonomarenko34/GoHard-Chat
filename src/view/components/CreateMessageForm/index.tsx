// Core
import React, { FC, useState } from 'react';

// Bus
import { useMessages } from '../../../bus/messages';
import { useUser } from '../../../bus/user';

// Styles
import * as S from './styles';

export const CreateMessageForm: FC = () => {
    const [ inputValue, setinputValue ] = useState('');

    const { user } = useUser();
    const { createMessage } = useMessages();

    const handleCreateMessage = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        createMessage({ username: user?.username, text: inputValue });
        setinputValue('');
    };

    return (
        <S.Container>
            <S.Form onSubmit = { handleCreateMessage }>
                <S.Input
                    type = 'text'
                    value = { inputValue }
                    onChange = { (event) => setinputValue(event.target.value) }
                />
                <S.SubmitBtn
                    disabled = { !inputValue }
                    type = 'submit'>
                    send
                </S.SubmitBtn>
            </S.Form>
        </S.Container>
    );
};
