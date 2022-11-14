import { useContext, useState } from "react";
import { IssuesContext } from "../../../context/issuesContext";
import { StyledIssuesFilter } from "./styleIssuesFilter";

export interface IFilterProps {
  filter: string;
}

export const IssuesFilter = () => {
  const { setFilter, filter } = useContext(IssuesContext);
  const [activeFilter, setActiveFilter] = useState<string>("aviso");

  const onClickAviso = () => {
    //setFilter("aviso")

    setActiveFilter("aviso");
  };

  const onClickDemais = () => {
    //setFilter("demais")

    setActiveFilter("demais");
  };

  return (
    <StyledIssuesFilter>
      <button
        className={`subtitle ${activeFilter === "aviso" ? "active" : ""}`}
        onClick={onClickAviso}
      >
        Mural
      </button>
      <button
        className={`subtitle ${activeFilter === "demais" ? "active" : ""}`}
        onClick={onClickDemais}
      >
        Solicitações
      </button>
    </StyledIssuesFilter>
  );
};
