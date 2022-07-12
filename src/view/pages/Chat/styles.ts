// Core
import styled, { css } from 'styled-components';

// Style
import { LogoutBtn } from '../../components/UserInfo/styles';
import { Form, Input } from '../Registration/styles';

// Asset
import userIcon from '../../../assets/icons/user-icon.svg';

// Type
type UserTypes = {
    messageAuthor: boolean | null;
}

export const Container = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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

export const FormBox = styled(ChatBox)`
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

export const MessageFlexColumn = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
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

export const ActionBox = styled.div`
    display: block;
`;

export const BtnsBox = styled(ActionBox)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
`;

export const BtnChangeMessage = styled(LogoutBtn)`
  padding: 10px 5px;
  margin-right: 5px;
  width: auto;
  margin: 0;
  &:first-child {
    margin-right: 10px;
  }
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

export const ChangeMessageForm = styled(Form)`
   margin-bottom: 20px;
`;

export const ChangeMessageInput = styled(Input)`
   flex: 0 1 50%;
   width: 50%;
   font-size: 15px;

   &::placeholder {
        font-size: 15px;
   }
`;

export const ChangeMessageBtn = styled(LogoutBtn)`
   padding: 10px 5px;
`;

export const CloseBtn = styled(ChangeMessageBtn)`
   padding: 10px 5px;
   width: auto;
   margin: 0;
   margin-right: 10px;
`;
