import * as React from "react";
import PropTypes from "prop-types";

interface GlobalContextInterface {
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}

interface GlobalContextProviderProps {
  children: React.ReactNode;
}

export const GlobalContext = React.createContext<GlobalContextInterface | undefined>(
  undefined,
);

export const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = React.useState<"light" | "dark">("light");

  return (
    <GlobalContext.Provider value={{ theme, setTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};
