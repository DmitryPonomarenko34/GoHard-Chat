// Core
import React, { FC } from 'react';

// Bus
import { useKeyboard } from '../../../bus/client/keyboard';

// Component
import { ErrorBoundary } from '../ErrorBoundary';

// Style
import * as S from './styles';

export const Keyboard: FC = () => {
    const { keyboard, getKeyboardWord } = useKeyboard();

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
                        id = { elem }
                        key = { elem }
                        value = { elem }>
                        {elem}
                    </S.KeyboardElem>
                );
            }

            return (
                <S.KeyboardElem
                    id = { elem }
                    key = { elem }
                    value = { elem }>
                    {elem}
                </S.KeyboardElem>
            );
        });

        return newArray;
    };

    const handlerClick = (event: React.MouseEvent<HTMLElement>) => {
        const button = event.target as HTMLButtonElement;
        getKeyboardWord(button.value);
    };

    console.log(keyboard);

    return (
        <S.Container>
            <S.KeyboardWrapper onClick = { (event) => void handlerClick(event) }>
                {getArray(arrayElemsNumber)}
                {getArray(arrayElemsWord)}
                {getArray(arrayWordGrid, true)}
                <S.KeyboardElem smallEnd>l</S.KeyboardElem>
                {getArray(arrayElemsWordTwo)}
                <S.KeyboardElem small>b</S.KeyboardElem>
                <S.KeyboardElem >n</S.KeyboardElem>
                <S.KeyboardElem small>m</S.KeyboardElem>
                <S.KeyboardElem backspace>Backspace</S.KeyboardElem>
                {getArray(arrayElemsWordThree)}
                <S.KeyboardElem long >Space</S.KeyboardElem>
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
