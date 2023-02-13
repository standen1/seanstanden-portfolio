import { createGlobalStyle} from "styled-components"
import { Poppins } from '@next/font/google';
export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        color: inherit;
        padding: 0;
        margin: 0;
    }

    body {
        scroll-behavior: smooth;
        font-family: 'Poppins', sans-serif;
        width: 100%;
        padding: 0;
        margin: 0;
    }

    ul {
        padding: 0;
        list-style-type: none;
    }

    a {
        text-decoration: none;
    }

    img {
        max-width: 100%;
    }

    h1 {
        font-weight: 500;
        font-size: 1.1em;
    }

    h2 {
        font-weight: 500;
        font-size: 2em;
    }

    p {
        font-weight: 400;
    }
`;
