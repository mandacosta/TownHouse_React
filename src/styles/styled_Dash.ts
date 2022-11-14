import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: var(--background);

  .outlet {
    width: 100%;
    /* height: calc(100vh - 150px);
    height: 100%; */
    height: fit-content;
    max-width: 1000px;
    margin: 80px auto 0 auto;
    background-color: #fff;
  }

  @media (min-width: 1024px) {
    .outlet {
      height: calc(100vh - 80px);
    }
  }
`;
