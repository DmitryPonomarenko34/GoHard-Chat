//Init
import { RuLayout, EnLayout } from './data';

// Core
import React, { FC, useEffect, useRef } from 'react';

// Bus
import { useMessages, useUser } from '../../../bus';
import { useTogglersRedux } from '../../../bus/client/togglers';
import { useKeyboard } from '../../../bus/client/keyboard';

// Container
import { Chat } from '../../containers';

// Components
import { ErrorBoundary, UserInfo, CreateMessageForm, Keyboard } from '../../components';

// Elements
import { ShurikenSpinner } from '../../elements';

// Style
import * as S from './styles';

const Main: FC = () => {
    const { user, logoutUser } = useUser();
    const { createMessage } = useMessages(true);
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
            createMessage({ username: user?.username, text: keyboard.text });
            resetKeybordWords();
        }

        if (keybordBtns) {
            keybordBtns.forEach((el) => el.removeAttribute('style'));
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', (event) => {
            handleOnKey(event, '#E15A32', '#fff');

            if (editInputRef.current) {
                return;
            }

            inputRef.current?.focus();
        });

        window.addEventListener('keyup', (event) => handleOnKey(event, '#ccc', 'none'));
    }, []);


    if (user === null) {
        return (
            <ShurikenSpinner />
        );
    }

    return (
        <S.Container>
            <UserInfo
                handleLogoutUser = { logoutUser }
                username = { user.username }
            />
            <Chat
                editInputRef = { editInputRef }
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
