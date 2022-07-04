// Core
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

// Fonts
import InterRegularWoff2 from '../fonts/Inter-Regular.woff2';
import InterBlackWoff2 from '../fonts/Inter-Black.woff2';

export const GlobalStyles = createGlobalStyle`
    :root {
        --bg: #0E0E0E;
        --text: #fff;
        --accent: #E15A32;
    }

    @font-face {
        font-family: 'Inter-Regular';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(${InterRegularWoff2}) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U   +2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    @font-face {
        font-family: 'Inter-Black';
        font-style: normal;
        font-weight: 900;
        font-display: swap;
        src: url(${InterBlackWoff2}) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U   +2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    ${reset}
    
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }

    html,
    body {
        font-family: 'Inter-Regular';
        font-weight: 400;
        font-size: 18px;
        background-color: var(--bg);
        color: var(--text);
    }
`;
