import { createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

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
