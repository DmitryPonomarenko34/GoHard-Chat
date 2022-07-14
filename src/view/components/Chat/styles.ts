// Core
import styled, { css } from 'styled-components';

// Types
type UserTypes = {
    messageAuthor: boolean | null;
}
export const Container = styled.section`
    padding: 10px 20px;
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    height: 65vh;
    overflow-y: auto;
    background: #6C6C6C;
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
   ${(props) => props.messageAuthor && css`
        margin-left: auto;
   `}
`;

export const UserMessage = styled.p`
    font-size: 17px;
    word-break: break-all;
    margin-bottom: 6px;
`;

