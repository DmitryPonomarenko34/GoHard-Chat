// Core
import React, { FC } from 'react';
import styled from 'styled-components';

// Assets
import shurikenSpinner from '../../assets/icons/shuriken-spinner.svg';

//Styles
export const SpinnerLoad = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    opacity: 0.9;

    @keyframes infinite-spinning {
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
    }

    img {
        width: 40%;
        height: 40%;
        animation: infinite-spinning 2s infinite;
    }
`;

export const SpinnerLoading: FC = () => {
    return (
        <SpinnerLoad>
            <img
                src = { shurikenSpinner }
            />
        </SpinnerLoad>
    );
};
