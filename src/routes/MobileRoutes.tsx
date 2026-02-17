import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MobileHomepage from "../pages/MobileHomepage";

function MobileRoutes() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/jplearn/" element={<MobileHomepage />} />
      </Routes>
    </BrowserRouter>

    );
}

export default MobileRoutes;
