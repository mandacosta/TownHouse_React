import { useContext } from "react";
import { AuthContext } from "../../../context/authContext";
import { IIssuesResponse, IssuesContext } from "../../../context/issuesContext";
import { GiTrashCan } from "react-icons/gi";
import { MdEdit, MdOutlineKeyboardReturn } from "react-icons/md";
import { StyledCard, StyledTag } from "./styleIssueCard";

interface iIssueCardProps {
  issue: IIssuesResponse;
}

export const IssueCard = ({ issue }: iIssueCardProps) => {
  const { user } = useContext(AuthContext);

  const {
    setCurrentIssueFunction,
    setModalDelete,
    setModalEdit,
    setModalResponse,
  } = useContext(IssuesContext);

  const handleDelete = () => {
    console.log(issue);
    setCurrentIssueFunction(issue.id);
    setModalDelete(true);
  };

  const handleEdit = () => {
    console.log(issue);
    setCurrentIssueFunction(issue.id);
    setModalEdit(true);
  };

  const handleResponse = () => {
    console.log(issue);
    setCurrentIssueFunction(issue.id);
    setModalResponse(true);
  };

  return (
    <StyledCard key={issue.id}>
      {/* O que é comum em todos os issues */}

      <StyledTag issueType={issue.type}>{issue.type}</StyledTag>
      <h2>{issue.title}</h2>
      <p className="description">{issue.description}</p>
      {issue.reply && <p className="reply">{`Resposta: ${issue.reply}`}</p>}

      {/* Se for aviso, na dash do morador e do síndico */}

      {issue.type === "aviso" ? (
        <span className="date">{issue.date}</span>
      ) : null}

      {/* Se for aviso, na dash do síndico - retorna a div com os botões */}

      {issue.type === "aviso" && user?.isSyndic ? (
        <div className="edit_container">
          {" "}
          <GiTrashCan className="icon" onClick={handleDelete} />{" "}
          <MdEdit className="icon" onClick={handleEdit} />{" "}
        </div>
      ) : null}

      {/* Se for !== aviso na dash do síndico - retorna nome de quem fez e data + div com botões*/}

      {issue.type !== "aviso" && user?.isSyndic ? (
        <>
          <div className="edit_container">
            {" "}
            <GiTrashCan className="icon" onClick={handleDelete} />{" "}
            <MdOutlineKeyboardReturn
              className="icon"
              onClick={handleResponse}
            />{" "}
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
            <GiTrashCan className="icon" onClick={handleDelete} />{" "}
            <MdEdit className="icon" onClick={handleEdit} />{" "}
          </div>
          <div className="info_container">
            <span>{issue.date}</span>
          </div>
        </>
      ) : null}
    </StyledCard>
  );
};
