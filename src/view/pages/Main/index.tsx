// Core
import React, { FC } from 'react';

// Bus
import { useUser } from '../../../bus/user';
import { useMessage } from '../../../bus/messages';

// Components
import { ErrorBoundary } from '../../components';

// Styles
import * as S from './styles';

// Asset
import ninjaImg from '../../../assets/images/ninjaImg.jpg';

const Main: FC = () => {
    const { user, logoutUser } = useUser();
    const { messages } = useMessage();


    return (
        <S.Container>
            <S.FlexWrap>
                <S.Title>
                    Welcome to Chat:
                    {
                        user
                            && (
                                <S.AccentTitleWord>
                                    {user.username}
                                </S.AccentTitleWord>
                            )
                    }
                </S.Title>
                <S.LogoutBtn onClick = { () => void logoutUser() }>
                    Logout
                </S.LogoutBtn>
            </S.FlexWrap>
            <S.ChatBox>
                <S.Chat>
                    {
                        messages
                        && messages
                            .map(({ _id, username, text, createdAt, updatedAt }) => {
                                const createdDate = new Date(createdAt).getTime();
                                const updatedDate = new Date(updatedAt).getTime();

                                const messageCreatedTime = new Date(createdAt).toLocaleTimeString();

                                return (
                                    <S.Message key = { _id }>
                                        <S.UserName>{username}</S.UserName>
                                        <S.UserMessage>{text}</S.UserMessage>
                                        <S.MessageFlexColumn>
                                            <S.DispatchTime dateTime = { createdAt }>
                                                {messageCreatedTime}
                                            </S.DispatchTime>
                                            {
                                                createdDate !== updatedDate ? <S.EditedText>edited</S.EditedText> : null
                                            }
                                        </S.MessageFlexColumn>
                                    </S.Message>
                                );
                            })
                            .reverse()
                    }
                    <S.Form onSubmit = { (event) => {
                        event.preventDefault();
                       // createMessage(); 
                    }  }>
                        <S.Input type = 'text' />
                        <S.SubmitBtn type = 'submit'>send</S.SubmitBtn>
                    </S.Form>
                </S.Chat>
            </S.ChatBox>
            <S.DecorImg src = { ninjaImg } />
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
