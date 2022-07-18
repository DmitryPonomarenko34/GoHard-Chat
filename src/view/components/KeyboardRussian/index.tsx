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

export const KeyboardRussian: FC<PropTypes> = ({ keybortRef }) => {
    const { keyboard, deleteLastWord, getKeyboardWord, resetKeybordWords } = useKeyboard();
    const { togglersRedux, setTogglerAction } = useTogglersRedux();
    const { createMessage } = useMessages();
    const { user } = useUser();

    const RuLayout = {
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
            { value: 'й', keycode: 81 },
            { value: 'ц', keycode: 87 },
            { value: 'у', keycode: 69 },
            { value: 'к', keycode: 82 },
            { value: 'е', keycode: 84 },
            { value: 'н', keycode: 89 },
            { value: 'г', keycode: 85 },
            { value: 'ш', keycode: 73 },
            { value: 'щ', keycode: 79 },
            { value: 'з', keycode: 80 },
            { value: 'х', keycode: 219 },
        ],

        arrayWordGrid: [
            { value: 'ф', keycode: 65 },
            { value: 'ы', keycode: 83 },
            { value: 'в', keycode: 68 },
            { value: 'а', keycode: 70 },
            { value: 'п', keycode: 71 },
            { value: 'р', keycode: 72 },
            { value: 'о', keycode: 74 },
            { value: 'л', keycode: 75 },
            { value: 'д', keycode: 76 },
            { value: 'ж', keycode: 186 },
            { value: 'э', keycode: 222 },
        ],

        arrayElemsWordTwo: [
            { value: 'Shift', keycode: 16 },
            { value: 'я', keycode: 90 },
            { value: 'ч', keycode: 88 },
            { value: 'с', keycode: 67 },
            { value: 'м', keycode: 86 },
            { value: 'и', keycode: 66 },
            { value: 'т', keycode: 78 },
            { value: 'ь', keycode: 77 },
            { value: 'б', keycode: 188 },
            { value: 'ю', keycode: 190 },
            { value: 'Backspace', keycode: 8 },
        ],

        arrayElemsWordThree: [
            { value: ',', keycode: 188 },
            { value: 'Ru', keycode: 19 },
            { value: 'Пробел', keycode: 32 },
            { value: '.', keycode: 190 },
            { value: 'Enter', keycode: 13 },
        ],
    };

    const getArray = (array: Array<{ value: string; keycode: number }>, tuUpperCase?: boolean) => {
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
            if (keyboard?.length !== 0) {
                createMessage({ username: user?.username, text: keyboard?.join('') });
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
            } }>
            <S.KeyboardWrapper>
                {getArray(RuLayout.arrayElemsNumber)}
            </S.KeyboardWrapper>
            <S.KeyboardWrapperSmall>
                {
                    togglersRedux.isUpperWord
                        ? getArray(RuLayout.arrayElemsWord, true)
                        : getArray(RuLayout.arrayElemsWord)

                }
            </S.KeyboardWrapperSmall>
            <S.KeyboardWrapperSmall >
                {
                    togglersRedux.isUpperWord
                        ? getArray(RuLayout.arrayWordGrid, true)
                        : getArray(RuLayout.arrayWordGrid)

                }
            </S.KeyboardWrapperSmall>
            <S.KeyboardWrapperSmall>
                {
                    togglersRedux.isUpperWord
                        ? getArray(RuLayout.arrayElemsWordTwo, true)
                        : getArray(RuLayout.arrayElemsWordTwo)

                }
            </S.KeyboardWrapperSmall>
            <S.KeyboardWrapperLast>
                {
                    togglersRedux.isUpperWord
                        ? getArray(RuLayout.arrayElemsWordThree)
                        : getArray(RuLayout.arrayElemsWordThree)

                }
            </S.KeyboardWrapperLast>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <KeyboardRussian />
    </ErrorBoundary>
);
