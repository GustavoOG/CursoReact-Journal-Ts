import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import purpleTheme from "./purpleTheme";
import { ReactNode } from "react";
interface Props {
  children?: ReactNode;
}
function Apptheme({ children }:Props) {
  return (
    <ThemeProvider theme={purpleTheme}>
      <CssBaseline></CssBaseline>
      {children}
    </ThemeProvider>
  );
}

export default Apptheme;
