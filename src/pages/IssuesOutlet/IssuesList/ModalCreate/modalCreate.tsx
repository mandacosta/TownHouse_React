import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { TextAreaInput } from "../../../../components/TextAreaInput/textAreaInput";
import { AuthContext } from "../../../../context/authContext";
import { IssuesContext } from "../../../../context/issuesContext";
import { StyledModal } from "../../../../styles/styleModal";

export const ModalCreate = () => {
  const {
    modalCreate,
    createIssues,
    date,
    newIssue,
    setModalCreate,
    typeIssue,
  } = useContext(IssuesContext);

  const [value, setValue] = useState("");

  const { user } = useContext(AuthContext);

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const dataNewIssue = {
      type: typeIssue,
      title: newIssue,
      description: value,
      date: date,
      user: user,
    };

    console.log(dataNewIssue);
    createIssues(dataNewIssue);
    setModalCreate(false);
  };

  return (
    <>
      {modalCreate ? (
        <StyledModal>
          <form onSubmit={onSubmit}>
            <TextAreaInput
              onChange={(e) => setValue(e.target.value)}
              defaultValue={""}
            />

            <div className="btn_container">
              <span
                className="btn primary"
                onClick={() => setModalCreate(false)}
              >
                Cancelar
              </span>
              <button className="btn primary submit" type="submit">
                Criar
              </button>
            </div>
          </form>
        </StyledModal>
      ) : null}
    </>
  );
};
