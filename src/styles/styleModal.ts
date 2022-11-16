import styled from "styled-components";

export const StyledModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: var(--black-opacity);
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    width: 90%;
    max-width: 385px;
    height: fit-content;
    padding: 20px;
    background-color: var(--white);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  p {
    text-align: center;
    font-size: 20px;
  }

  .btn_container {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .btn {
    width: 48%;
    font-size: 18px;
  }
`;
