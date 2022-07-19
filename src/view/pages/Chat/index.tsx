// Core
import React, { FC, useEffect, useRef } from 'react';

// Bus
import { useMessages } from '../../../bus/messages';
import { useUser } from '../../../bus/user';
import { useTogglersRedux } from '../../../bus/client/togglers';

// Components
import { ErrorBoundary, UserInfo, CreateMessageForm, MainKeyboard, Chat } from '../../components';

// Elements
import { ShurikenSpinner } from '../../elements';

// Style
import * as S from './styles';

const ChatPage: FC = () => {
    const { user } = useUser();
    const { messages, getMessages } = useMessages();
    const { togglersRedux, setTogglerAction } = useTogglersRedux();
    const keyboardRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        getMessages();
    }, []);

    const handleKeyboard = () => {
        setTogglerAction({ type: 'isKeyboardOpen', value: !togglersRedux.isKeyboardOpen });
    };

    if (user === null || messages === null) {
        return (
            <ShurikenSpinner />
        );
    }

    return (
        <S.Container>
            <UserInfo/>
            <Chat />
            <CreateMessageForm keybortRef = { keyboardRef }/>
            <S.Btn onClick = { handleKeyboard }>
                {
                    togglersRedux.isKeyboardOpen
                        ? 'Close'
                        : 'Open'
                }
            </S.Btn>
            {
                togglersRedux.isKeyboardOpen
                    ? (
                        <MainKeyboard keyboardRef = { keyboardRef }/>
                    ) : null
            }
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <ChatPage />
    </ErrorBoundary>
);
