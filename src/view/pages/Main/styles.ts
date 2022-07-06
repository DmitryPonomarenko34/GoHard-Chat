// Core
import styled from 'styled-components';

export const Container = styled.section`
    position: relative;
    width: 100%;
`;

export const ScrollBox = styled.section`
    position: relative;
    width: 100%;
`;

export const Chat = styled.section`
    padding: 10px 20px;
    max-width: 500px;
    height: 40vh;
    overflow-y: auto;
    background: #6C6C6C;
`;

export const Message = styled.section`
    background: rgba(255, 255, 255, 0.43);
    width: fit-content;
    padding: 10px 6px;
    color: #0E0E0E;
    margin-bottom: 10px;
`;

export const UserName = styled.section`
    font-size: 14px;
    color: #fff;
    margin-bottom: 5px;
`;

export const UserMessage = styled.section`
    font-size: 16px;
`;

export const DispatchTime = styled.section`
    position: relative;
    width: 100%;
`;
