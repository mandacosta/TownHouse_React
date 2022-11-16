import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { IssuesContext } from "../../../../context/issuesContext";
import TextField from "@mui/material/TextField";
import { ThemeComponent } from "../../../../components/ThemeProviderMUI/themeProvider";
import { TextAreaInput } from "../../../../components/TextAreaInput/textAreaInput";
import { StyledModal } from "../../../../styles/styleModal";

export const ModalEdit = () => {
  const { modalEdit, setModalEdit, currentIssue, setCurrentIssue, editIssues } =
    useContext(IssuesContext);

  const [value, setValue] = useState(currentIssue?.description);

  const onSubmit = () => {
    const dataEditIssue: string | undefined = value;

    if (currentIssue && dataEditIssue) {
      console.log("aqui");
      editIssues(dataEditIssue, currentIssue.id);
      setModalEdit(false);
      setCurrentIssue(null);
    }
  };

  const handleCancel = () => {
    setCurrentIssue(null);
    setModalEdit(false);
  };

  return (
    <>
      {modalEdit ? (
        <StyledModal>
          <form onSubmit={onSubmit}>
            <TextAreaInput
              onChange={(e) => setValue(e.target.value)}
              defaultValue={currentIssue?.description}
            />

            <div className="btn_container">
              <span className="btn primary" onClick={handleCancel}>
                Cancelar
              </span>
              <button className="btn primary submit" type="submit">
                Editar
              </button>
            </div>
          </form>
        </StyledModal>
      ) : null}
    </>
  );
};
