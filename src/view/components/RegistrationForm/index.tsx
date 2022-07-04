// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

export const RegistrationForm: FC<PropTypes> = () => {
    return (
        <S.Container>
            <form action = '#'>
                <label htmlFor = ''>
                    <span>Enter your NinjaName:</span>
                    <input type = 'text' />
                </label>
                <button type = 'submit'>Submit</button>
            </form>
        </S.Container>
    );
};
