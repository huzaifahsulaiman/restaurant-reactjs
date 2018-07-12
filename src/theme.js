import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#9492bb",
      main: "#66648b",
      dark: "#3a3a5e",
      contrastText: "#ffffff"
    },
    secondary: {
      light: "#ffffff",
      main: "#ffffff",
      dark: "#cccccc",
      contrastText: "#66648b"
    }
  }
});
