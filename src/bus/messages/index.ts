// Tools
import { useSelector } from '../../tools/hooks';

// Saga
import { useMessagesSaga } from './saga';

export const useMessages = () => {
    const { getMessages, createMessage } = useMessagesSaga();
    const messages = useSelector((state) => state.messages);

    return {
        messages,
        getMessages,
        createMessage,
    };
};
