import * as React from "react";
import { getTheme } from "../ui/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

type ThemeMode = "light" | "dark";

interface GlobalContextInterface {
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
  flashcardLevel: string;
  setFlashcardLevel: React.Dispatch<React.SetStateAction<string>>;
  KANJI_API: string;
}

interface GlobalContextProviderProps {
  children: React.ReactNode;
}

export const GlobalContext = React.createContext<
  GlobalContextInterface | undefined
>(undefined);

export const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({
  children,
}) => {
  const getSystemTheme = (): ThemeMode =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  const storedTheme = localStorage.getItem("theme");

  // Roundabout way of assigning type `"light" | "dark"` to this to prevent issues with
  // theme.ts
  const presetTheme: ThemeMode =
    storedTheme === "light" || storedTheme === "dark"
      ? storedTheme
      : getSystemTheme();
  const [theme, setTheme] = React.useState<"light" | "dark">(presetTheme);
  const visualTheme = React.useMemo(() => getTheme(theme), [theme]);

  const [flashcardLevel, setFlashcardLevel] = React.useState<string>(
    sessionStorage.getItem("kanjiLevel") ?? "JLPT 5",
  );
  const KANJI_API = "https://kanjiapi.dev/v1";

  const BORDER_COLOR = (theme) => theme === "dark" ? "#8C8C8C" : "#000"

  return (
    <GlobalContext.Provider
      value={{ theme, setTheme, flashcardLevel, setFlashcardLevel, KANJI_API }}
    >
      <ThemeProvider theme={visualTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </GlobalContext.Provider>
  );
};
