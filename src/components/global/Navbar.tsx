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

import { GlobalContext } from "../../contexts/GlobalContextProvider";
import { useNavigate } from "react-router-dom";
import { color } from "@mui/system";

function Navbar() {
  const { theme, setTheme } = React.useContext(GlobalContext)!;
  // const navigate = useNavigate();

  React.useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // const navButtonStyle = {
  //   width: "2em",
  //   height: "2em",
  //   borderRadius: "50%",
  // };
  const navButtonStyle = {
    width: "2em",
    height: "2em",
    borderRadius: "50%",
    color: (theme) =>
      theme.palette.mode === "dark"
        ? theme.palette.text.primary
        : theme.palette.primary.main,
  };

  return (
    <Box sx={{ width: "100%" }}>
      {/* <AppBar position="fixed" sx={{ bottom: 0, top: "auto" }}> */}
      <AppBar
        position="fixed"
        elevation={0} // removes shadow
        sx={(theme) => ({
          bottom: 0,
          top: "auto",
          backgroundColor: theme.palette.background.default, // blend with page
          borderTop: `1px solid ${
            theme.palette.mode === "dark"
              ? "#3a3a3a" // light gray for dark mode
              : theme.palette.primary.main // blue for light mode
          }`,
        })}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          {/* Dictionary */}
          <IconButton
            color="inherit"
            sx={{
              ...navButtonStyle,
            }}
          >
            <TranslateIcon />
          </IconButton>

          {/* Study Flashcards */}
          <IconButton
            color="inherit"
            sx={{
              ...navButtonStyle,
            }}
          >
            <CollectionsBookmarkIcon />
          </IconButton>

          {/* Home Page */}
          <IconButton
            color="inherit"
            sx={{
              ...navButtonStyle,
            }}
          >
            <HomeOutlinedIcon />
          </IconButton>

          {/* Quiz Flashcards */}
          <IconButton
            color="inherit"
            sx={{
              ...navButtonStyle,
            }}
          >
            <QuizIcon />
          </IconButton>

          {/* Toggle Theme */}
          <IconButton
            color="inherit"
            onClick={toggleTheme}
            sx={{
              ...navButtonStyle,
            }}
          >
            {theme === "light" ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
