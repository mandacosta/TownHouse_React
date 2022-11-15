import React, { useContext } from "react";
import { IssuesContext } from "../../../../context/issuesContext";
import { IssueCard } from "../../IssueCard/issueCard";

export const AvisoList = () => {
  const { issuesList } = useContext(IssuesContext);

  //se for síndico: ícone de excluir e editar
  //se for morador: sem ícones

  return (
    <ul>
      {issuesList
        .filter((issue) => issue.type === "aviso")
        .map((issue) => {
          return <IssueCard issue={issue} />;
        })}
    </ul>
  );
};
