// Core
import React, { FC, useState } from 'react';

// Bus
import { useUser } from '../../../bus/user';

// Components
import { ErrorBoundary, RegistrationUserInfo, RegistrationForm } from '../../components';

// Styles
import * as S from './styles';

const Registration: FC = () => {
    const { registerUser } = useUser();

    const randomNumbers = () => Math.floor(1000 + (Math.random() * 9000));
    const [ username, setUsername ] = useState(`NINJA:${randomNumbers()}`);

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        return setUsername(event.target.value);
    };

    const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>, username: string) => {
        event.preventDefault();

        registerUser(username);
    };

    return (
        <S.Container>
            <RegistrationUserInfo />
            <RegistrationForm
                handleChangeInput = { handleChangeInput }
                handleSubmitForm = { handleSubmitForm }
                username = { username }
            />
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Registration />
    </ErrorBoundary>
);
