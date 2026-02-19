import * as React from "react";
import Navbar from "../../components/global/Navbar";
import { useSearchParams } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContextProvider";
import { formatLevel, reformatLevel } from "../../utils/formatLevel";

function MobileStudyPage() {
  const { flashcardLevel, setFlashcardLevel } =
    React.useContext(GlobalContext)!;
  const [searchParams, setSearchParams] = useSearchParams();

  // Get level from URL and replace
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
      <div>Study</div>
    </>
  );
}

export default MobileStudyPage;
