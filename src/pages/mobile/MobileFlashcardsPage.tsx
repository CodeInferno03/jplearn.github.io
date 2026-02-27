import * as React from 'react';
import Navbar from '../../components/global/Navbar';
import Flashcards from '../../components/flashcards/Flashcards';
import { Outlet } from 'react-router-dom';
import Topbar from '../../components/global/Topbar';

function MobileFlashcardsPage() {
  return (
  <>
    <Topbar title="Flashcards" />
    <Flashcards />
    <Navbar />
    <Outlet />
  </>
  );
}

export default MobileFlashcardsPage;
