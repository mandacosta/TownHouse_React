import React, { useContext } from "react";
import { AuthContext } from "../../../../../context/authContext";
import { IssuesContext } from "../../../../../context/issuesContext";
import { StyledList } from "../../../../../styles/styledList";
import { IssueCard } from "../../../IssueCard/issueCard";

export const DemaisListSyndic = () => {
  const { issuesList } = useContext(IssuesContext);

  return (
    <StyledList>
      {issuesList
        .filter((issue) => {
          return issue.type !== "aviso";
        })
        .map((issue) => {
          return <IssueCard issue={issue} key={issue.id} />;
        })
        .reverse()}
    </StyledList>
  );
};
