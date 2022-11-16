import { useContext } from "react";
import { Loading } from "../../components/Loading/loading";
import { AuthContext } from "../../context/authContext";
import { IssuesContext } from "../../context/issuesContext";
import { IssuesFilter } from "./IssuesFilter/issuesFilter";
import { ModalDelete } from "./IssuesList/ModalDelete/modalDelete";
import { ModalEdit } from "./IssuesList/ModalEdit/modalEdit";
import { IssuesListResident } from "./IssuesList/resident/issuesListResident";
import { IssuesListSyndic } from "./IssuesList/syndic/issuesListSyndic";

export const IssuesOutlet = () => {
  const { user } = useContext(AuthContext);
  const { loading } = useContext(IssuesContext);
  return (
    <>
      <IssuesFilter />
      {user?.isSyndic ? <IssuesListSyndic /> : <IssuesListResident />}
      <ModalDelete />
      <ModalEdit />
      <Loading loading={loading} />
    </>
  );
};
