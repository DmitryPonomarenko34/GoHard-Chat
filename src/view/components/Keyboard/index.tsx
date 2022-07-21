// Core
import React, { FC } from 'react';

// Bus
import { useKeyboard } from '../../../bus/client/keyboard';
import { useTogglersRedux } from '../../../bus/client/togglers';
import { useMessages } from '../../../bus/messages';
import { useUser } from '../../../bus/user';

// Component
import { ErrorBoundary } from '../ErrorBoundary';

// Style
import * as S from './styles';

// Types
type PropTypes = {
    keybortRef?: React.MutableRefObject<HTMLDivElement | null>
    arrayKeyboardWords?: {
        arrayElemsNumber: Array<{ value: string; keycode: number }>
        arrayElemsWord: Array<{ value: string; keycode: number }>
        arrayWordGrid: Array<{ value: string; keycode: number }>
        arrayElemsWordTwo: Array<{ value: string; keycode: number }>
        arrayElemsWordThree: Array<{ value: string; keycode: number }>
    }
}

export const Keyboard: FC<PropTypes> = ({ keybortRef, arrayKeyboardWords }) => {
    const { keyboard, deleteLastWord, getKeyboardWord, resetKeybordWords } = useKeyboard();
    const { togglersRedux, setTogglerAction } = useTogglersRedux();
    const { createMessage } = useMessages();
    const { user } = useUser();

    const getArray = (array: Array<{value: string; keycode: number}>, tuUpperCase?: boolean) => {
        const newArray = array.map((elem) => {
            if (tuUpperCase === true) {
                return (
                    <S.KeyboardElem
                        key = { elem.keycode }
                        value = { elem.keycode }>
                        {
                            elem.keycode === 19
                                || elem.keycode === 32
                                || elem.keycode === 13
                                || elem.keycode === 8
                                || elem.keycode === 16
                                || elem.keycode === 20
                                ? elem.value
                                : elem.value.toUpperCase()
                        }
                    </S.KeyboardElem>
                );
            }

            return (
                <S.KeyboardElem
                    key = { elem.keycode }
                    value = { elem.keycode }>
                    {elem.value}
                </S.KeyboardElem>
            );
        });

        return newArray;
    };

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        const button = event.target as HTMLButtonElement;
        const buttonValue = button.innerText;

        if (button.getAttribute('value') === '32') {
            getKeyboardWord({ mouseClickText: ' ', text: keyboard.text });

            return;
        }

        if (button.getAttribute('value') === '8') {
            if (keyboard) {
                deleteLastWord(keyboard);

                return;
            }
        }

        if (button.getAttribute('value') === '16') {
            setTogglerAction({ type: 'isUpperWord', value: !togglersRedux.isUpperWord });

            return;
        }

        if (button.getAttribute('value') === '13') {
            if (keyboard && keyboard.text.length !== 0) {
                createMessage({ username: user?.username, text: keyboard.text });
                resetKeybordWords();
            }

            return;
        }

        if (button.getAttribute('value') === '19') {
            setTogglerAction({ type: 'isRuLayout', value: !togglersRedux.isRuLayout });

            return;
        }

        if (togglersRedux.isUpperWord && button.getAttribute('value') !== '16') {
            const upperWord = buttonValue.toUpperCase();
            getKeyboardWord({ mouseClickText: upperWord, text: keyboard.text });

            return;
        }

        getKeyboardWord({ mouseClickText: buttonValue, text: keyboard.text });
    };


    const handleonMouseDown = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        const button = event.target as HTMLButtonElement;

        if (!button.hasAttribute('style')) {
            button.setAttribute('style', 'background-color:#E15A32;');
        }
    };

    const handleonMouse = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        const button = event.target as HTMLButtonElement;

        if (button.hasAttribute('style')) {
            button.removeAttribute('style');
        }
    };

    return (
        <S.Container
            ref = { keybortRef }
            onMouseDown = { handleonMouseDown }
            onMouseOut = { handleonMouse }
            onMouseUp = { (event) => {
                handleonMouse(event);
                handleClick(event);
            }  }>
            <S.KeyboardWrapper>
                {getArray(arrayKeyboardWords!.arrayElemsNumber) }
            </S.KeyboardWrapper>
            <S.KeyboardWrapper isRuLayout = { togglersRedux.isRuLayout }>
                {
                    togglersRedux.isUpperWord
                        ? getArray(arrayKeyboardWords!.arrayElemsWord, true)
                        : getArray(arrayKeyboardWords!.arrayElemsWord)
                }
            </S.KeyboardWrapper>
            <S.KeyboardWrapperSmall isRuLayout = { togglersRedux.isRuLayout }>
                {
                    togglersRedux.isUpperWord
                        ? getArray(arrayKeyboardWords!.arrayWordGrid, true)
                        : getArray(arrayKeyboardWords!.arrayWordGrid)
                }
            </S.KeyboardWrapperSmall>
            <S.KeyboardWrapperSmall isRuLayout = { togglersRedux.isRuLayout }>
                {
                    togglersRedux.isUpperWord
                        ? getArray(arrayKeyboardWords!.arrayElemsWordTwo, true)
                        : getArray(arrayKeyboardWords!.arrayElemsWordTwo)
                }
            </S.KeyboardWrapperSmall>
            <S.KeyboardWrapperLast>
                {
                    togglersRedux.isUpperWord
                        ? getArray(arrayKeyboardWords!.arrayElemsWordThree, true)
                        : getArray(arrayKeyboardWords!.arrayElemsWordThree)
                }
            </S.KeyboardWrapperLast>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Keyboard />
    </ErrorBoundary>
);
