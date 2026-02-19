import * as React from "react";
import IconButton from "@mui/material/IconButton";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { NavLink } from "react-router-dom";

function ReturnButton({ destination, style = {} }) {
  return (
    <NavLink to={destination}>
      <KeyboardBackspaceIcon
        sx={{
          position: "absolute",
          top: 5,
          left: 5,
          fontSize: "3em",
          color: (theme) => theme.palette.text.primary,
          ...style,
        }}
      />
    </NavLink>
  );
}

export default ReturnButton;
