import * as React from 'react';
import Navbar from '../../components/global/Navbar';
import Flashcards from '../../components/flashcards/Flashcards';
import { Outlet } from 'react-router-dom';

function MobileFlashcardsPage() {
  return (
  <>
    <Flashcards />
    <Navbar />
    <Outlet />
  </>
  );
}

export default MobileFlashcardsPage;
