// Core
import React, { FC, useState } from 'react';
import { useMutation } from '@apollo/client';

// Schema
import { REGISTER_USER } from '../../../bus/user/schema';

// Components
import { ErrorBoundary, RegistrationUserInfo, RegistrationForm } from '../../components';

// Styles
import * as S from './styles';

// Constant
import { USER_ID } from '../../../init';

// Types
import { UserRegisterState } from '../../../bus/user/types';
import { useTogglersRedux } from '../../../bus/client/togglers';

const Registration: FC = () => {
    const randomNumbers = () => Math.floor(1000 + (Math.random() * 9000));
    const [ username, setUsername ] = useState(`NINJA:${randomNumbers()}`);
    const { setTogglerAction } = useTogglersRedux();
    const [
        registerUser, {
            loading: isRegisterLoad,
        },
    ] = useMutation<UserRegisterState>(REGISTER_USER);

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        return setUsername(event.target.value);
    };

    const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>, username: string) => {
        event.preventDefault();

        registerUser({
            variables: { username: username },
            onCompleted(data) {
                if (data) {
                    localStorage.setItem(USER_ID, data.registrUser.id);
                    setTogglerAction({ type: 'isLoggedIn', value: true });
                }
            },
            onError() {
                localStorage.removeItem(USER_ID);
            },
        });
    };

    return (
        <S.Container>
            <RegistrationUserInfo />
            <RegistrationForm
                handleChangeInput = { handleChangeInput }
                handleSubmitForm = { handleSubmitForm }
                isLoading = { isRegisterLoad }
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
