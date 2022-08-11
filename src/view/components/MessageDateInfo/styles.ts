// Core
import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
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
