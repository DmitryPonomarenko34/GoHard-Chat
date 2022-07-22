// Core
import React, { FC, useState } from 'react';

// Bus
import { useUser } from '../../../bus/user';
import { useTogglersRedux } from '../../../bus/client/togglers';

// Components
import { ErrorBoundary, RegistrationUserInfo, RegistrationForm } from '../../components';

// Styles
import * as S from './styles';

const Registration: FC = () => {
    const { registerUser } = useUser();
    const { togglersRedux } = useTogglersRedux();
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
                isLoading = { togglersRedux.isLoading }
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
