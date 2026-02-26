import { createTheme } from "@mui/material/styles";

export const getTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      ...(mode === "dark" ? {
        background: {
          default: "#020202",
          paper: "#0E0E17",
        },
        text: {
          primary: "rgba(255, 255, 255, 0.87)",
          secondary: "rgba(255, 255, 255, 0.6)",
        },
      } : {
        background: {
          default: "#f1f1f1",
          paper: "#fff",
        },
        text: {
          primary: "rgba(0,0,0, 0.87)",
          secondary: "rgba(87, 87, 87, 0.5)",
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
