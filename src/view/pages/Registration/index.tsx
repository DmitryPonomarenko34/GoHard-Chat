// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary, RegistrationUserInfo, RegistrationForm } from '../../components';

// Styles
import * as S from './styles';

const Registration: FC = () => {
    return (
        <S.Container>
            <RegistrationUserInfo />
            <RegistrationForm/>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Registration />
    </ErrorBoundary>
);
