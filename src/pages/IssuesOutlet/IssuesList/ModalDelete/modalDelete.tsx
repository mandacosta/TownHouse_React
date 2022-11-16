import { useContext } from "react";
import { IssuesContext } from "../../../../context/issuesContext";
import { StyledModal } from "../../../../styles/styleModal";

export const ModalDelete = () => {
  const { modalDelete, setModalDelete, deleteIssues, currentIssue } =
    useContext(IssuesContext);

  const onSubmit = () => {
    deleteIssues(currentIssue?.id);
    setModalDelete(false);
  };

  return (
    <>
      {modalDelete ? (
        <StyledModal>
          <form onSubmit={onSubmit}>
            <p className="subTitle black">Deseja deletar este tópico ?</p>
            <div className="btn_container">
              <span
                className="btn primary"
                onClick={() => setModalDelete(false)}
              >
                Cancelar
              </span>
              <button className="btn primary submit" type="submit">
                Deletar
              </button>
            </div>
          </form>
        </StyledModal>
      ) : null}
    </>
  );
};
