import styled, { css } from "styled-components";

interface IIssueType {
  issueType: string;
}

export const StyledCard = styled.li``;

export const StyledTag = styled.span<IIssueType>`
  padding: 3px 10px;
  border-radius: 32px;

  font-size: 14px;
  font-family: var(--font-secundary);
  font-weight: 700;

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
