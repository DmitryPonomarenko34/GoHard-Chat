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
    // const divRef = useRef<HTMLButtonElement | null>(null);

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
                        // event.target.setAttribute('ref', `${divRef}`);
                        // console.log(event.target);

                        // if (divRef.current) {
                        //     divRef.current.style.backgroundColor = '#384e4';
                        // }
                        const lastValueWord = value[ value.length - 1 ];
                        getKeyboardWord(lastValueWord);
                    }  }
                    onKeyUp = { () => {
                        if (keybortRef.current) {
                            const keyboard = keybortRef.current;
                            for (const [ key, value ] of Object.entries(keyboard)) {
                                console.log('key ', key);
                                console.log('val ', value);
                            }
                            // const getKeyboardBtn = keybord.
                            // const sa = .setAttribute('key', event.nativeEvent.key);
                            // console.log(sa);
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
