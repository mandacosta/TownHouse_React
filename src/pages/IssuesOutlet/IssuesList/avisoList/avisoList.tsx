import React, { useContext } from "react";
import { IssuesContext } from "../../../../context/issuesContext";
import { StyledList } from "../../../../styles/styledList";
import { IssueCard } from "../../IssueCard/issueCard";

export const AvisoList = () => {
  const { issuesList } = useContext(IssuesContext);
  const filteresList = issuesList.filter((issue) => {
    return issue.type === "aviso";
  });

  return (
    <StyledList>
      {filteresList.length > 0 ? (
        filteresList
          .map((issue) => {
            return <IssueCard issue={issue} key={issue.id} />;
          })
          .reverse()
      ) : (
        <p className="subTitle emptyList">Não existem avisos 🔍</p>
      )}
    </StyledList>
  );
};
