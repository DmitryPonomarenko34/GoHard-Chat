// Core
import { useEffect } from 'react';

// Saga
import { useMessagesThunk } from './thunk';

// Slice
import { messageActions } from './slice';

// Tools
import { useAppDispatch, useSelector } from '../../tools/hooks';
import { useQuery } from '@apollo/client';

// Schema
import { GET_MESSAGES } from './schema';


// let timerId: NodeJS.Timer | undefined = void 0; // eslint-disable-line no-undef

export const useMessages = (isFetching?: boolean) => {
    const { createMessage, changeMessage, deleteMessage } = useMessagesThunk();
    const { data } = useQuery(GET_MESSAGES);

    // const clearMessages = () => void dispatch(messageActions.clearMessages(null));

    // useEffect(() => {
    //     if (isFetching) {
    //         getMessages();

    //         timerId = setInterval(() => { // eslint-disable-line @typescript-eslint/no-unused-vars
    //             getMessages();
    //         }, 5000);
    //     }

    //     return () => clearInterval(timerId);
    // }, []);

    return {
        data,
        createMessage,
        changeMessage,
        deleteMessage,
        // clearMessages,
    };
};
