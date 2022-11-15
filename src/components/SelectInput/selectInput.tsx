import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ThemeComponent } from "../ThemeProviderMUI/themeProvider";

interface iOptionList {
  value: string;
  label: string;
}

interface iSelectInputProps {
  optionList: iOptionList[];
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  label: string;
}

export const SelectInput = ({
  optionList,
  state,
  setState,
  label,
}: iSelectInputProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    setState(event.target.value);
  };
  return (
    <>
      <ThemeComponent primary={true}>
        <InputLabel>{label}</InputLabel>
        <Select value={state} label={label} onChange={handleChange}>
          {optionList.map((option) => {
            return (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            );
          })}
        </Select>
      </ThemeComponent>
    </>
  );
};
