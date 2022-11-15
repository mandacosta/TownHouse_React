import React, { useContext } from "react";
import { AuthContext } from "../../../../../context/authContext";
import { IssuesContext } from "../../../../../context/issuesContext";
import { IssueCard } from "../../../IssueCard/issueCard";

export const DemaisListResident = () => {
  const { issuesList } = useContext(IssuesContext);
  const { user } = useContext(AuthContext);

  //ícone de excluir e editar

  return (
    <ul>
      {issuesList
        .filter((issue) => {
          return issue.type !== "aviso" && issue.user.id === user?.id;
        })
        .map((issue) => {
          return <IssueCard issue={issue} />;
        })}
    </ul>
  );
};
