import * as React from "react";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Tooltip from "@mui/material/Tooltip";

import { GlobalContext } from "../../contexts/GlobalContextProvider";
function ThemeButton() {
  const { theme, setTheme } = React.useContext(GlobalContext)!;
  const navButtonStyle = {
    width: "2em",
    height: "2em",
    borderRadius: "50%",
    position: "absolute",
    top: "0",
    right: "0",
    color: (theme: any) =>
      theme.palette.mode === "dark"
        ? theme.palette.text.primary
        : "#040404",
  };

  React.useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <Tooltip title={`Enable ${theme === "light" ? "dark" : "light"} theme`}>
      <IconButton
        color="inherit"
        onClick={toggleTheme}
        aria-label={`Enable ${theme === "light" ? "dark" : "light"} theme`}
        sx={{
          ...navButtonStyle,
        }}
      >
        {theme === "light" ? <DarkModeIcon fontSize="large" /> : <LightModeIcon fontSize="large" />}
      </IconButton>
    </Tooltip>
  );
}

export default ThemeButton;
