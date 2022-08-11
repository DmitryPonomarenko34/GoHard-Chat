// Core
import { useLazyQuery, useMutation } from '@apollo/client';
import React, { FC, useState } from 'react';

// Bus
import { useSelectedMessage } from '../../../bus/client/selectedMessage';
import { useTogglersRedux } from '../../../bus/client/togglers';
import { CHANGE_MESSAGE, GET_MESSAGES } from '../../../bus/messages/schema';

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
        { messageText, editInputRef, messageId },
    ) => {
        const [ inputValue, setinputValue ] = useState(messageText);
        const { closeSelectedMessage } = useSelectedMessage();
        const { setTogglerAction } = useTogglersRedux();
        const [ , { refetch: refetchMessages }] = useLazyQuery(GET_MESSAGES);
        const [ changeMessage ] = useMutation(CHANGE_MESSAGE, { onCompleted() {
            refetchMessages();
            setTogglerAction({ type: 'isLoading', value: false });
        } });

        const handleSubmitMessage = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            setTogglerAction({ type: 'isLoading', value: true });
            changeMessage({ variables: { updateMessageId: messageId, text: inputValue }});
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
