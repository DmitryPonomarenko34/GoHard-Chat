//Core
import { useDispatch } from 'react-redux';

//Action
import { clientMessageActions } from './slice';

// Tools
import { useSelector } from '../../../tools/hooks';

// Types
import { Message } from '../../messages/types';

export const useClientMessage = () => {
    const dispatch = useDispatch();
    const clientMessage = useSelector((state) => state.clientMessage); // Add clientMessage to ./src/init/redux/index.ts

    const changeClientMessage = (message: Message) => void dispatch(clientMessageActions.setClientMessage(message));
    const closeClientMessage = () => void dispatch(clientMessageActions.closeClientMessage());

    return {
        clientMessage,
        changeClientMessage,
        closeClientMessage,
    };
};
