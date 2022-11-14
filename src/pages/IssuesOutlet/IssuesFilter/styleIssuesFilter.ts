import styled from "styled-components";

export const StyledIssuesFilter = styled.div`
  height: fit-content;
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 50%;
    max-width: 200px;
    height: 56px;
    margin-top: 20px;
    border: none;
    transition: 0.5s;
    cursor: pointer;
    font-size: 20px;
    color: var(--gray-3);
  }

  .subtitle {
    background-color: var(--gray-4);
  }

  .subtitle.active {
    background-color: var(--color-primary);
  }

  @media (min-width: 768px) {
    button {
      height: 56px;
    }
  }
`;
