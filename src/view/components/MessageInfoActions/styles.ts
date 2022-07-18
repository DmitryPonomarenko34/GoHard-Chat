// Core
import styled, { css } from 'styled-components';

//Components
import { LogoutBtn } from '../OwnerInfo/styles';
import { Form, Input } from '../EditMessageForm/styles';

// Asset
import userIcon from '../../../assets/icons/user-icon.svg';

// Types
type UserTypes = {
    messageAuthor: boolean | null;
}

export const Container = styled.section`
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

export const BtnsBox = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
`;

export const BtnChangeMessage = styled(LogoutBtn)`
  padding: 10px 5px;
  margin-right: 5px;
  min-width: 70px;
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
   min-width: 70px;
   width: auto;
   margin: 0;
   margin-right: 10px;
`;
