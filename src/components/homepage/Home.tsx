import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import ButtonBase from "@mui/material/ButtonBase";

import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const homePaperStyle = {
    borderRadius: "1em",
    alignSelf: "center",
    height: "12em",
    width: "80%",
  };

  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          mt: 7,
          flexDirection: "column",
          gap: 1,
          textAlign: "center",
        }}
      >
        {["Welcome", "ようこそ"].map((greeting, i) => (
          <Typography key={i} variant="h2">
            {greeting}
          </Typography>
        ))}
      </Box>
      <Paper
        component={ButtonBase}
        elevation={0}
        sx={{
          display: "flex",
          mt: 5,
          ...homePaperStyle,
        }}
        onClick={() => navigate("/dictionary")}
      >
        <Typography variant="h4">Dictionary</Typography>
      </Paper>
      <Paper
        component={ButtonBase}
        elevation={0}
        sx={{
          display: "flex",
          mt: 2,
          ...homePaperStyle,
        }}
        onClick={() => navigate("/flashcards")}
      >
        <Typography variant="h4">Flash Cards</Typography>
      </Paper>
    </Box>
  );
}

export default Home;
