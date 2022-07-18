// Core
import styled from 'styled-components';

// Style
import { LogoutBtn } from '../OwnerInfo/styles';

export const Container = styled.section`
`;

export const Form = styled.form`
    display: flex;
    align-items: center;
`;

export const Input = styled.input`
    font-family: 'Inter-Regular';
    padding: 5px 10px 5px 0;
    font-weight: 400;
    font-size: 17px;
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
    padding: 9px 10px;
    &:disabled {
        opacity: 0.5;
        pointer-events: none;
        cursor: default;
        border-color: transparent;
    }
`;
