import { useContext } from "react";
import { IssuesContext } from "../../../../context/issuesContext";
import { AvisoList } from "../avisoList/avisoList";
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
        </>
      ) : (
        <DemaisListSyndic />
      )}
    </>
  );
};
