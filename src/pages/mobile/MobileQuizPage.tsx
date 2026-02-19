import * as React from "react";
import Navbar from "../../components/global/Navbar";
import { GlobalContext } from "../../contexts/GlobalContextProvider";
import { useSearchParams } from "react-router-dom";
import { formatLevel, reformatLevel } from "../../utils/formatLevel";

function MobileQuizPage() {
  const { flashcardLevel, setFlashcardLevel } =
    React.useContext(GlobalContext)!;
  const [searchParams, setSearchParams] = useSearchParams();

  React.useEffect(() => {
    const levelFromUrl = searchParams.get("level");
    if (levelFromUrl && levelFromUrl !== flashcardLevel)
      setFlashcardLevel(reformatLevel(levelFromUrl));
  }, []);

  React.useEffect(() => {
    if (flashcardLevel) setSearchParams({ level: formatLevel(flashcardLevel) });
  }, []);

  return (
    <>
      <div>Quiz</div>
    </>
  );
}

export default MobileQuizPage;
