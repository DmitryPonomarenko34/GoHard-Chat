// Core
import styled from 'styled-components';

//Components
import { LogoutBtn } from '../OwnerInfo/styles';
import { Form, Input } from '../EditMessageForm/styles';

export const Container = styled.section`
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
