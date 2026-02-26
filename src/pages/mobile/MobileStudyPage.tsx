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
  const { flashcardLevel, setFlashcardLevel, KANJI_API } =
    React.useContext(GlobalContext)!;
  const [searchParams, setSearchParams] = useSearchParams();
  const [kanjiArr, setKanjiArr] = React.useState<Array<string | undefined>>([]);

  // Get level from URL and replace
  React.useEffect(() => {
    const levelFromUrl = searchParams.get("level");
    let url = KANJI_API + "kanji/";
    console.log(`levelFromUrl: ${levelFromUrl}`)
    if (levelFromUrl && levelFromUrl !== flashcardLevel) {
      setFlashcardLevel(reformatLevel(levelFromUrl));
      url += levelFromUrl;
    } else {
      url += formatLevel(flashcardLevel);
    }

    axios
      .get(url, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        const data = response.data;
        // console.log(`data: ${JSON.stringify(data)}`);
        console.log(`url: ${url}`)
        setKanjiArr((prev) => shuffleArray(data));
      });

    // setKanjiArr(levelFromUrl);
  }, []);

  React.useEffect(() => {
    if (flashcardLevel) setSearchParams({ level: formatLevel(flashcardLevel) });
  }, []);

  return (
    <>
      <ReturnButton destination="/flashcards" />
      <StudyFlashcard />
      <NavigateCardButton />
    </>
  );
}

export default MobileStudyPage;
