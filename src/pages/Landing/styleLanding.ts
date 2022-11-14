import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: var(--background);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .container {
    width: 90%;
    height: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    animation: top-bottom 1500ms;

    @keyframes top-bottom {
      from {
        transform: translateY(-100%);
      }
      to {
        transform: translateY(0%);
      }
    }
  }
  h1 {
    font-size: 40px;
  }

  p {
    font-size: 16px;
    line-height: 24px;
  }

  .btn-container {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    gap: 10px;

    .btn {
      width: 45%;
      max-width: 200px;
    }
  }

  img {
    opacity: 20%;
    animation: bottom-top 1500ms;

    @keyframes bottom-top {
      from {
        transform: translateY(100%);
      }
      to {
        transform: translateY(0%);
      }
    }
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;

    .container {
      width: 40%;
      height: 100%;
      margin-left: 10%;
    }

    img {
      width: 55%;
      height: fit-content;
      max-width: 700px;
      margin-right: 50px;
    }

    h1 {
      font-size: 48px;
    }

    p {
      font-size: 28px;
      line-height: 30px;
    }
  }
`;
