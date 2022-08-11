// Core
import React, { FC, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useLazyQuery } from '@apollo/client';

// Bus
import { useTogglersRedux } from '../bus/client/togglers';

// Schema
import { REFRESH_AUTH } from '../bus/user/schema';

// Containers
import { Routes } from './routes';

// Hooks
import { useLocalStorage } from '../tools/hooks';

// Assets
import { GlobalStyles, defaultTheme } from '../assets';

// Constant
import { USER_ID } from '../init';

// Styles
export const AppContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
`;

export const App: FC = () => {
    const [ isDefaultTheme ] = useLocalStorage('isDefaultTheme', true);
    const [ refreshAuth ] = useLazyQuery(REFRESH_AUTH);
    const userId = localStorage.getItem(USER_ID);
    const { setTogglerAction } = useTogglersRedux();

    useEffect(() => {
        if (userId) {
            refreshAuth(
                {
                    variables: { refreshAuthId: userId },
                    onCompleted() {
                        setTogglerAction({ type: 'isLoggedIn', value: true });
                    },
                },
            );
        }
    }, []);

    return (
        <ThemeProvider theme = { isDefaultTheme ? defaultTheme : defaultTheme } >
            <GlobalStyles />
            <AppContainer>
                <Routes />
            </AppContainer>
        </ThemeProvider>
    );
};
