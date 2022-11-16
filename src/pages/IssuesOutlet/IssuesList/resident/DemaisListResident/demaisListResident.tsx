import React, { useContext } from "react";
import { AuthContext } from "../../../../../context/authContext";
import { IssuesContext } from "../../../../../context/issuesContext";
import { StyledList } from "../../../../../styles/styledList";
import { IssueCard } from "../../../IssueCard/issueCard";

export const DemaisListResident = () => {
  const { issuesList } = useContext(IssuesContext);
  const { user } = useContext(AuthContext);

  const filteredIssues = issuesList.filter((issue) => {
    return issue.type !== "aviso" && issue.user.id === user?.id;
  });

  return (
    <StyledList>
      {filteredIssues.length > 0 ? (
        filteredIssues
          .map((issue) => {
            return <IssueCard issue={issue} key={issue.id} />;
          })
          .reverse()
      ) : (
        <p className="subTitle emptyList">
          Não existem solicitações ou reclamações 🔍
        </p>
      )}
    </StyledList>
  );
};
