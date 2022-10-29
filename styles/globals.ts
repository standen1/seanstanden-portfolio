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
`;
