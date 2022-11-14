import styled from "styled-components";
import imageMobile from "../img/bg-login_register-mobile.png";
import imageDesktop from "../img/bg-login_register-desktop.png";

export const StyledPage = styled.main`
  width: 100vw;
  height: 100vh;
  background-image: url(${imageMobile});
  background-origin: border-box;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    width: 90%;
    max-width: 545px;
    text-align: center;
    margin-top: 30px;
  }

  .motion {
    width: 100vw;
    height: 100vh;
  }

  @media (min-width: 768px) {
    background-image: url(${imageDesktop});
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      margin: 0;
    }
  }
`;

export const StyledForm = styled.form`
  width: 90%;
  max-width: 545px;
  height: fit-content;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  animation: slide-in 1500ms;

  .MuiFormControl-root {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  p {
    width: 100%;
    text-align: end;
    font-size: 12px;
  }

  .btn {
    width: 100%;
  }

  .container_link {
    text-align: center;
    margin-top: 20px;
  }
  .subTitle {
    font-weight: 500;
    font-size: 20px;
    color: var(--gray-0);
  }

  @keyframes slide-in {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0%);
    }
  }
`;
