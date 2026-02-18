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
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Tooltip from "@mui/material/Tooltip";

import { GlobalContext } from "../../contexts/GlobalContextProvider";
import { NavLink, useNavigate } from "react-router-dom";
import { color } from "@mui/system";

function Navbar() {
  const icons = [
    {
      tooltip: "Dictionary",
      icon: <TranslateIcon fontSize="large" />,
      destination: "/dictionary",
      ariaLabel: "Go to dictionary",
    },
    {
      tooltip: "Home",
      icon: <HomeOutlinedIcon fontSize="large" />,
      destination: "/",
      ariaLabel: "Go to home page",
    },
    {
      tooltip: "Flashcards",
      icon: <AutoStoriesIcon fontSize="large" />,
      destination: "/flashcards",
      ariaLabel: "Go to flashcards page",
    },
  ];

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
          {icons.map((details, i) => (
            <Tooltip key={i} title={details.tooltip}>
              <NavLink to={details.destination}>
                <IconButton
                  color="inherit"
                  aria-label={details.ariaLabel}
                  sx={{
                    ...navButtonStyle,
                  }}
                >
                  {details.icon}
                </IconButton>
              </NavLink>
            </Tooltip>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
