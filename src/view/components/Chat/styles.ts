// Core
import styled, { css } from 'styled-components';

// Types
type UserTypes = {
    messageAuthor: boolean | null;
}

export const Container = styled.section`
    padding: 10px 20px;
    width: 100%;
    height: 65vh;
    max-height: 520px;
    overflow-y: auto;
    box-sizing: border-box;
    background: #6C6C6C;


    @media (max-height: 900px) {
        max-height: 320px;
    }

    @media (max-height: 700px) {
        max-height: 275px;
    }

    @media (max-height: 600px) {
        max-height: 215px;
        min-height: 200px;
    }
`;

export const FormBox = styled(Container)`
    overflow-y: hidden;
    height: auto;
`;

export const Chat = styled.div`
    overflow-y: auto;
    display: flex;
    flex-direction: column-reverse;
`;

export const Message = styled.div<UserTypes>`
    background: rgba(255, 255, 255, 0.43);
    width: 50%;
    padding: 10px 6px;
    color: #0E0E0E;
    margin-bottom: 10px;
    box-sizing: border-box;

    @media (max-width: 510px) {
        width: 100%;
    }

   ${(props) => props.messageAuthor && css`
        margin-left: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 145px;
   `}
`;

export const UserMessage = styled.p`
    font-size: 17px;
    word-break: break-all;
    margin-bottom: 9px;
    margin-top: auto;
`;

