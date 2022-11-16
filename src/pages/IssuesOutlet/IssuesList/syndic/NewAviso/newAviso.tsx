import TextField from "@mui/material/TextField";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ThemeComponent } from "../../../../../components/ThemeProviderMUI/themeProvider";
import { IssuesContext } from "../../../../../context/issuesContext";
import { StyledForm } from "./styleNewAviso";

export const NewAviso = () => {
  const { setNewDate, setNewIssue, setModalCreate, setTypeIssue } =
    useContext(IssuesContext);

  const { register, handleSubmit, reset } = useForm({});

  const onSubmit = handleSubmit((data) => {
    const date = new Date();

    setNewDate(date.toLocaleDateString());
    setNewIssue(data.title);
    setTypeIssue("aviso");
    setModalCreate(true);

    reset();
  });

  return (
    <StyledForm onSubmit={onSubmit}>
      <h2 className="subTitle">Novo aviso</h2>
      <ThemeComponent primary={true}>
        <TextField
          {...register("title")}
          label={"Título do novo aviso"}
          fullWidth
        />
      </ThemeComponent>
    </StyledForm>
  );
};
