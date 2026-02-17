import { createTheme } from "@mui/material/styles";

export const getTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      ...(mode === "dark" && {
        background: {
          default: "#242424",
          paper: "#242424",
        },
        text: {
          primary: "rgba(255, 255, 255, 0.87)",
          secondary: "rgba(255, 255, 255, 0.6)",
        },
      }),
    },
    typography: {
      fontFamily: [
        "Montserrat",   // Primary (English)
        "Klee One",   // Fallback for Japanese glyphs
        "system-ui",
        "sans-serif",
      ].join(","),
    },
  });
