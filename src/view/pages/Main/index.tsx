// Core
import React, { FC } from 'react';

// Bus
import { useUser } from '../../../bus/user';

// Components
import { ErrorBoundary } from '../../components';

// Styles
import * as S from './styles';

const Main: FC = () => {
    const { user, logoutUser } = useUser();

    return (
        <S.Container>
            <p>Welcome to Ninja-Chat:
                {
                    user && user.username
                }
            </p>
            <button onClick = { () => {
                logoutUser();
            } }>
                Logout
            </button>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
