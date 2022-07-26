// Thunk
import { createMessage } from './createMessage';
import { changeMessage } from './changeMessage';
import { deleteMessage } from './deleteMessage';
import { getMessages } from './getMessages';

// Hooks
import { useAppDispatch } from '../../../tools/hooks';

// Types
import { MessagePayload, MessageUpdatePayload } from '../types';


export const useMessagesThunk = () => {
    const dispatch = useAppDispatch();

    return {
        getMessages:   () => void dispatch(getMessages()),
        createMessage: (createMessageInfo: MessagePayload) => void dispatch(createMessage(createMessageInfo)),
        changeMessage: (updateMessageInfo: MessageUpdatePayload) => void dispatch(changeMessage(updateMessageInfo)),
        deleteMessage: (messageId: string) => void dispatch(deleteMessage(messageId)),
    };
};
