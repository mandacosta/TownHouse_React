import React, { useContext, useState } from "react";
import { TextAreaInput } from "../../../../components/TextAreaInput/textAreaInput";
import { IssuesContext } from "../../../../context/issuesContext";
import { StyledModal } from "../../../../styles/styleModal";

export const ModalReply = () => {
  const {
    modalResponse,
    setModalResponse,
    currentIssue,
    setCurrentIssue,
    replyIssues,
  } = useContext(IssuesContext);

  const [value, setValue] = useState(currentIssue?.reply);

  const onSubmit = () => {
    const dataReplyIssue: string | undefined = value;

    if (currentIssue && dataReplyIssue) {
      console.log("aqui");
      replyIssues(dataReplyIssue, currentIssue.id);
      setModalResponse(false);
      setCurrentIssue(null);
    }
  };

  const handleCancel = () => {
    setCurrentIssue(null);
    setModalResponse(false);
  };

  return (
    <>
      {modalResponse ? (
        <StyledModal>
          <form onSubmit={onSubmit}>
            <TextAreaInput
              onChange={(e) => setValue(e.target.value)}
              defaultValue={
                currentIssue?.reply ? currentIssue?.reply : "Sua resposta aqui"
              }
            />

            <div className="btn_container">
              <span className="btn primary" onClick={handleCancel}>
                Cancelar
              </span>
              <button className="btn primary submit" type="submit">
                Responder
              </button>
            </div>
          </form>
        </StyledModal>
      ) : null}
    </>
  );
};
