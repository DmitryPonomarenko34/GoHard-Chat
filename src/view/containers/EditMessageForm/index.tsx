// Core
import React, { FC, useState } from 'react';

// Bus
import { useMessages } from '../../../bus';
import { useSelectedMessage } from '../../../bus/client/selectedMessage';
import { useTogglersRedux } from '../../../bus/client/togglers';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    editInputRef: React.RefObject<HTMLInputElement>
    messageText: string
    messageId: string
}

export const EditMessageForm: FC<PropTypes>
    = (
        { messageText, messageId, editInputRef },
    ) => {
        const [ inputValue, setinputValue ] = useState(messageText);
        const { changeMessage } = useMessages();
        const { closeSelectedMessage } = useSelectedMessage();
        const { setTogglerAction } = useTogglersRedux();

        const handleSubmitMessage = (event: React.FormEvent<HTMLFormElement>) => {
            setTogglerAction({ type: 'isLoading', value: true });
            event.preventDefault();

            changeMessage({ _id: messageId, text: inputValue });
            closeSelectedMessage();
        };

        return (
            <S.Container>
                {
                    <S.Form onSubmit = { (event) => handleSubmitMessage(event) }>
                        <S.Input
                            ref = { editInputRef }
                            type = 'text'
                            value = { inputValue }
                            onChange = { (event) => setinputValue(event.target.value) }
                        />
                        <S.SubmitBtn
                            disabled = { !inputValue || messageText === inputValue }
                            type = 'submit'>
                            send
                        </S.SubmitBtn>
                    </S.Form>
                }
            </S.Container>
        );
    };
