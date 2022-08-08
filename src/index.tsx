// Core
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

// Init
import {
    store as reduxStore,
} from './init';

// View
import { App } from './view';

const client = new ApolloClient({
    uri:   'https://nestapollochat.herokuapp.com/graphql',
    cache: new InMemoryCache(),
});

const Root = () => {
    return (
        <ApolloProvider client = { client }>
            <ReduxProvider store = { reduxStore }>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ReduxProvider>
        </ApolloProvider>
    );
};

const container = document.getElementById('app');

if (container) {
    const root = createRoot(container);
    root.render(<Root />);
}

