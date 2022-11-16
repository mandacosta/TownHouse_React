import styled, { css } from "styled-components";

interface IIssueType {
  issueType: string;
}

export const StyledCard = styled.li`
  position: relative;
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  height: fit-content;
  padding: 10px;
  border-radius: 8px;
  background-color: var(--white);
  box-shadow: 3px 3px 5px rgba(27, 28, 30, 0.1);
  border: 1px solid var(--gray-2);
  display: flex;
  flex-direction: column;
  gap: 5px;

  h2 {
    margin-top: 30px;
  }

  .description,
  .reply {
    line-height: 24px;
  }

  .reply {
    font-style: italic;
  }

  .edit_container {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 25px;
  }

  .icon {
    cursor: pointer;
  }

  .info_container {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .date {
    text-align: end;
  }

  .date_resident {
    width: 100%;
    text-align: end;
  }
`;

export const StyledTag = styled.span<IIssueType>`
  padding: 3px 10px;
  border-radius: 32px;
  font-size: 14px;
  font-family: var(--font-secundary);
  font-weight: 700;
  position: absolute;
  top: 10px;
  left: 10px;

  ${({ issueType }) => {
    switch (issueType) {
      case "aviso":
        return css`
          background-color: var(--aviso-opacity);
          color: var(--aviso);
        `;

      case "solicitação":
        return css`
          background-color: var(--solicitacao-opacity);
          color: var(--solicitacao);
        `;

      case "reclamação":
        return css`
          background-color: var(--reclamacao-opacity);
          color: var(--reclamacao);
        `;

      default:
        return css`
          background-color: #fff;
          color: var(--gray-0);
        `;
    }
  }}
`;
