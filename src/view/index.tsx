// Core
import React, { FC, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';

// Bus
import { useUser } from '../bus/user';

// Containers
import { Routes } from './routes';

// Hooks
import { useLocalStorage } from '../tools/hooks';

// Assets
import { GlobalStyles, defaultTheme } from '../assets';

// Styles
export const AppContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
`;

export const App: FC = () => {
    const [ isDefaultTheme ] = useLocalStorage('isDefaultTheme', true);
    const { refreshUser } = useUser();

    useEffect(() => {
        refreshUser();
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
