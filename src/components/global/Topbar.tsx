import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { NavLink, useNavigate } from "react-router-dom";
import { TypographyProps } from "@mui/material/Typography";

type TopbarProps = {
  title: string;
  textVariant?: TypographyProps["variant"];
  navDestination?: string;
};


function Topbar({ title, textVariant = "h4", navDestination = "/" }: TopbarProps) {
  const navButtonStyle = {
    fontSize: "2.25em",
    borderRadius: "50%",
    color: "rgba(187, 187, 187, 1)",
  };

  return (
    <Box sx={{ width: "100%" }}>
      <AppBar
        position="fixed"
        elevation={0} // removes shadow
        sx={(theme) => ({
          top: 0,
          bottom: "auto",
          backgroundColor: theme.palette.background.default, // blend with page
          borderBottom: `1px solid rgba(87, 87, 87, 0.35)`,
        })}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <NavLink to={navDestination}>
            <KeyboardBackspaceIcon
              sx={{
                ...navButtonStyle,
              }}
            />
          </NavLink>
          <Typography
            variant={textVariant}
            sx={{
              pb: 1.5,
              pt: 1.5,
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Topbar;
