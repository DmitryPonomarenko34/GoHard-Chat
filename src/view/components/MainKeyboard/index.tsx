// Core
import React, { FC } from 'react';


// Bus
import { useTogglersRedux } from '../../../bus/client/togglers';

// Styles
import * as S from './styles';

// Components
import { Keyboard, KeyboardRussian } from '../';

// Types
type PropTypes = {
    keyboardRef: React.MutableRefObject<HTMLDivElement | null>
}

export const MainKeyboard: FC<PropTypes> = ({ keyboardRef }) => {
    const { togglersRedux } = useTogglersRedux();

    return (
        <S.Container>
            {
                togglersRedux.isRussianLayout
                    ? (
                        <KeyboardRussian keybortRef = { keyboardRef } />
                    ) : (
                        <Keyboard keybortRef = { keyboardRef } />
                    )
            }
        </S.Container>
    );
};
