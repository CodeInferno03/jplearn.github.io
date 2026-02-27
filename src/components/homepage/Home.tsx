import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import ButtonBase from "@mui/material/ButtonBase";

import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const homeButtons = [
    { title: "Dictionary", destination: "/dictionary", extraSx: { mt: 5 } },
    { title: "Flash cards", destination: "/flashcards", extraSx: { mt: 2 } },
  ];

  const greetings = ["Welcome", "ようこそ"]

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
        {greetings.map((greeting, i) => (
          <Typography key={i} variant="h2">
            {greeting}
          </Typography>
        ))}
      </Box>

      {homeButtons.map((details, i) => (
        <Paper
          key={i}
          component={ButtonBase}
          elevation={0}
          sx={{
            display: "flex",
            borderRadius: "1em",
            alignSelf: "center",
            height: "12em",
            width: "80%",
            border: "0.15em solid #8c8c8c",
            ...details.extraSx,
          }}
          onClick={() => navigate(details.destination)}
        >
          <Typography variant="h4">{details.title}</Typography>
        </Paper>
      ))}
    </Box>
  );
}

export default Home;
