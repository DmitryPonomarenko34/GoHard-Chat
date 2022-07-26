// Core
import { useEffect } from 'react';

// Saga
import { useMessagesThunk } from './thunk';

// Slice
import { messageActions } from './slice';

// Tools
import { useAppDispatch, useSelector } from '../../tools/hooks';

let timerId: NodeJS.Timer | undefined = void 0; // eslint-disable-line no-undef

export const useMessages = (isFetching?: boolean) => {
    const { getMessages, createMessage, changeMessage, deleteMessage } = useMessagesThunk();

    const dispatch = useAppDispatch();
    const messages = useSelector((state) => state.messages);

    const clearMessages = () => void dispatch(messageActions.clearMessages(null));

    useEffect(() => {
        if (isFetching) {
            getMessages();

            timerId = setInterval(() => { // eslint-disable-line @typescript-eslint/no-unused-vars
                getMessages();
            }, 5000);
        }

        return () => clearInterval(timerId);
    }, []);

    return {
        messages,
        getMessages,
        createMessage,
        changeMessage,
        deleteMessage,
        clearMessages,
    };
};
