// Core
import React, { FC } from 'react';
import styled from 'styled-components';

// Assets
import shurikenSpinner from '../../assets/icons/shuriken-spinner.svg';

//Styles
export const Spinner = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--bg);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.8;
    transition: ease 0.3s background-color;

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

export const ShurikenSpinner: FC = () => {
    return (
        <Spinner>
            <img
                src = { shurikenSpinner }
            />
        </Spinner>
    );
};
