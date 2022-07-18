// Core
import styled from 'styled-components';

// Styles
import { LogoutBtn } from '../../components/OwnerInfo/styles';

export const Container = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 10px;
    max-width: 500px;
    margin: 0 auto;
    box-sizing: border-box;
`;

export const Btn = styled(LogoutBtn)`
    display: block;
    margin: 20px 0 10px;
    width: 25%;
`;

