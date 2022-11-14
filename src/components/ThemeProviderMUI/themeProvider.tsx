import { createTheme, ThemeProvider } from "@mui/material/styles";

interface iThemeComponentProps {
  children: React.ReactNode;
  primary: boolean;
}

export const ThemeComponent = ({ children, primary }: iThemeComponentProps) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: `${primary ? `#5e8e85` : `#917d49`}`,
      },
    },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
