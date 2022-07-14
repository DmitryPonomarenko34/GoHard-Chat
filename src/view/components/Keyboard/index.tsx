// Core
import React, { FC } from 'react';

// Bus
import { useKeyboard } from '../../../bus/client/keyboard';

// Component
import { ErrorBoundary } from '../ErrorBoundary';

// Style
import * as S from './styles';

export const Keyboard: FC = () => {
    const { getKeyboardWord } = useKeyboard();

    const arrayElemsNumber: Array<string> = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ];
    const arrayElemsWord: Array<string> = [ 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p' ];
    const arrayElemsWordTwo: Array<string> = [ 'Shift', 'z', 'x', 'c', 'v' ];
    const arrayElemsWordThree: Array<string> = [ ',', 'En' ];
    const arrayElemsWordFour: Array<string> = [ '.', 'Enter' ];
    const arrayWordGrid: Array<string> = [ 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k' ];

    const getArray = (array: Array<string>, gridElems?: boolean) => {
        const newArray = array.map((elem: string) => {
            if (gridElems === true) {
                return (
                    <S.KeyboardElem
                        small
                        key = { elem }
                        value = { elem }>
                        {elem}
                    </S.KeyboardElem>
                );
            }

            return (
                <S.KeyboardElem
                    key = { elem }
                    value = { elem }>
                    {elem}
                </S.KeyboardElem>
            );
        });

        return newArray;
    };


    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        const button = event.target as HTMLButtonElement;
        const buttonValue = button.value;

        getKeyboardWord(buttonValue);
    };

    return (
        <S.Container>
            <S.KeyboardWrapper onClick = { (event) => void handleClick(event) }>
                {getArray(arrayElemsNumber)}
                {getArray(arrayElemsWord)}
                {getArray(arrayWordGrid, true)}
                <S.KeyboardElem
                    smallEnd
                    value = 'l'>l
                </S.KeyboardElem>
                {getArray(arrayElemsWordTwo)}
                <S.KeyboardElem
                    small
                    value = 'b'>b
                </S.KeyboardElem>
                <S.KeyboardElem value = '' >n</S.KeyboardElem>
                <S.KeyboardElem
                    small
                    value = 'm'>m
                </S.KeyboardElem>
                <S.KeyboardElem
                    backspace
                    value = 'Backspace'>Backspace
                </S.KeyboardElem>
                {getArray(arrayElemsWordThree)}
                <S.KeyboardElem
                    long
                    value = 'Space' >Space
                </S.KeyboardElem>
                {getArray(arrayElemsWordFour)}
            </S.KeyboardWrapper>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Keyboard />
    </ErrorBoundary>
);
