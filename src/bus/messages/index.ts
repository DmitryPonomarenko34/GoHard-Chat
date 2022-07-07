// Core
import { useEffect } from 'react';

// Tools
import { useSelector } from '../../tools/hooks';

// Saga
import { useMessageSaga } from './saga';

export const useMessage = () => {
    const { getMessages } = useMessageSaga();
    const messages = useSelector((state) => state.messages);

    useEffect(() => {
        getMessages();
    }, []);

    return {
        messages,
        getMessages,
    };
};
