import * as React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { NavLink, useNavigate } from "react-router-dom";

function ReturnButton({ destination, style = {} }) {
  const navigate = useNavigate();
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
