// Core
import React, { FC } from 'react';

// Bus
import { useUser } from '../../../bus/user';

// Components
import { ErrorBoundary } from '../../components';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const Registration: FC<PropTypes> = () => {
    const { user } = useUser();
    console.log('🚀 ~ file: index.tsx ~ line 20 ~ user', user);

    return (
        <S.Container>
            <S.Form action = '#'>
                <S.Label htmlFor = 'text'>
                    <S.LabelText>Enter your NinjaName:</S.LabelText>
                    <S.Input
                        name = 'text'
                        type = 'text'
                    />
                </S.Label>
                <S.SubmitBtn type = 'submit'>Submit</S.SubmitBtn>
            </S.Form>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Registration />
    </ErrorBoundary>
);
