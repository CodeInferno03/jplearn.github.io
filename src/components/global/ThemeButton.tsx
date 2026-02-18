import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TranslateIcon from "@mui/icons-material/Translate";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import QuizIcon from "@mui/icons-material/Quiz";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Tooltip from "@mui/material/Tooltip";

import { GlobalContext } from "../../contexts/GlobalContextProvider";
import { NavLink, useNavigate } from "react-router-dom";
import { color, positions } from "@mui/system";

function ThemeButton() {
  const { theme, setTheme } = React.useContext(GlobalContext)!;
  const navButtonStyle = {
    width: "2em",
    height: "2em",
    borderRadius: "50%",
    position: "absolute",
    top: "0",
    right: "0",
    color: (theme) =>
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
