import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MobileHomepage from "../pages/MobileHomepage";
import Navbar from "../components/global/Navbar";

function MobileRoutes() {
  return (
    <>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<MobileHomepage />} />
        </Routes>
      </BrowserRouter>
      <Navbar />
    </>
  );
}

export default MobileRoutes;
