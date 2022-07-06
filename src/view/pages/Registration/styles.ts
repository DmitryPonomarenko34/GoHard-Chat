// Core
import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const DecorIcon = styled.img`
`;

export const Title = styled.h1`
    font-family: 'Inter-Black';
    font-weight: 900;
    margin-bottom: 50px;
    text-align: center;
    font-size: 64px;
    line-height: 67px;
`;

export const TitleAccentWord = styled.span`
    display: block;
    color: #55BBF8;
`;

export const Form = styled.form`
    max-width: 395px;
    width: 100%;
    text-align: center;
`;

export const Label = styled.label`
    display: block;
`;

export const LabelText = styled.span`
    display: block;
    margin-bottom: 15px;
    opacity: 0.43;
`;

export const Input = styled.input`
    font-family: 'Inter-Regular';
    font-weight: 400;
    margin-bottom: 15px;
    padding: 15px 20px;
    width: 100%;
    border: none;
    border-radius: 5px;
    outline: none;
    font-size: 15px;
    transition: ease-in-out 0.2s box-shadow;

    &::placeholder {
        font-family: 'Inter-Regular';
        font-weight: 400;
        font-size: 15px;
    }

    &:hover,
    &:focus {
        box-shadow: inset 3px 5px 4px rgba(0, 0, 0, 0.3);
        transition: ease-in-out 0.2s box-shadow;
    }
`;

export const SubmitBtn = styled.button`
    display: block;
    font-family: 'Inter-Black';
    font-weight: 900;
    width: 50%;
    padding: 15px 10px;
    margin: 0 auto;
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
