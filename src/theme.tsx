import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          fontSize: "1rem",
          "&:hover": {
            backgroundColor: "#704EA6",
          },
          disableFocusRipple: true,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#2A198A",
    },
    // Define a light purple color within the palette if you want to use it elsewhere.
  },
});
