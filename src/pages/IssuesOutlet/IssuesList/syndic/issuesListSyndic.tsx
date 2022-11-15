import { useContext } from "react";
import { IssuesContext } from "../../../../context/issuesContext";
import { AvisoList } from "../avisoList/avisoList";
import { ModalCreate } from "../ModalCreate/modalCreate";
import { ModalReply } from "../ModalReply/modalReply";
import { DemaisListSyndic } from "./DemaisListSyndic/demaisListSyndic";
import { NewAviso } from "./NewAviso/newAviso";

export const IssuesListSyndic = () => {
  const { filter } = useContext(IssuesContext);
  return (
    <>
      {filter === "aviso" ? (
        <>
          <NewAviso />
          <AvisoList />
          <ModalCreate />
        </>
      ) : (
        <>
          <DemaisListSyndic />
          <ModalReply />
        </>
      )}
    </>
  );
};
