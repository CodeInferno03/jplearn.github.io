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

function Navbar() {
  const { theme, setTheme } = React.useContext(GlobalContext)!;
  const navigate = useNavigate();

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const navButtonStyle = {
    width: "2em",
    height: "2em",
    borderRadius: "50%",
  };

  return (
    <Box>
      <AppBar position="fixed" sx={{ bottom: 0, top: "auto" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <IconButton
            color="inherit"
            sx={{
              ...navButtonStyle,
            }}
          >
            <TranslateIcon />
          </IconButton>

          <IconButton
            color="inherit"
            sx={{
              ...navButtonStyle,
            }}
          >
            <CollectionsBookmarkIcon />
          </IconButton>

          <IconButton
            color="inherit"
            sx={{
              ...navButtonStyle,
            }}
          >
            <HomeOutlinedIcon />
          </IconButton>

          <IconButton
            color="inherit"
            sx={{
              ...navButtonStyle,
            }}
          >
            <QuizIcon />
          </IconButton>

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
