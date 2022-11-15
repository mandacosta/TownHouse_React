import { useContext } from "react";
import { AuthContext } from "../../../context/authContext";
import { IIssuesResponse } from "../../../context/issuesContext";
import { GiTrashCan } from "react-icons/gi";
import { MdEdit, MdOutlineKeyboardReturn } from "react-icons/md";
import { StyledCard, StyledTag } from "./styleIssueCard";

interface iIssueCardProps {
  issue: IIssuesResponse;
}

export const IssueCard = ({ issue }: iIssueCardProps) => {
  const { user } = useContext(AuthContext);
  return (
    <StyledCard key={issue.id}>
      {/* O que é comum em todos os issues */}

      <StyledTag issueType={issue.type}>{issue.type}</StyledTag>
      <h2>{issue.title}</h2>
      <p>{issue.description}</p>

      {/* Se for aviso, na dash do morador e do síndico */}

      {issue.type === "aviso" ? <span>{issue.date}</span> : null}

      {/* Se for aviso, na dash do síndico - retorna a div com os botões */}

      {issue.type === "aviso" && user?.isSyndic ? (
        <div className="edit_container">
          {" "}
          <GiTrashCan /> <MdEdit />{" "}
        </div>
      ) : null}

      {/* Se for !== aviso na dash do síndico - retorna nome de quem fez e data + div com botões*/}

      {issue.type !== "aviso" && user?.isSyndic ? (
        <>
          <div className="edit_container">
            {" "}
            <GiTrashCan /> <MdOutlineKeyboardReturn />{" "}
          </div>
          <div className="info_container">
            <span>
              {issue.user.name} - apt.: {issue.user.aptNumber}
            </span>
            <span>{issue.date}</span>
          </div>
        </>
      ) : null}

      {/* Se for !== aviso na dash do morador - retorna apenas a data + div com botões */}

      {issue.type !== "aviso" && !user?.isSyndic ? (
        <>
          <div className="edit_container">
            {" "}
            <GiTrashCan /> <MdEdit />{" "}
          </div>
          <div className="info_container">
            <span>{issue.date}</span>
          </div>
        </>
      ) : null}
    </StyledCard>
  );
};
