// Thunk
import { createMessage } from './createMessage';
import { changeMessage } from './changeMessage';
import { deleteMessage } from './deleteMessage';

// Hooks
import { useAppDispatch } from '../../../tools/hooks';

// Types
import { MessagePayload, MessageUpdatePayload } from '../types';


export const useMessagesThunk = () => {
    const dispatch = useAppDispatch();

    return {
        createMessage: (createMessageInfo: MessagePayload) => void dispatch(createMessage(createMessageInfo)),
        changeMessage: (updateMessageInfo: MessageUpdatePayload) => void dispatch(changeMessage(updateMessageInfo)),
        deleteMessage: (messageId: string) => void dispatch(deleteMessage(messageId)),
    };
};
