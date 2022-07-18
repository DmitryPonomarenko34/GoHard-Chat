// Core
import styled from 'styled-components';

export const Container = styled.section`
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const DecorIcon = styled.img`
    @media (max-width: 510px) {
       max-width: 750%;
    }
`;

export const Title = styled.h1`
    font-family: 'Inter-Black';
    font-weight: 900;
    margin-bottom: 50px;
    text-align: center;
    font-size: 64px;
    line-height: 67px;

     @media (max-width: 510px) {
       font-size: 44px;
       line-height: 47px;
    }
`;

export const TitleAccentWord = styled.span`
    display: block;
    color: #55BBF8;
`;
