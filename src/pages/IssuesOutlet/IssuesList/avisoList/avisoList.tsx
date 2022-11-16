import React, { useContext } from "react";
import { IssuesContext } from "../../../../context/issuesContext";
import { StyledList } from "../../../../styles/styledList";
import { IssueCard } from "../../IssueCard/issueCard";

export const AvisoList = () => {
  const { issuesList } = useContext(IssuesContext);

  return (
    <StyledList>
      {issuesList
        .filter((issue) => issue.type === "aviso")
        .map((issue) => {
          return <IssueCard issue={issue} key={issue.id} />;
        })
        .reverse()}
    </StyledList>
  );
};
