// Core
import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    padding: 10px 0;
`;

export const Title = styled.h1`
    display: flex;
    align-items: center;
    font-family: 'Inter-Black';
    font-weight: 900;
    font-size: 32px;
    line-height: 34px;
    color: #55BBF8;
    word-break: break-word;
    margin-right: 15px;
    img {
        max-width: 17%;
    }
    @media (max-width: 510px) {
        font-size: 20px;
    }
`;

export const AccentTitleWord = styled.span`
    color: #E15A32;
    margin-left: 10px;
`;

export const FlexWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const LogoutBtn = styled.button`
    display: block;
    font-family: 'Inter-Black';
    font-weight: 900;
    width: 30%;
    padding: 15px 10px;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: inset 0px -5px 0px rgba(0, 0, 0, 0.3);
    border-radius: 6px; 
    color: #000;
    transition: ease-in-out 0.1s background-color, ease-in-out 0.2s color;
    cursor: pointer;

    &:hover {
        background-color: #E15A32;
        color: var(--text);
        transition: ease-in-out 0.1s background-color, ease-in-out 0.2s color;
    }
`;
