import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  UseFormRegister,
} from "react-hook-form";
import { OutlinedInput } from "@mui/material";

export interface iPassWordInputProps {
  showPassWord: boolean;
  setShowPassWord: React.Dispatch<React.SetStateAction<boolean>>;
  register: UseFormRegister<FieldValues>;
  dataName: string;
  errors:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
  label: string;
}

export const PasswordInput = ({
  showPassWord,
  setShowPassWord,
  register,
  dataName,
  errors,
  label,
}: iPassWordInputProps) => {
  return (
    <FormControl variant="outlined">
      <p className="error">{errors ? `${errors}` : ``}</p>
      <InputLabel>{label}</InputLabel>
      <OutlinedInput
        type={showPassWord ? "text" : "password"}
        label={label}
        {...register(`${dataName}`)}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPassWord(!showPassWord)}
              edge="end"
            >
              {showPassWord ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};
