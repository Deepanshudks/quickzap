import "./App.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "@mui/material";
import { theme } from "Utils/theme";
import AppRoutes from "Routes";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Toaster position="bottom-left" richColors duration={5000} />
        <AppRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;
