//Init
import { RuLayout, EnLayout } from './data';

// Core
import React, { FC, useEffect, useRef } from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';

// Bus
import { useTogglersRedux } from '../../../bus/client/togglers';
import { useKeyboard } from '../../../bus/client/keyboard';

// Schema
import { REFRESH_AUTH } from '../../../bus/user/schema';
import { CREATE_MESSAGE, GET_MESSAGES } from '../../../bus/messages/schema';

// Container
import { Chat } from '../../containers';

// Components
import { ErrorBoundary, CreateMessageForm, Keyboard, UserInfo } from '../../components'; // UserInfo

// Elements
import { ShurikenSpinner } from '../../elements';

// Style
import * as S from './styles';

// Types
import { UserRefreshState } from '../../../bus/user/types';
import { Message } from '../../../bus/messages/types';

// Constant
import { USER_ID } from '../../../init';

const Main: FC = () => {
    const userId = localStorage.getItem(USER_ID);
    const [
        , {
            data: user,
            loading: isUserLoad,
            refetch,
        },
    ] = useLazyQuery<UserRefreshState>(REFRESH_AUTH, { variables: { refreshAuthId: userId }});
    const [ , { refetch: refetchMessage }] = useLazyQuery(GET_MESSAGES);
    const [ createMessage, { loading: isSubmitingMessage }] = useMutation<Message>(CREATE_MESSAGE, { onCompleted() {
        refetchMessage();
    } });
    const { togglersRedux, setTogglerAction } = useTogglersRedux();
    const { keyboard, getKeyboardWord, resetKeybordWords } = useKeyboard();
    const keyboardRef = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const editInputRef = useRef<HTMLInputElement | null>(null);

    const keybordBtns = keyboardRef.current?.querySelectorAll('button');

    const handleKeyboard = () => {
        setTogglerAction({ type: 'isKeyboardOpen', value: !togglersRedux.isKeyboardOpen });
    };

    const handleOnKey = (
        event: React.KeyboardEvent<HTMLInputElement> | KeyboardEvent,
        bgColor: string,
        borderColor: string,
    ) => {
        if (keyboardRef.current) {
            const keyboardReff = keyboardRef.current;
            const clickBtnValue = event.keyCode;

            const keybordBtn = keyboardReff.querySelector(`button[value = '${clickBtnValue}']`);

            if (keybordBtn) {
                keybordBtn.setAttribute('style', `background-color:${bgColor}; border-color: ${borderColor}`);
            }
        }
    };

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        getKeyboardWord({ text: value, mouseClickText: keyboard.mouseClickText });
    };

    const handleCreateMessage = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (keyboard) {
            createMessage({ variables: { username: user ? user.refreshAuth.username : '', text: keyboard.text }});
            refetchMessage();
            resetKeybordWords();
        }

        if (keybordBtns) {
            keybordBtns.forEach((el) => el.removeAttribute('style'));
        }
    };

    const logoutUser = () => {
        localStorage.removeItem(USER_ID);
        setTogglerAction({ type: 'isLoggedIn', value: false });
    };

    useEffect(() => {
        refetch();

        window.addEventListener('keydown', (event) => {
            handleOnKey(event, '#E15A32', '#fff');

            if (editInputRef.current) {
                return;
            }

            inputRef.current?.focus();
        });
        window.addEventListener('keyup', (event) => handleOnKey(event, '#ccc', 'none'));
    }, []);


    // eslint-disable-next-line no-undefined
    if (isUserLoad) {
        return (
            <ShurikenSpinner />
        );
    }

    return (
        <S.Container>
            <UserInfo
                handleLogoutUser = { logoutUser }
                username = { user ? user.refreshAuth.username : '' }
            />
            <Chat
                editInputRef = { editInputRef }
                ownername = { user ? user.refreshAuth.username : '' }
            />
            <CreateMessageForm
                handleChangeInput = { handleChangeInput }
                handleCreateMessage = { handleCreateMessage }
                handleKeyboard = { handleKeyboard }
                handleOnKeyDown = { (event) => {
                    handleOnKey(event, '#E15A32', '#fff');
                } }
                handleOnKeyUp = { (event) => {
                    handleOnKey(event, '#ccc', 'none');
                }  }
                inputRef = { inputRef }
                isSubmitingMessage = { isSubmitingMessage }
                keyboardText = { keyboard.text }
            />
            {
                togglersRedux.isKeyboardOpen
                    && (
                        <Keyboard
                            arrayKeyboardWords = { togglersRedux.isRuLayout ? RuLayout : EnLayout }
                            keybortRef = { keyboardRef }
                        />
                    )
            }
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
