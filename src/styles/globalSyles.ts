import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    
    --color-primary: #86C7BA;
    --color-secondary: #E4C36D;

    --background: #f3efdf;

    --black: #121214;
    --black-opacity: rgba(0, 0, 0, 0.2);
    --gray-0: #212529;
    --gray-1: #868E96;
    --gray-2: #DEE2E6;
    --gray-3: #F8F9FA;
    --gray-4: #d9d9d9
    
    --white: #FFFFFF;

    --sucess: #82C91E;
    --error: #F03E3E;
    --warning: #FCC419;


    --font-primary: 'Roboto', sans-serif;
    --font-secundary: 'Inter', sans-serif;
    }

    * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    font-family: var(--font-primary);
    text-decoration: none;
    list-style: none;
    }

    .mainTitle{
        font-weight: 700;
        color: var(--black);
    }

    .subTitle{
        font-size: 300;
        color: var(--gray-1);
    }

`;
