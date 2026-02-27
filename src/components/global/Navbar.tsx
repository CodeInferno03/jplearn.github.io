import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
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
import { color } from "@mui/system";

function Navbar() {
  const iconFontSize = "large";

  const icons = [
    {
      tooltip: "Dictionary",
      icon: <TranslateIcon fontSize={iconFontSize} />,
      destination: "/dictionary",
      ariaLabel: "Go to dictionary",
    },
    {
      tooltip: "Home",
      icon: <HomeOutlinedIcon fontSize={iconFontSize} />,
      destination: "/",
      ariaLabel: "Go to home page",
    },
    {
      tooltip: "Flashcards",
      icon: <AutoStoriesIcon fontSize={iconFontSize} />,
      destination: "/flashcards",
      ariaLabel: "Go to flashcards page",
    },
  ];

  const navButtonStyle = {
    width: "2em",
    height: "2em",
    borderRadius: "50%",
    // color: (theme) => theme.palette.text.secondary,
    color: "rgba(187, 187, 187, 1)"
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
          borderTop: `1px solid rgba(87, 87, 87, 0.35)`,
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
              <Paper
                elevation={0}
                sx={{
                  borderRadius: "50%",
                  bgcolor: (theme) => theme.palette.background.paper
                }}
              >
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
              </Paper>
            </Tooltip>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
