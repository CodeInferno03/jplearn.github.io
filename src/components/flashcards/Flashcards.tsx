import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { useNavigate } from "react-router-dom";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import { GlobalContext } from "../../contexts/GlobalContextProvider";

function Flashcards() {
  const navigate = useNavigate();
  const { flashcardLevel, setFlashcardLevel } =
    React.useContext(GlobalContext)!;

  const selectLevel = (event: SelectChangeEvent) => {
    sessionStorage.setItem("kanjiLevel", event.target.value);
    setFlashcardLevel(event.target.value);
  };

  const flashcardLevels = [
    "JLPT N5",
    "JLPT N4",
    "JLPT N3",
    "JLPT N2",
    "JLPT N1",
    "Grade 1",
    "Grade 2",
    "Grade 3",
    "Grade 4",
    "Grade 5",
    "Grade 6",
    "Grade 8",
    "Jouyou",
    "Jinmeiyou",
    "Kyouiku",
    "Heisig",
  ];

  const flashcardsMenuSx = {
    borderRadius: "1em",
    height: "12em",
    width: "80%",
    alignSelf: "center",
    flexDirection: "column",
    gap: 1,
  };

  const flashcardSubtextSx = {
    width: "80%",
    color: (theme) => theme.palette.text.secondary,
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        overflowY: "auto",
      }}
    >
      <Typography variant="h3" sx={{ mt: 5 }}>
        Flashcards
      </Typography>

      <Box sx={{ mt: 3 }}>
        <InputLabel sx={{ color: (theme) => theme.palette.text.primary }}>
          Kanji Level
        </InputLabel>
        <Select
          value={flashcardLevel}
          onChange={selectLevel}
          sx={{ width: "80%" }}
          MenuProps={{
            slotProps: {
              paper: {
                sx: {
                  maxHeight: "25em", // makes it scrollable
                  borderBottomRightRadius: "1em",
                  borderBottomLeftRadius: "1em",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  "&::-webkit-scrollbar": {
                    display: "none",
                  },
                },
              },
            },
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left",
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "left",
            },
          }}
        >
          {flashcardLevels.map((level, i) => (
            <MenuItem key={i} value={level} sx={{ justifyContent: "center" }}>
              {level}
            </MenuItem>
          ))}
        </Select>
      </Box>

      <Paper
        component={ButtonBase}
        elevation={0}
        sx={{
          display: "flex",
          mt: 5,
          ...flashcardsMenuSx,
        }}
        onClick={() => navigate("/flashcards/study")}
      >
        <Typography variant="h4">Study</Typography>
        <Typography sx={{ ...flashcardSubtextSx }}>
          Learn kanji of any level using simple, easy-to-understand flashcards!
        </Typography>
      </Paper>

      <Paper
        component={ButtonBase}
        elevation={0}
        sx={{
          display: "flex",
          mt: 1,
          ...flashcardsMenuSx,
        }}
        onClick={() => navigate("/flashcards/quiz")}
      >
        <Typography variant="h4">Quiz</Typography>
        <Typography sx={{ ...flashcardSubtextSx }}>
          Test your kanji memorization and usage skills!
        </Typography>
      </Paper>
    </Box>
  );
}

export default Flashcards;
