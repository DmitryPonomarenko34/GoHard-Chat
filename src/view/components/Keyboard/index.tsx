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
}

export const Keyboard: FC<PropTypes> = ({ keybortRef }) => {
    const { keyboard, deleteLastWord, getKeyboardWord, resetKeybordWords } = useKeyboard();
    const { togglersRedux, setTogglerAction } = useTogglersRedux();
    const { createMessage } = useMessages();
    const { user } = useUser();

    const EnLayout = {
        arrayElemsNumber: [
            { value: '1', keycode: 49 },
            { value: '2', keycode: 50 },
            { value: '3', keycode: 51 },
            { value: '4', keycode: 52 },
            { value: '5', keycode: 53 },
            { value: '6', keycode: 54 },
            { value: '7', keycode: 55 },
            { value: '8', keycode: 56 },
            { value: '9', keycode: 57 },
            { value: '0', keycode: 48 },
        ],

        arrayElemsWord: [
            { value: 'q', keycode: 81 },
            { value: 'w', keycode: 87 },
            { value: 'e', keycode: 69 },
            { value: 'r', keycode: 82 },
            { value: 't', keycode: 84 },
            { value: 'y', keycode: 89 },
            { value: 'u', keycode: 85 },
            { value: 'i', keycode: 73 },
            { value: 'o', keycode: 79 },
            { value: 'p', keycode: 80 },
        ],

        arrayWordGrid: [
            { value: 'a', keycode: 65 },
            { value: 's', keycode: 83 },
            { value: 'd', keycode: 68 },
            { value: 'f', keycode: 70 },
            { value: 'g', keycode: 71 },
            { value: 'h', keycode: 72 },
            { value: 'j', keycode: 74 },
            { value: 'k', keycode: 75 },
            { value: 'l', keycode: 76 },
        ],

        arrayElemsWordTwo: [
            { value: 'Shift', keycode: 16 },
            { value: 'z', keycode: 90 },
            { value: 'x', keycode: 88 },
            { value: 'c', keycode: 67 },
            { value: 'v', keycode: 86 },
            { value: 'b', keycode: 66 },
            { value: 'n', keycode: 78 },
            { value: 'm', keycode: 77 },
            { value: 'Backspace', keycode: 8 },
        ],

        arrayElemsWordThree: [
            { value: ',', keycode: 188 },
            { value: 'En', keycode: 19 },
            { value: 'Space', keycode: 32 },
            { value: '.', keycode: 190 },
            { value: 'Enter', keycode: 13 },
        ],
    };

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
            getKeyboardWord(' ');

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
            if (keyboard && keyboard.length !== 0) {
                createMessage({ username: user?.username, text: keyboard });
                resetKeybordWords();
            }

            return;
        }

        if (button.getAttribute('value') === '19') {
            setTogglerAction({ type: 'isRussianLayout', value: !togglersRedux.isRussianLayout });

            return;
        }

        if (togglersRedux.isUpperWord && button.getAttribute('value') !== '16') {
            const upperWord = buttonValue.toUpperCase();
            getKeyboardWord(upperWord);

            return;
        }

        getKeyboardWord(buttonValue);
    };

    const handleonMouseUp = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        const button = event.target as HTMLButtonElement;

        if (button) {
            button.setAttribute('style', 'background-color:#ccc;');
        }
    };

    const handleonMouseDown = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        const button = event.target as HTMLButtonElement;

        if (button) {
            button.setAttribute('style', 'background-color:#E15A32;');
        }
    };

    return (
        <S.Container
            ref = { keybortRef }
            onMouseDown = { (event) => void handleonMouseDown(event) }
            onMouseUp = { (event) => {
                handleonMouseUp(event);
                handleClick(event);
            }  }>
            <S.KeyboardWrapper>
                {getArray(EnLayout.arrayElemsNumber) }
            </S.KeyboardWrapper>
            <S.KeyboardWrapper>
                {
                    togglersRedux.isUpperWord
                        ? getArray(EnLayout.arrayElemsWord, true)
                        : getArray(EnLayout.arrayElemsWord)

                }
            </S.KeyboardWrapper>
            <S.KeyboardWrapperSmall >
                {
                    togglersRedux.isUpperWord
                        ? getArray(EnLayout.arrayWordGrid, true)
                        : getArray(EnLayout.arrayWordGrid)

                }
            </S.KeyboardWrapperSmall>
            <S.KeyboardWrapperSmall>
                {
                    togglersRedux.isUpperWord
                        ? getArray(EnLayout.arrayElemsWordTwo, true)
                        : getArray(EnLayout.arrayElemsWordTwo)

                }
            </S.KeyboardWrapperSmall>
            <S.KeyboardWrapperLast>
                {
                    togglersRedux.isUpperWord
                        ? getArray(EnLayout.arrayElemsWordThree, true)
                        : getArray(EnLayout.arrayElemsWordThree)

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
