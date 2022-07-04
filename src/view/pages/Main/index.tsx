// Core
import React, { FC } from 'react';
// import { useNavigate } from 'react-router-dom';

// Components
import { ErrorBoundary } from '../../components';

// Styles
import { Container } from './styles';

const Main: FC = () => {
    // const navigate = useNavigate();

    return (
        <Container>
            <p>Page: Main</p>
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
