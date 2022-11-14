import TextField from "@mui/material/TextField";
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  UseFormRegister,
} from "react-hook-form";

export interface iTextInputProps {
  register: UseFormRegister<FieldValues>;
  dataName: string;
  errors:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
  label: string;
}

export const TextInput = ({
  register,
  errors,
  label,
  dataName,
}: iTextInputProps) => {
  return (
    <>
      <TextField {...register(`${dataName}`)} label={label} />
      <p className="subTitle">{errors ? `${errors}` : ``}</p>
    </>
  );
};
