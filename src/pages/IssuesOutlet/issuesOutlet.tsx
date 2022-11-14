import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { IssuesFilter } from "./IssuesFilter/issuesFilter";
import { IssuesListResident } from "./IssuesList/resident/issuesListResident";
import { IssuesListSyndic } from "./IssuesList/syndic/issuesListSyndic";

export const IssuesOutlet = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <IssuesFilter />
      {user?.isSyndic ? <IssuesListSyndic /> : <IssuesListResident />}
    </>
  );
};
