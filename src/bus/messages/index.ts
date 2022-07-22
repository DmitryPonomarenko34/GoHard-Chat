// Core
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Saga
import { useMessagesSaga } from './saga';

// Slice
import { messageActions } from './slice';

// Tools
import { useSelector } from '../../tools/hooks';

let timerId: NodeJS.Timer | undefined = void 0; // eslint-disable-line no-undef

export const useMessages = (isFetching?: boolean) => {
    const { getMessages, createMessage, changeMessage, deleteMessage } = useMessagesSaga();

    const dispatch = useDispatch();
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
