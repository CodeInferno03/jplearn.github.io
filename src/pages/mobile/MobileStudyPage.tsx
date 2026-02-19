import * as React from "react";
import Navbar from "../../components/global/Navbar";
import { useSearchParams } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContextProvider";
import { formatLevel, reformatLevel } from "../../utils/formatLevel";
import ReturnButton from "../../components/flashcards/ReturnButton";
import StudyFlashcard from "../../components/flashcards/StudyFlashcards";
import Box from "@mui/material/Box";
import NavigateCardButton from "../../components/flashcards/NavigateCardButton";
import axios from "axios";
import { shuffleArray } from "../../utils/arrayUtils";

function MobileStudyPage() {
  const { flashcardLevel, setFlashcardLevel } =
    React.useContext(GlobalContext)!;
  const [searchParams, setSearchParams] = useSearchParams();
  const [kanjiArr, setKanjiArr] = React.useState<Array<string | undefined>>([]);

  // Get level from URL and replace
  React.useEffect(() => {
    const levelFromUrl = searchParams.get("level");
    if (levelFromUrl && levelFromUrl !== flashcardLevel)
      setFlashcardLevel(reformatLevel(levelFromUrl));

    axios
      .get(`http://kanjiapi.dev/v1/kanji/${formatLevel(flashcardLevel)}`, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        setKanjiArr(prev => shuffleArray(response.data));
      });

    // setKanjiArr(levelFromUrl);
  }, []);

  React.useEffect(() => {
    if (flashcardLevel) setSearchParams({ level: formatLevel(flashcardLevel) });
  }, []);

  return (
    <>
      <ReturnButton destination="/flashcards" />
      {/* <Box sx={{ display: "flex", justifyContent: "center" }}> */}
      <StudyFlashcard />
      {/* </Box> */}
      <NavigateCardButton />
    </>
  );
}

export default MobileStudyPage;
