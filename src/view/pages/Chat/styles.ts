// Core
import styled, { css } from 'styled-components';

// Type
type UserTypes = {
    messageAuthor: boolean | null;
}

//Asset
import shurikenBgIcon from '../../../assets/icons/shuriken.svg';
import userIcon from '../../../assets/icons/user-icon.svg';

export const Container = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: url(${shurikenBgIcon});
    background-repeat: repeat;
    background-size: 100% 100%;
    background-position: center;
`;

export const Title = styled.h1`
    font-family: 'Inter-Black';
    font-weight: 900;
    font-size: 32px;
    line-height: 34px;
    color: #55BBF8;
`;

export const AccentTitleWord = styled.span`
    color: #E15A32;
`;

export const FlexWrap = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 0;
`;

export const LogoutBtn = styled.button`
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

export const ChatBox = styled.div`
    padding: 10px 20px;
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    height: 65vh;
    overflow-y: auto;
    background: #6C6C6C;
`;

export const Chat = styled.div`
    overflow-y: auto;
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

export const MessageFlexColumn = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
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

export const UserMessage = styled.p`
    font-size: 17px;
    word-break: break-all;
    margin-bottom: 6px;
`;

export const DispatchTime = styled.time`
    font-size: 13px;
    margin-right: 5px;
    text-align: end;
    display: block;
`;

export const EditedText = styled(DispatchTime)`
    text-align: end;
    color: #fff;
`;

export const Form = styled.form`
    display: flex;
    align-items: center;
`;

export const Input = styled.input`
    font-family: 'Inter-Regular';
    padding: 5px 10px 5px 0;
    font-weight: 400;
    font-size: 18px;
    color: var(--bg);
    height: 100%;
    flex: 1 1 auto;
    align-self: flex-end;
    background-color: transparent;
    border: none;
    outline: none;
    border-bottom: 3px solid  rgba(255, 255, 255, 0.9);
    margin-right: 10px;
`;

export const SubmitBtn = styled(LogoutBtn)`
    text-transform: uppercase;
    width: 20%;
`;

export const ActionBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;

export const BtnsBox = styled(ActionBox)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;

export const BtnChangeMessage = styled(LogoutBtn)`
  padding: 10px 5px;
  margin-right: 5px;
  width: auto;
`;

export const BtnRemoveMessage = styled(BtnChangeMessage)`
    margin-right: 0;
`;

export const DecorImg = styled.img`
    max-width: 100%;
    height: 60%;
    object-fit: cover;
    z-index: 3;
    position: relative;
`;
