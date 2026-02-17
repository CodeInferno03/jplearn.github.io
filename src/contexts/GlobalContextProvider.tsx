import * as React from "react";
import { getTheme } from "../ui/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

interface GlobalContextInterface {
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
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
  const [theme, setTheme] = React.useState<"light" | "dark">("light");
  const visualTheme = React.useMemo(() => getTheme(theme), [theme]);

  

  return (
    <GlobalContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={visualTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </GlobalContext.Provider>
  );
};
