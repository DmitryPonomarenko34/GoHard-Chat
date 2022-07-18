// Core
import React, { FC, useState } from 'react';

// Bus
import { useMessages } from '../../../bus/messages';
import { useUser } from '../../../bus/user';
import { useKeyboard } from '../../../bus/client/keyboard';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    keybortRef: React.MutableRefObject<HTMLDivElement | null>
}


export const CreateMessageForm: FC<PropTypes> = ({ keybortRef }) => {
    const { keyboard, getKeyboardWord, resetKeybordWords, deleteLastWord } = useKeyboard();
    const { user } = useUser();
    const { createMessage } = useMessages();
    const [ keyCode, setKeyCode ] = useState<null | number>(null);
    const ownerTypeText = keyboard?.filter((elem) => typeof elem === 'string').join('');

    const handleCreateMessage = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        createMessage({ username: user?.username, text: ownerTypeText });
        resetKeybordWords();
    };

    return (
        <S.Container>
            <S.Form onSubmit = { handleCreateMessage }>
                <S.Input
                    type = 'text'
                    value = { ownerTypeText ? ownerTypeText : '' }
                    onChange = { (event) => {
                        const value = event.target.value;
                        const lastWord = value[ value.length - 1 ];

                        if (keyCode === 8) {
                            if (keyboard) {
                                deleteLastWord(keyboard);

                                return;
                            }
                        }

                        getKeyboardWord(lastWord);
                    }  }

                    onKeyDown = { (event) => {
                        if (keybortRef.current) {
                            const keyboardReff = keybortRef.current;
                            const clickBtnValue = event.keyCode;
                            const keybordBtn = keyboardReff.querySelector(`button[value = '${clickBtnValue}']`);

                            if (keybordBtn) {
                                keybordBtn.setAttribute('style', 'background-color:#E15A32; border-color: #fff');
                            }
                        }

                        setKeyCode(event.keyCode);
                    } }

                    onKeyUp = { (event) => {
                        if (keybortRef.current) {
                            const keyboardReff = keybortRef.current;
                            const clickBtnValue = event.keyCode;
                            const keybordBtn = keyboardReff.querySelector(`button[value = '${clickBtnValue}']`);

                            if (keybordBtn) {
                                keybordBtn.setAttribute('style', 'background-color:#ccc; border-color: #none');
                            }
                        }
                    } }
                />
                <S.SubmitBtn
                    disabled = { !ownerTypeText }
                    type = 'submit'>
                    send
                </S.SubmitBtn>
            </S.Form>
        </S.Container>
    );
};
