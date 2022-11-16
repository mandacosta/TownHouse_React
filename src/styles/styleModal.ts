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

  .modal_container {
    width: 90%;
    max-width: 400px;
    height: fit-content;
    padding: 15px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 10px;
    border-radius: 10px;
    position: relative;
  }

  .form_edit_reserv {
    padding: 0;
    width: 95%;
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

  .exclude {
    width: 95%;
  }

  .error {
    width: 100%;
    text-align: end;
    font-weight: 300;
    font-size: 12px;
    color: var(--gray-0);
  }
`;
