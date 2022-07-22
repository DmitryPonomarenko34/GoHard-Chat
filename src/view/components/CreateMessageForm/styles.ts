// Core
import styled from 'styled-components';

// Style
import { LogoutBtn } from '../OwnerInfo/styles';

export const Container = styled.section`
    display: flex;
    align-items: flex-end;
    padding: 20px 15px 10px;
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    height: 65vh;
    overflow-y: auto;
    border-top: 1px solid #fff;
    background: #6c6c6c;
    overflow-y: hidden;
    height: auto;
    box-sizing: border-box;
`;

export const Form = styled.form`
    display: flex;
    align-items: center;
    width: 100%;
`;

export const Input = styled.input`
    font-family: 'Inter-Regular';
    padding: 5px 10px 5px 0;
    font-weight: 400;
    font-size: 18px;
    color: var(--bg);
    height: 100%;
    width: 70%;
    align-self: flex-end;
    background-color: transparent;
    border: none;
    outline: none;
    border-bottom: 3px solid  rgba(255, 255, 255, 0.9);
    margin-right: 10px;
`;

export const SubmitBtn = styled(LogoutBtn)`
    text-transform: uppercase;
    width: 30%;
    &:disabled {
        opacity: 0.5;
        pointer-events: none;
        cursor: default;
        border-color: transparent;
    }
`;

export const Btn = styled.button`
    display: block;
    background-color: transparent;
    padding: 0;
    outline: none;
    border: none;
    cursor: pointer;
    margin-right: 10px;
    img {
        max-width: 35px;
        width: 100%;
    }
`;
