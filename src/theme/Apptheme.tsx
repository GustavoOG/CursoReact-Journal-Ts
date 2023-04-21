import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import purpleTheme from "./purpleTheme";

function Apptheme({ children }) {
  return (
    <ThemeProvider theme={purpleTheme}>
      <CssBaseline></CssBaseline>
      {children}
    </ThemeProvider>
  );
}

export default Apptheme;
