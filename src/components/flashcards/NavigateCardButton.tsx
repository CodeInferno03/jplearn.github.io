import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function NavigateCardButton() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: 8,
      }}
    >
      <Button
        variant="contained"
        sx={{
          width: "80%",
          display: "flex",
          borderRadius: "2.5%",
          bgcolor: "#0faada",
          fontWeight: "bold"
        }}
      >
        Next Card
      </Button>
    </Box>
  );
}

export default NavigateCardButton;
