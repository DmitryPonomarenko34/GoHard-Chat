// Core
import styled, { css } from 'styled-components';

// Asset
import userIcon from '../../../assets/icons/user-icon.svg';

// Types
type UserTypes = {
    messageAuthor: boolean | null;
}

export const Container = styled.section`
    padding: 10px 20px;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    box-sizing: border-box;
    background: #6C6C6C;
    display: flex;
    flex-direction: column-reverse;
`;

export const FormBox = styled(Container)`
    overflow-y: hidden;
    height: auto;
`;

export const Chat = styled.div`
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

export const UserName = styled.span<UserTypes>`
    display: block;
    font-size: 14px;
    color: #fff;
    margin-bottom: 5px;

    ${(props) => props.messageAuthor && css`
        padding-left: 25px;
        position: relative;
        color: #E15A32;
        &::before{
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            background-image: url(${userIcon});
            width: 20px;
            height: 15px;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: top center;
        }
   `}
`;
