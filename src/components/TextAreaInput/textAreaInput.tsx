import TextField from "@mui/material/TextField";
import { ChangeEventHandler } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { ThemeComponent } from "../ThemeProviderMUI/themeProvider";

export interface iTextAreaInputProps {
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  defaultValue: string | undefined;
}

export const TextAreaInput = ({
  onChange,
  defaultValue,
}: iTextAreaInputProps) => {
  return (
    <ThemeComponent primary={true}>
      <TextField
        label="Descrição"
        multiline
        rows={5}
        onChange={onChange}
        defaultValue={defaultValue}
        fullWidth
      />
    </ThemeComponent>
  );
};
