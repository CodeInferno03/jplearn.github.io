import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Homepage from "./pages/Homepage";
import { useMobileLayout } from "./hooks/useMobileLayout";
import MobileRoutes from "./routes/MobileRoutes";
import DesktopRoutes from "./routes/DesktopRoutes";
import { GlobalContextProvider } from "./contexts/GlobalContextProvider";

function App() {
  const isMobile = useMobileLayout();

  return (
    <GlobalContextProvider>
      {isMobile ? <MobileRoutes /> : <DesktopRoutes /> }
    </GlobalContextProvider>
  );
}

export default App;
