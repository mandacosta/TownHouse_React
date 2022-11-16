import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    
    --color-primary: #5e8e85;
    --color-secondary: #917d49;

    --background: #f3efdf;

    --black: #121214;
    --black-opacity: rgba(0, 0, 0, 0.2);
    --gray-0: #212529;
    --gray-1: #868E96;
    --gray-2: #DEE2E6;
    --gray-3: #F8F9FA;
    --gray-4: #d9d9d9;
    
    --white: #FFFFFF;

    --aviso: #456b10;
    --aviso-opacity:rgba(130, 201, 30, 0.3);
    --reclamacao: #a52727;
    --reclamacao-opacity: rgba(240, 62, 62, 0.3);
    --solicitacao: #81650d;
    --solicitacao-opacity: rgba(252, 196, 25, 0.3);


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
        font-weight: 300;
        color: var(--gray-1);
    }

    .subTitle.black{
        color: var(--black);
    }



`;
