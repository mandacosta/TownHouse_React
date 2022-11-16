import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary);

  .container {
    width: 90%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }

  .container_logo {
    width: 30%;
    min-width: 290px;
    max-width: 300px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  img {
    width: 70px;
    border-radius: 50%;
  }

  h1 {
    color: var(--gray-3);
  }

  nav {
    display: none;

    @media (min-width: 1024px) {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: flex-end;
      gap: 24px;

      a {
        color: var(--gray-3);
      }

      a:hover {
        transition: 0.5s;
        color: var(--gray-0);
      }
    }
  }
`;
