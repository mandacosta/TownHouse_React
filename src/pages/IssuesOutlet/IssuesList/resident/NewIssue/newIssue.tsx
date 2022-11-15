import React, { useContext } from "react";
import { SelectInput } from "../../../../../components/SelectInput/selectInput";
import { ThemeComponent } from "../../../../../components/ThemeProviderMUI/themeProvider";
import { IssuesContext } from "../../../../../context/issuesContext";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";

export const NewIssue = () => {
  const { setNewDate, setNewIssue, setModalCreate, setTypeIssue, typeIssue } =
    useContext(IssuesContext);

  const { register, handleSubmit, reset } = useForm({});

  const optionList = [
    {
      value: "solicitação",
      label: "Solicitação",
    },
    {
      value: "reclamação",
      label: "Reclamação",
    },
  ];

  const onSubmit = handleSubmit((data) => {
    const date = new Date();
    setNewDate(date.toLocaleDateString());
    setNewIssue(data.title);
    setModalCreate(true);
    reset();
  });

  return (
    <>
      <div>
        <SelectInput
          optionList={optionList}
          state={typeIssue}
          setState={setTypeIssue}
          label={"Tipo"}
        />
        <form onSubmit={onSubmit}>
          <ThemeComponent primary={true}>
            <TextField {...register("title")} label={"Assunto"} />
          </ThemeComponent>
        </form>
      </div>
    </>
  );
};
