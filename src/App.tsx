import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Homepage from "./pages/Homepage";
import { useMobileLayout } from "./hooks/useMobileLayout";
import MobileRoutes from "./routes/MobileRoutes";
import DesktopRoutes from "./routes/DesktopRoutes";

function App() {
  const isMobile = useMobileLayout();

  return (
    <>
      {isMobile ? <MobileRoutes /> : <DesktopRoutes /> }
    </>
  );
}

export default App;
