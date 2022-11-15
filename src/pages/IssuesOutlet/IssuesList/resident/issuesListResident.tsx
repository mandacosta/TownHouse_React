import React, { useContext } from "react";
import { IssuesContext } from "../../../../context/issuesContext";
import { AvisoList } from "../avisoList/avisoList";
import { ModalCreate } from "../ModalCreate/modalCreate";
import { DemaisListResident } from "./DemaisListResident/demaisListResident";
import { NewIssue } from "./NewIssue/newIssue";

export const IssuesListResident = () => {
  const { filter } = useContext(IssuesContext);
  return (
    <>
      {filter === "aviso" ? (
        <AvisoList />
      ) : (
        <>
          <NewIssue />
          <DemaisListResident />
          <ModalCreate />
        </>
      )}
    </>
  );
};
