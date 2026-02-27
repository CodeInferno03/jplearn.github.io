import * as React from "react";
import Navbar from "../../components/global/Navbar";
import { useSearchParams } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContextProvider";
import { formatLevel, reformatLevel } from "../../utils/formatLevel";
// import ReturnButton from "../../components/flashcards/ReturnButton";
import StudyFlashcard from "../../components/flashcards/StudyFlashcards";
import Box from "@mui/material/Box";
import NavigateCardButton from "../../components/flashcards/NavigateCardButton";
import axios from "axios";
import { shuffleArray } from "../../utils/arrayUtils";
import Topbar from "../../components/global/Topbar";

function MobileStudyPage() {
  const { flashcardLevel, setFlashcardLevel, KANJI_API } =
    React.useContext(GlobalContext)!;
  const [searchParams, setSearchParams] = useSearchParams();
  const [kanjiArr, setKanjiArr] = React.useState<Array<string | undefined>>([]);

  // Get level from URL and replace
  // React.useEffect(() => {
  //   const levelFromUrl = searchParams.get("level");
  //   let url = KANJI_API + "kanji/";
  //   if (levelFromUrl && levelFromUrl !== flashcardLevel) {
  //     setFlashcardLevel(reformatLevel(levelFromUrl));
  //     url += levelFromUrl;
  //   } else {
  //     setSearchParams({ level: formatLevel(flashcardLevel) });
  //     url += formatLevel(flashcardLevel);
  //   }

  //   console.log(`url: ${url}`)
  //   console.log(`level from url: ${levelFromUrl}`)
  //   console.log(`flashcard level: ${flashcardLevel}`)

  //   axios
  //     .get(url, {
  //       headers: { "Content-Type": "application/json" },
  //     })
  //     .then((response) => {
  //       const data = response.data;
  //       setKanjiArr((prev) => shuffleArray(data));
  //     });
  // }, []);
  React.useEffect(() => {
    const levelFromUrl = searchParams.get("level");

    const resolvedLevel = levelFromUrl
      ? reformatLevel(levelFromUrl)
      : flashcardLevel;

    // Keep URL in sync if missing
    if (!levelFromUrl) {
      setSearchParams({ level: formatLevel(resolvedLevel) });
    }

    setFlashcardLevel(resolvedLevel);

    const url = `${KANJI_API}/kanji/${formatLevel(resolvedLevel)}`;

    axios
      .get(url, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        setKanjiArr(shuffleArray(response.data));
      });
  }, [searchParams]);

  return (
    <>
      {/* <ReturnButton destination="/flashcards" /> */}
      <Topbar
        title="Study Flashcards"
        textVariant="h6"
        navDestination="/flashcards"
      />
      <StudyFlashcard />
      <NavigateCardButton />
    </>
  );
}

export default MobileStudyPage;
