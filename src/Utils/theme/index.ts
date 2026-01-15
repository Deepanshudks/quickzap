import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "Inter, system-ui, sans-serif",
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          fontFamily: "Inter, system-ui, sans-serif",
          "&::placeholder": {
            fontFamily: "Inter, system-ui, sans-serif",
          },
        },
      },
    },
  },
});
