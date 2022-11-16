import styled from "styled-components";

export const StyledContainerInfo = styled.div`
  width: 100%;
  height: calc(100vh - 150px);
  display: flex;
  flex-direction: column;
  align-items: center;

  .container {
    width: 90%;
    max-width: 385px;
    height: fit-content;
    margin: 20px auto;
    padding: 20px;
    border-radius: 8px;
    font-size: 20px;
  }

  .name {
    width: 95%;
    height: fit-content;
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 10px;
  }

  .icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid var(--gray-1);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .person_icon {
    color: var(--gray-1);
    font-size: 30px;
  }

  .info {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 10px 0;
    background-color: #f4f4f4;
    padding: 10px;
    border-radius: 8px;
  }

  .info_line {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    gap: 5px;
  }

  .data {
    width: 70%;
    background-color: white;
    padding: 2px 8px;
    border-radius: 8px;
    font-size: 16px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .logout {
    display: flex;
    align-items: center;
  }

  .logout_icon {
    font-size: 28px;
    color: var(--gray-1);
    cursor: pointer;
  }
`;
