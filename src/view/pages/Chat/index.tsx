// Core
import React, { FC, useEffect, useRef } from 'react';

// Bus
import { useMessages } from '../../../bus/messages';
import { useUser } from '../../../bus/user';

// Components
import { ErrorBoundary, UserInfo, CreateMessageForm, Keyboard, Chat } from '../../components';

// Style
import * as S from './styles';

const ChatPage: FC = () => {
    const { user } = useUser();
    const { messages, getMessages } = useMessages();
    const keyboardRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        getMessages();
    }, []);

    if (user === null || messages === null) {
        return <div>Spinner</div>;
    }

    return (
        <S.Container>
            <UserInfo/>
            <Chat />
            <CreateMessageForm keybortRef = { keyboardRef }/>
            <Keyboard keybortRef = { keyboardRef }/>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <ChatPage />
    </ErrorBoundary>
);
