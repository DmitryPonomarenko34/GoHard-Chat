// Core
import { useState } from 'react';

// Bus
import { useUser } from '../../bus/user';
import { useMessages } from '../../bus/messages';
import { useClientMessage } from '../../bus/client/clientMessage';

// Types
import { Message } from '../../bus/messages/types';
import { FormChangeEvent, FormSubmitEvent } from '../../view/components/ChatForm';

type initialMessage = {
    messageText: string,
    tempEditedMessageText: string,
}

export const useHandlerForm = () => {
    const { user } = useUser();
    const { createMessage, changeMessage } = useMessages();
    const { clientMessage, closeClientMessage } = useClientMessage();

    const [ messageState, setMessageState ] = useState({
        messageText:           '',
        tempEditedMessageText: clientMessage ? clientMessage.text : `${clientMessage}`,
    });

    const messageStateHandler = (key: keyof initialMessage, value: string) => {
        setMessageState({
            ...messageState,
            [ key ]: value,
        });
    };

    const handleCreateMessage = (event: FormSubmitEvent) => {
        event.preventDefault();

        createMessage({
            text:     messageState.messageText,
            username: user?.username,
        });

        messageStateHandler('messageText', '');
    };

    const handleChangeMessage = (event: FormSubmitEvent, message: Message) => {
        event.preventDefault();

        changeMessage({ text: messageState.tempEditedMessageText, _id: message._id });
        closeClientMessage();
        messageStateHandler('tempEditedMessageText', '');
    };

    const handleClientTextInput = (event: FormChangeEvent) => {
        messageStateHandler('tempEditedMessageText', event.target.value);
    };

    const handleTextInput = (event: FormChangeEvent) => {
        messageStateHandler('messageText', event.target.value);
    };

    return { messageState, handleCreateMessage, handleChangeMessage, handleClientTextInput, handleTextInput };
};
