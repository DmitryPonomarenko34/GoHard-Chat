//Core
import { useDispatch } from 'react-redux';

//Action
import { SelectedMessageActions } from './slice';

// Tools
import { useSelector } from '../../../tools/hooks';

// Types
import { Message } from '../../messages/types';

export const useSelectedMessage = () => {
    const dispatch = useDispatch();
    const selectedMessage = useSelector((state) => state.selectedMessage); // Add SelectedMessage to ./src/init/redux/index.ts

    const closeSelectedMessage = () => void dispatch(SelectedMessageActions.closeSelectedMessage());


    const changeSelectedMessage = (message: Message) => {
        dispatch(SelectedMessageActions.setSelectedMessage(message));
    };

    return {
        selectedMessage,
        changeSelectedMessage,
        closeSelectedMessage,
    };
};
