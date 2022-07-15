// Core
import React, { FC } from 'react';

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
    const { keyboard, getKeyboardWord, resetKeybordWords } = useKeyboard();
    const { user } = useUser();

    const { createMessage } = useMessages();

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
                        const lastValueWord = value[ value.length - 1 ];

                        getKeyboardWord(lastValueWord);
                    }  }

                    onKeyDown = { (event) => {
                        if (keybortRef.current) {
                            const keyboard = keybortRef.current;
                            const keybordBtn = keyboard.querySelector(`button[value = '${event.nativeEvent.key}']`);
                            if (keybordBtn) {
                                keybordBtn.setAttribute('style', 'background-color:#E15A32; border-color: #fff');
                            }
                        }
                    } }

                    onKeyUp = { (event) => {
                        if (keybortRef.current) {
                            const keyboard = keybortRef.current;
                            const clickBtnValue = event.nativeEvent.key;
                            const keybordBtn = keyboard.querySelector(`button[value = '${clickBtnValue}']`);

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
