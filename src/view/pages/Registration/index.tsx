// Core
import React, { FC, useState } from 'react';

// Bus
import { useUser } from '../../../bus/user';

// Components
import { ErrorBoundary, RegistrationUserInfo, RegistrationForm } from '../../components';

// Styles
import * as S from './styles';

// Types
import { FormChangeEvent, FormSubmitEvent } from '../../components';

const Registration: FC = () => {
    const { registerUser } = useUser();

    const random = () => Math.floor(1000 + (Math.random() * 9000));
    const [ username, setUsername ] = useState(`NINJA:${random()}`);

    const handleChangeInput = (event: FormChangeEvent) => {
        return setUsername(event.target.value);
    };

    const handleSubmitForm = (event: FormSubmitEvent, username: string) => {
        event.preventDefault();

        registerUser(username);
    };

    return (
        <S.Container>
            <RegistrationUserInfo />
            <RegistrationForm
                inputValue = { username }
                onChangeInput = { handleChangeInput }
                onSubmitForm = { (event) => handleSubmitForm(event, username) }
            />
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Registration />
    </ErrorBoundary>
);
