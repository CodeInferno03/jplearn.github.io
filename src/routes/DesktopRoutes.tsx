import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DesktopHomepage from "../pages/desktop/DesktopHomepage";

function DesktopRoutes() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/jplearn/" element={<DesktopHomepage />} />
      </Routes>
    </BrowserRouter>

    );
}

export default DesktopRoutes;
