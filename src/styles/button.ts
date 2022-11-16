import { createGlobalStyle } from "styled-components";

export const ButtonStyle = createGlobalStyle`

    .btn{
        cursor: pointer;
        width: 30%;
        height: 40px;
        border-radius: 8px;
        color: #fff;
        text-align: center;
        opacity: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        border: none;
    }

    .btn.primary{
        background-color: var(--color-primary);
        
    }

    .btn.secondary{
        background-color: var(--color-secondary);
    }

    .btn.cancel{
        background-color: var(--gray-1);
    }

    .btn:hover{
        opacity: 100%;
    }

    .btn.submit{
        opacity:100%;
    }

    .btn.submit:disabled{
        opacity:50%;
    }



`;
