import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: var(--background);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    width: 90%;
    height: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
  h1 {
    font-size: 40px;
  }

  p {
    font-size: 16px;
    line-height: 24px;
  }

  img {
    opacity: 20%;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: flex-end;

    div {
      width: 40%;
      height: 100%;
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
